import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t('sign')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onCLose={onToggleModal}
      >
        {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur, corporis culpa cumque dolore dolores, eaque facilis itaque modi molestias natus porro quae quibusdam quisquam rem similique sit ut voluptatem.')}
      </Modal>
    </div>
  );
};
