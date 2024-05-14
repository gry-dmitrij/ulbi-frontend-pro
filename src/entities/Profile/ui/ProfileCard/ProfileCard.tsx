import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);
  const { t } = useTranslation('profile');

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('profile')} />
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('edit')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('your_name')}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('your_surname')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
