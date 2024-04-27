import type { UserSchema, User } from 'entities/User/model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import userReducer, { userActions } from './model/slice/userSlice';

export {
  userReducer,
  userActions,
  UserSchema,
  User,
  getUserAuthData,
};
