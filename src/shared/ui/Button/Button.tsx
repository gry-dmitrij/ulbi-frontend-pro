import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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
    theme,
    square,
    size = ButtonSize.M,
    ...props
  },
) => {
  const mods: Record<string, boolean> = {
    [styles.square]: square,
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
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
