import { api } from '@/api/api';
import { IAuthLoginRequest, IAuthLoginResponse, IAuthRefreshResponse } from '@/types';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<IAuthLoginResponse, IAuthLoginRequest>({
      query(obj) {
        return {
          url: '/auth/login',
          method: 'POST',
          body: obj
        };
      }
    }),
    refreshUser: build.mutation<IAuthRefreshResponse, string>({
      query(token) {
        return {
          url: 'auth/refresh',
          method: 'POST',
          body: token,
        }
      }
    })
  })
});

export const { useLoginUserMutation, useRefreshUserMutation } = authApi;
