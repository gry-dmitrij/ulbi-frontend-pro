import { classNames, Mods } from 'shared/lib/classNames/classNames';
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
  value?: string | number
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
    readOnly,
    ...props
  }: InputProps,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const [textLength, setTextLength] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [localValue, setLocalValue] = useState(value || '');
  const firstRender = useRef(true);

  const positionRef = useRef<HTMLDivElement>(null);

  const updateValue = useCallback((val: string) => {
    setLocalValue(val);
    setTextLength(val.length || 0);
    let textWidth = 0;
    if (positionRef.current) {
      positionRef.current.innerText = val;
      textWidth = positionRef.current.clientWidth;
    }
    setTextWidth(textWidth);
    setCaretPosition(textWidth || val.length);
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      return;
    }
    firstRender.current = false;
    updateValue(value != null ? `${value}` : '');
  }, [value, updateValue]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value || '';
    updateValue(val);
    onChange?.(val);
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
    const pos = element.selectionStart || 0;
    setCaretPosition((pos / textLength) * textWidth);
    onSelect?.(e);
  };

  const mods: Mods = {
    [styles.readonly]: readOnly,
  };

  const isCaretVisible = isFocused && !readOnly;

  return (
    <div className={classNames(styles.inputWrapper, mods, [className])}>
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
          readOnly={readOnly}
          onChange={onChangeHandler}
          onBlur={blurHandler}
          onFocus={focusHandler}
          onSelect={selectHandler}
        />
        <div
          ref={positionRef}
          className={styles.caretPosition}
        />
        {isCaretVisible && (
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
