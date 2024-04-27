import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Decorator } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);
