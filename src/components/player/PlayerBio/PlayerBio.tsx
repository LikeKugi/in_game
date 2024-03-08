import { JSX } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectUserBioLastname, selectUserBioName, selectUserBioUsername } from '@/store/slices/UserSlice';
import { Avatar, Descriptions, DescriptionsProps, Space } from 'antd';
import { FiUser } from 'react-icons/fi';

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
    },
    {
      key: 3,
      label: 'Логин',
      children: <p>{userBioUsername}</p>
    }
  ];


  return (
    <Space direction="horizontal"
           size={32}>
      <Avatar shape="square"
              size={64}
              icon={<FiUser/>}/>
      <Descriptions title={'Персональная информация'}
                    items={items}/>
    </Space>
  );
};
export default PlayerBio;
