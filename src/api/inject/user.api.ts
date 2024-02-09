import { api } from '@/api/api';
import { IUserBioRequest, IUserLongBioResponse, IUserShortBioResponse } from '@/types';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    getUserShortBio: build.query<IUserShortBioResponse, IUserBioRequest>({
      query({ userId, userToken }) {
        return {
          url: `/users/short/${userId}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
        };
      }
    }),
    getUserLongBio: build.query<IUserLongBioResponse, IUserBioRequest>({
      query({userId, userToken}) {
        return {
          url: `/users/info/${userId}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
        }
      }
    })
  })
});

export const { useLazyGetUserShortBioQuery, useGetUserLongBioQuery } = userApi;
