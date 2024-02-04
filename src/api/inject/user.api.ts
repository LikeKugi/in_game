import { api } from '@/api/api';
import { IUserShortBioResponse } from '@/types';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    getUserShortBio: build.query<IUserShortBioResponse, string | number>({
      query(userId) {
        return {
          url: `/users/short/${userId}`,
          method: 'GET'
        };
      }
    })
  })
});

export const { useLazyGetUserShortBioQuery } = userApi;
