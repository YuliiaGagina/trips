import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tarvelReducer } from './travelSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'all',
  version: 1,
  storage,
  whitelist: ['travels'],
};
const persistedReducer = persistReducer(persistConfig, tarvelReducer);

export const store = configureStore({
  reducer: {
    travels: persistedReducer,
    filter: filterReducer,
    // user: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
