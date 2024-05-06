import Modal, { BaseModalProps } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import LoginForm from '../LoginForm/LoginForm.async';

interface LoginModalProps extends BaseModalProps {
}

const LoginModal = (
  {
    className,
    isOpen,
    onCLose,
  }: LoginModalProps,
) => (
  <Modal
    className={classNames('', {}, [className])}
    isOpen={isOpen}
    onCLose={onCLose}
  >
    <Suspense fallback={<Loader />}>
      <LoginForm onSuccess={onCLose} />
    </Suspense>
  </Modal>
);

export default LoginModal;
