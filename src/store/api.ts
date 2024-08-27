import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => 'photos?_limit=9',
    }),
  }),
});

export const { useGetPhotosQuery } = photosApi;