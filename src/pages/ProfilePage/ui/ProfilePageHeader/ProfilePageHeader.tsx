import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const { t } = useTranslation();
  const { t: tProfile } = useTranslation('profile');

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.box, {}, [className])}>
      <Text title={tProfile('profile')} />
      {readonly ? (
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button
            className={styles.cancelBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button
            className={styles.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;
