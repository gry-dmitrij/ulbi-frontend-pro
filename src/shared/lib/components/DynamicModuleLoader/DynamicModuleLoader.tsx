import React, { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (
  {
    children,
    reducers,
    removeAfterUnmount,
  },
) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
