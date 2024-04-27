import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import styles from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);
  const { t } = useTranslation();

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title={t('authorization_form')} />
      {error && (
        <Text
          text={t('you_entered_the_wrong_password')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        type="text"
        value={username}
        className={styles.input}
        placeholder={t('enter_username')}
        autoFocus
        onChange={onChangeUserName}
      />
      <Input
        type="text"
        value={password}
        className={styles.input}
        placeholder={t('enter_password')}
        onChange={onChangePassword}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.btn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('sign')}
      </Button>
    </div>
  );
});

export default LoginForm;
