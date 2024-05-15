import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

const Button: FC<ButtonProps> = (
  {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...props
  },
) => {
  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  const additionalClasses = [
    className,
    styles[theme],
    styles[size],
  ];
  return (
    <button
      type="button"
      className={classNames(styles.button, mods, additionalClasses)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
