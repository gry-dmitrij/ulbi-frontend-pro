import { expect } from '@storybook/test';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'user',
  first: 'user',
  city: 'Moscow',
  currency: Currency.RUB,
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const { meta, payload } = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(meta.requestStatus).toBe('fulfilled');
    expect(payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const { meta } = await thunk.callThunk();
    expect(meta.requestStatus).toBe('rejected');
  });
});
