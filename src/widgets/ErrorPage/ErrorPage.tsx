import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.errorPage, {}, [className])}>
      <p>{t('unexpected_error_occurred')}</p>
      <Button onClick={reloadPage}>
        {t('reload_page')}
      </Button>
    </div>
  );
};

export default ErrorPage;
