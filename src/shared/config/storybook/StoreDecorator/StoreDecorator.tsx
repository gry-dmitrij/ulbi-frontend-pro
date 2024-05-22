import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Decorator } from '@storybook/react';
import loginReducer from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import articleDetailsReducer from 'entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
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
