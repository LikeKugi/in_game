import { JSX, useEffect } from 'react';
import { useLazyGetTrainingsByUserIdQuery } from '@/api';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserAccessToken, selectAuthUserId } from '@/store/slices/AuthSlice';
import { Skeleton } from 'antd';
import PlayerTrainings from '@/components/player/PlayerTrainings/PlayerTrainings';

const PlayerTrainingsPage = (): JSX.Element => {

  const userId= useAppSelector(selectAuthUserId);
  const userToken= useAppSelector(selectAuthUserAccessToken);
  const [fetchTrainings, {isLoading}] = useLazyGetTrainingsByUserIdQuery()

  useEffect(() => {
    if (!userId || !userToken) return;
    fetchTrainings({userId, userToken}).then(a => console.log(a))
  }, [fetchTrainings, userId, userToken])


  return (
    <Skeleton loading={isLoading || !userId || !userToken} active>
      <PlayerTrainings />
    </Skeleton>
  );
};
export default PlayerTrainingsPage;
