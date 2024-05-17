import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { Profile, ProfileSchema, ValidateProfileError } from './model/types/profile';
import profileReducer, { profileActions } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import {
  getProfileValidateErrors,
} from './model/selectors/getProfileValidateErrors/getProfileValidateErrors';

export {
  Profile,
  ProfileSchema,
  ValidateProfileError,
  profileActions,
  profileReducer,
  fetchProfileData,
  updateProfileData,
  ProfileCard,
  getProfileData,
  getProfileForm,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
};
