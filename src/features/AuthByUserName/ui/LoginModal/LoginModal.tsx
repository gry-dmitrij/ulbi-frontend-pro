import Modal, { BaseModalProps } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps extends BaseModalProps{
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
    <LoginForm />
  </Modal>
);

export default LoginModal;
