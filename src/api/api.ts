import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: () => ({})
})

export const ApiReducer = api.reducerPath;
