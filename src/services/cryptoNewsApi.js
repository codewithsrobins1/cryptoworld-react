//  Fetching API Data
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '39ee123fcbmsh92d2f1d0c244380p1986e1jsnc62a1a6adbdf',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

//  Utility Function to add url and headers to API Call
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

//  API Call for Crypto News
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
