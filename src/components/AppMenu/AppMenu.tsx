import { JSX } from 'react';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/slices/AuthSlice';
import { makeMenu } from '@/utils/menuItems';
import { UserRoles } from '@/types';


const AppMenu = (): JSX.Element => {

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const items: MenuProps['items'] = makeMenu(isLoggedIn, UserRoles.PLAYER);

  const onClick: MenuProps['onClick'] = (item) => {
    navigate(item.key);
  };

  return (
    <>
      <Menu onClick={onClick}
            mode={'inline'}
            items={items}
            theme="dark"/>
    </>
  );
};
export default AppMenu;
