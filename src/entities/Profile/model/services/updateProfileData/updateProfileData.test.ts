import { expect } from '@storybook/test';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'user',
  first: 'user',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const { meta, payload } = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(meta.requestStatus).toBe('fulfilled');
    expect(payload).toEqual(data);
  });

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const { meta, payload } = await thunk.callThunk();
    expect(meta.requestStatus).toBe('rejected');
    expect(payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          lastname: '',
        },
      },
    });
    const { meta, payload } = await thunk.callThunk();
    expect(meta.requestStatus).toBe('rejected');
    expect(payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
