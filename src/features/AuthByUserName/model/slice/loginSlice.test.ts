import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { expect } from '@storybook/test';
import loginReducer, { loginActions } from './loginSlice';

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('user'),
    )).toEqual({ username: 'user' });
  });

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('321'),
    )).toEqual({ password: '321' });
  });
});
