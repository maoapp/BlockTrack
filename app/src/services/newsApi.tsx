import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<NewsApiResponse, void>({
      query: () => ({
        url: 'everything',
        params: {
          q: 'cryptocurrency',
          apiKey: "test",
          pageSize: 10,
        },
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = newsApi;
