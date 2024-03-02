import { api } from '@/api';
import {
  IGetTrainingsByUserIdRequest,
  IGetTrainingsByUserIdResponse,
  IPostTrainingBeforeRequest,
  ITrainingBefore
} from '@/types';

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
    }),
    postBeforeTraining: build.mutation<ITrainingBefore, IPostTrainingBeforeRequest>({
      query(data) {
        return {
          url: `/training/${data.trainingData.trainingId}/before`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${data.userToken}`
          }
        }
      }
    })
  })
});

export const {useLazyGetTrainingsByUserIdQuery, usePostBeforeTrainingMutation} = trainingApi
