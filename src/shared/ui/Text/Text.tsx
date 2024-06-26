import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  M = 'sizeM',
  L = 'sizeL',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

const Text = memo((
  {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  }: TextProps,
) => (
  <div className={classNames(
    '',
    {},
    [
      className,
      styles[theme],
      styles[align],
      styles[size],
    ],
  )}
  >
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
));

export default Text;
