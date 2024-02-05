import { JSX } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectUserBioLastname, selectUserBioName, selectUserBioUsername } from '@/store/slices/UserSlice';
import { Descriptions, DescriptionsProps } from 'antd';

const PlayerBio = (): JSX.Element => {
  const userBioName = useAppSelector(selectUserBioName);
  const userBioLastname = useAppSelector(selectUserBioLastname);
  const userBioUsername = useAppSelector(selectUserBioUsername);

  const items: DescriptionsProps['items'] = [
    {
      key: 1,
      label: 'Имя',
      children: <p>{userBioName}</p>
    },
    {
      key: 2,
      label: 'Фамилия',
      children: <p>{userBioLastname}</p>
    }
  ]



  return (
    <>
      <Descriptions title={userBioUsername} items={items} />;
    </>
  );
};
export default PlayerBio;
