import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import CurrencySelect from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Currency } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUserName?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}
export const ProfileCard = (
  {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  }: ProfileCardProps,
) => {
  const { t } = useTranslation();
  const { t: tProfile } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(
        styles.profileCard,
        {},
        [className, styles.loading],
      )}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(
        styles.profileCard,
        {},
        [className, styles.error],
      )}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('error_occurred')}
          text={t('try_reload_page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.profileCard, mods, [className])}>
      <div className={styles.header} />
      <div>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={tProfile('your_name')}
          className={styles.input}
          onChange={onChangeFirstName}
          readOnly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={tProfile('your_surname')}
          className={styles.input}
          onChange={onChangeLastName}
          readOnly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={tProfile('your_age')}
          className={styles.input}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={tProfile('city')}
          className={styles.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('enter_username')}
          className={styles.input}
          onChange={onChangeUserName}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={tProfile('enter_avatar_link')}
          className={styles.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
