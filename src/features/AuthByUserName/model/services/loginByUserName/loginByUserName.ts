import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (
    { username, password },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const { data } = await axios.post<User>('http://localhost:8000/login', {
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
