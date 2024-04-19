import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = (
  {
    className,
    children,
    theme,
    ...props
  },
) => (
  <button
    type="button"
    className={classNames(styles.button, {}, [className, styles[theme]])}
    {...props}
  >
    {children}
  </button>
);

export default Button;
