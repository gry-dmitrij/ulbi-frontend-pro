import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  StateSchema, StateSchemaKey, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  StateSchemaKey,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkExtraArg,
  ThunkConfig,
};
