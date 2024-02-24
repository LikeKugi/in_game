export interface ITraining {
  id: number
  description: string
  scheduledAt: string
  teamId: number
  teamName: string
}
export type IGetTrainingsByUserIdResponse = ITraining[]

export interface IGetTrainingsByUserIdRequest {
  userId: string | number
  userToken: string
}
