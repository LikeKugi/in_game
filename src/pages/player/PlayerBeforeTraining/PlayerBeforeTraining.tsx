import { JSX } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserAccessToken, selectAuthUserId } from '@/store/slices/AuthSlice';
import PlayerBeforeTrainingModal from '@/components/player/PlayerBeforeTrainingModal/PlayerBeforeTrainingModal';
import { RoutesPath } from '@/routes';
import { IBeforeTrainingForm, IPostTrainingBeforeRequest } from '@/types';
import { Typography } from 'antd';
import { usePostBeforeTrainingMutation } from '@/api';

const PlayerBeforeTraining = (): JSX.Element => {
  const {trainingId} = useParams()
  const userId = useAppSelector(selectAuthUserId);
  const userToken = useAppSelector(selectAuthUserAccessToken);

  const [postBeforeTrainingsData] = usePostBeforeTrainingMutation();

  if(trainingId === undefined || userId === undefined || userId === null || !userToken) {
    return <Navigate to={RoutesPath.INDEX.path} />
  }

  const onSubmitForm = (values: IBeforeTrainingForm) => {
    const data: IPostTrainingBeforeRequest = {
      userToken,
      trainingData: {
        trainingId: +trainingId,
        userId,
        comments: values.comments || '',
        dreamQuality: values.dreamQuality || 0,
        fatigue: values.fatigue || 0,
        frontLeftHip: values.frontLeftHip || 0,
        frontRightHip: values.frontRightHip || 0,
        leftAdductor: values.leftAdductor || 0,
        leftCalf: values.leftCalf || 0,
        leftGroin: values.leftGroin || 0,
        musclePain: values.musclePain || 0,
        rearLeftHip: values.rearLeftHip || 0,
        rearRightHip: values.rearRightHip || 0,
        rightAdductor: values.rightAdductor || 0,
        rightCalf: values.rightCalf || 0,
        stress: values.stress || 0,
        rightGroin: values.rightGroin || 0,
      }
    }
    postBeforeTrainingsData(data);
  }

  return (
    <div>
      <Typography.Title style={{textAlign: 'center'}}>Состояние до тренировки</Typography.Title>
      <PlayerBeforeTrainingModal onFinish={onSubmitForm} />
    </div>
  );
};
export default PlayerBeforeTraining;
