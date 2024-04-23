import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/home-20-20.svg';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string
}

const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  // const { t: tAbout } = useTranslation('about');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sideBar, { [styles.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles.item}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('PAGE.MAIN_TITLE')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('PAGE.ABOUT_TITLE')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={styles.lang}
          short={collapsed}
        />
      </div>
    </div>
  );
};

export default SideBar;
