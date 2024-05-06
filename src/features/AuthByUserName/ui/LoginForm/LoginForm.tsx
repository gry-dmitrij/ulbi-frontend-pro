import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import loginReducer, { loginActions } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUserName);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const { t } = useTranslation();

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
