export interface IGetTrainingsByUserIdResponse {
  id: number
  description: string
  scheduledAt: string
  teamId: number
  teamName: string
}

export interface IGetTrainingsByUserIdRequest {
  userId: string | number
  userToken: string
}
