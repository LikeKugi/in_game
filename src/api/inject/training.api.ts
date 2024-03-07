import { api } from '@/api';
import {
  IGetTrainingsByUserIdRequest,
  IGetTrainingsByUserIdResponse, IPostTrainingAfterRequest,
  IPostTrainingBeforeRequest, ITrainingAfter,
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
            'Authorization': `Bearer ${data.userToken}`,
          }
        }
      }
    }),
    postAfterTraining: build.mutation<ITrainingAfter, IPostTrainingAfterRequest>({
      query(data) {
        return{
          url: `/training/${data.trainingData.trainingId}/after`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${data.userToken}`,
          }
        }
      }
    })
  })
});

export const {useLazyGetTrainingsByUserIdQuery, usePostBeforeTrainingMutation, usePostAfterTrainingMutation} = trainingApi
