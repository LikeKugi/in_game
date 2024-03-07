import { JSX } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserAccessToken, selectAuthUserId } from '@/store/slices/AuthSlice';
import { usePostAfterTrainingMutation } from '@/api';
import { RoutesPath } from '@/routes';
import { IAfterTrainingForm, IPostTrainingAfterRequest } from '@/types';
import { Typography } from 'antd';
import PlayerAfterTrainingModal from '@/components/player/PlayerAfterTrainingModal/PlayerAfterTrainingModal';

const PlayerAfterTraining = (): JSX.Element => {
  const {trainingId} = useParams();

  const userId = useAppSelector(selectAuthUserId);
  const userToken = useAppSelector(selectAuthUserAccessToken);

  const [postAfterTrainingData] = usePostAfterTrainingMutation();

  if(trainingId === undefined || userId === undefined || userId === null || !userToken) {
    return <Navigate to={RoutesPath.INDEX.path} />
  }

  const onSubmitForm = (values: IAfterTrainingForm) => {
    const data: IPostTrainingAfterRequest = {
      userToken,
      trainingData: {
        trainingId: +trainingId,
        userId,
        comments: values.comments,
        difficulty: values.difficulty,
      }
    }
    postAfterTrainingData(data);
  }

  return (
    <div>
      <Typography.Title style={{textAlign: 'center'}}>Состояние после тренировки</Typography.Title>
      <PlayerAfterTrainingModal onFinish={onSubmitForm} />
    </div>
  );
};
export default PlayerAfterTraining;
