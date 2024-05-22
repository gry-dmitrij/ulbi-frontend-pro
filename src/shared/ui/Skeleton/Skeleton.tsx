import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

const Skeleton = (
  {
    className,
    height,
    width,
    border,
  }: SkeletonProps,
) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div
      className={classNames(styles.skeleton, {}, [className])}
      style={style}
    />
  );
};

export default Skeleton;
