import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { Profile, ProfileSchema } from './model/types/profile';
import profileReducer, { profileActions } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export {
  Profile,
  ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
};
