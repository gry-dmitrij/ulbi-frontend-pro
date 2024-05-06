import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

const Text = memo((
  {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
  }: TextProps,
) => (
  <div className={classNames(
    '',
    {},
    [className, styles[theme]],
  )}
  >
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
));

export default Text;
