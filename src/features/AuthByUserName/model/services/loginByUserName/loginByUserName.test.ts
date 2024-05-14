import { userActions } from 'entities/User';
import { expect } from '@storybook/test';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

describe('loginByUserName', () => {
  test('success login', async () => {
    const username = 'admin';
    const password = '123';
    const userData = {
      username,
      id: 1,
    };

    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const { meta, payload } = await thunk.callThunk({ username, password });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(meta.requestStatus).toBe('fulfilled');
    expect(payload).toEqual(userData);
  });

  test('error login', async () => {
    const username = 'admin';
    const password = '123';

    const thunk = new TestAsyncThunk(loginByUserName);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const { meta, payload } = await thunk.callThunk({ username, password });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(meta.requestStatus).toBe('rejected');
    expect(payload).toBe('error');
  });
});
