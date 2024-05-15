import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      first: value || '',
    }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value || '',
    }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value) || 0,
    }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      city: value || '',
    }));
  }, [dispatch]);

  const onChangeUserName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      username: value || '',
    }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value || '',
    }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({
      currency: value || Currency.RUB,
    }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({
      country: value || Country.Russia,
    }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader
          className={styles.header}
        />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUserName={onChangeUserName}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>

  );
};

export default ProfilePage;
