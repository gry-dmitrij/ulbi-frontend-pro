import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <div className={styles.links}>
      ..
    </div>
  </div>
);
