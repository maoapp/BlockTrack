import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoAssetsApi = createApi({
  reducerPath: 'cryptoAssetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2/' }),
  endpoints: (builder) => ({
    getCryptoAssets: builder.query<CryptoAssetsResponse, void>({
      query: () => ({
        url: 'assets',
        params: { limit: 10 },
      }),
    }),
  }),
});

export const { useGetCryptoAssetsQuery } = cryptoAssetsApi;
