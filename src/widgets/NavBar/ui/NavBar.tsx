import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={styles.mainLink}
      >
        Главная
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/about"
      >
        О сайте
      </AppLink>
    </div>
  </div>
);
