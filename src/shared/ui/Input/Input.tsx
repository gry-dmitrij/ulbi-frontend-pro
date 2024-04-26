import { classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useState,
  FocusEvent,
  useRef,
  SyntheticEvent, useCallback, useEffect,
} from 'react';
import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string
  onChange?: (value: string) => void
}

const Input = memo((
  {
    className,
    value,
    onChange,
    placeholder,
    onBlur,
    onFocus,
    onSelect,
    ...props
  }: InputProps,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const [textLength, setTextLength] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [localValue, setLocalValue] = useState(value || '');
  const firstRender = useRef(true);

  const positionRef = useRef<HTMLDivElement>();

  const updateValue = useCallback((val: string) => {
    onChange?.(val);
    setLocalValue(val);
    setTextLength(val.length || 0);
    let textWidth = 0;
    if (positionRef.current) {
      positionRef.current.innerText = val;
      textWidth = positionRef.current.clientWidth;
    }
    setTextWidth(textWidth);
    setCaretPosition(textWidth || val.length);
  }, [onChange]);

  useEffect(() => {
    if (!firstRender.current) {
      return;
    }
    firstRender.current = false;
    updateValue(value || '');
  }, [value, updateValue]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value || '');
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const focusHandler = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const selectHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const element: HTMLInputElement = e.currentTarget;
    const pos = element.selectionStart;
    setCaretPosition((pos / textLength) * textWidth);
    onSelect?.(e);
  };

  return (
    <div className={classNames(styles.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {placeholder}
          &gt;
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          {...props}
          className={styles.input}
          value={value != null ? value : localValue}
          onChange={onChangeHandler}
          onBlur={blurHandler}
          onFocus={focusHandler}
          onSelect={selectHandler}
        />
        <div
          ref={positionRef}
          className={styles.caretPosition}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={{
              left: `${caretPosition}px`,
            }}
          />

        )}
      </div>
    </div>

  );
});

export default Input;
