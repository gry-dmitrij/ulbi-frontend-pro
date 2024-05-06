import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SideBarItemsList } from '../../model/items';
import SideBarItem from '../SideBarItem/SideBarItem';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string
}

const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {SideBarItemsList.map((item) => (
          <SideBarItem
            key={item.path}
            collapsed={collapsed}
            item={item}
          />
        ))}
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
});

export default SideBar;
