import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // имитация долгой загрузки
  setTimeout(() => resolve(import('./LoginForm')), 1000);
}));

export default LoginFormAsync;
