import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  ThunkConfig<string>>(
    'login/loginByUserName',
    async (
      { username, password },
      { rejectWithValue, dispatch, extra },
    ) => {
      try {
        const { data } = await extra.api.post<User>('/login', {
          username,
          password,
        });
        if (!data) {
          throw new Error();
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
        dispatch(userActions.setAuthData(data));
        return data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
