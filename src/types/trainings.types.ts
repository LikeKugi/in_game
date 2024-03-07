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

export interface ITrainingBefore {
  id: number
  trainingId: number
  userId: number
  frontRightHip: number
  frontLeftHip: number
  rearRightHip: number
  rearLeftHip: number
  rightAdductor: number
  leftAdductor: number
  rightGroin: number
  leftGroin: number
  rightCalf: number
  leftCalf: number
  fatigue: number
  dreamQuality: number
  musclePain: number
  stress: number
  comments: string
}

export type IBeforeTrainingForm = Omit<ITrainingBefore, 'trainingId' | 'userId' | 'id'>

export interface IPostTrainingBeforeRequest {
  userToken: string;
  trainingData: Omit<ITrainingBefore, 'id'>;
}

export interface ITrainingAfterBase {
  trainingId: number
  userId: number
  difficulty: number
  comments: string
}

export interface ITrainingAfter extends ITrainingAfterBase {
  id: number;
}

export interface IPostTrainingAfterRequest {
  userToken: string;
  trainingData: ITrainingAfterBase;
}

export type IAfterTrainingForm = Omit<ITrainingAfterBase, 'trainingId' | 'userId'>
