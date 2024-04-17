import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(styles.ldsEllipsis, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
