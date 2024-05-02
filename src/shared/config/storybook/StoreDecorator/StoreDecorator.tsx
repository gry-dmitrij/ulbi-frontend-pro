import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Decorator } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import loginReducer from 'features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers:DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>,
): Decorator => (Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{
      ...defaultAsyncReducers,
      ...asyncReducers,
    }}
  >
    <Story />
  </StoreProvider>
);
