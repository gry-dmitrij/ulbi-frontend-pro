import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={styles.links}
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={styles.links}
        onClick={onShowModal}
      >
        {t('sign')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onCLose={onCloseModal}
        />
      )}
    </div>
  );
});
