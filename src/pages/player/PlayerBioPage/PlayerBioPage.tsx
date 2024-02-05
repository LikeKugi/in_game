import { JSX } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserAccessToken, selectAuthUserId } from '@/store/slices/AuthSlice';
import { useGetUserLongBioQuery } from '@/api';
import { Skeleton } from 'antd';
import PlayerBio from '@/components/player/PlayerBio/PlayerBio';

const PlayerBioPage = (): JSX.Element => {
  const authUserId = useAppSelector(selectAuthUserId) as number;
  const userToken = useAppSelector(selectAuthUserAccessToken) as string;

  const {isLoading} = useGetUserLongBioQuery({
    userId: authUserId,
    userToken: userToken,
  });

  return (
    <Skeleton loading={isLoading} active paragraph={{ rows: 2 }}>
      <PlayerBio />
    </Skeleton>
  );
};
export default PlayerBioPage;
