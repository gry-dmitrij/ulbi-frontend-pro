import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import styles from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/items';

interface SideBarItemProps {
  item: SideBarItemType
  collapsed?: boolean
}

const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const isAuth = useSelector(getUserAuthData);
  const { t } = useTranslation();

  if (!isAuth && item.authOnly) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(
        styles.item,
        { [styles.collapsed]: collapsed },
        [],
      )}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});

export default SideBarItem;
