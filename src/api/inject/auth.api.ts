import { api } from '@/api/api';
import { IAuthLoginRequest, IAuthLoginResponse } from '@/types';

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
  })
});

export const { useLoginUserMutation } = authApi;
