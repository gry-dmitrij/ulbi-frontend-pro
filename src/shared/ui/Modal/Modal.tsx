import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

export interface BaseModalProps {
  className?: string
  isOpen?: boolean
  onCLose?: () => void
}

const { setTimeout, clearTimeout } = window;

interface ModalProps extends BaseModalProps{
  children?: ReactNode
}

const ANIMATION_DELAY = 300;

const Modal = (
  {
    className,
    children,
    isOpen,
    onCLose,
  }: ModalProps,
) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isOpeningDelay, setIsOpeningDelay] = useState(false);
  const timerRef = useRef<number>();

  const mods: Mods = {
    [styles.opened]: isOpeningDelay,
    [styles.closing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      // для работы анимации
      setTimeout(() => {
        setIsOpeningDelay(isOpen);
      }, 0);
    } else {
      setIsOpeningDelay(false);
    }
  }, [isOpen]);

  const onContentCLick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onCLose?.();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onCLose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentCLick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
