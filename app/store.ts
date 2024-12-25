import { configureStore } from '@reduxjs/toolkit';
import { cryptoAssetsApi } from './src/services/assetsApi';
import { newsApi } from './src/services/newsApi';

export const store = configureStore({
  reducer: {
    [cryptoAssetsApi.reducerPath]: cryptoAssetsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoAssetsApi.middleware)
      .concat(newsApi.middleware),
});
