import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

const Avatar = ({
  className, src, size, alt,
}: AvatarProps) => {
  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      className={classNames(styles.avatar, {}, [className])}
      style={style}
      src={src}
      alt={alt || 'avatar'}
    />
  );
};

export default Avatar;
