import { api } from '@/api';
import { IGetTrainingsByUserIdRequest, IGetTrainingsByUserIdResponse } from '@/types';

export const trainingApi = api.injectEndpoints({
  endpoints: build => ({
    getTrainingsByUserId: build.query<IGetTrainingsByUserIdResponse, IGetTrainingsByUserIdRequest>({
      query(obj) {
        return {
          url: `/training/user/${obj.userId}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${obj.userToken}`
          }
        }
      }
    })
  })
});

export const {useLazyGetTrainingsByUserIdQuery} = trainingApi
