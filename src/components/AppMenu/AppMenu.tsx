import { FC, JSX } from 'react';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { makeMenu } from '@/utils/menuItems';
import AppMenuHeader from '@/components/AppMenuHeader/AppMenuHeader';
import { UserRoles } from '@/types';

interface IAppMenuProps {
  isLoggedIn: boolean;
  userRole: UserRoles | null;
}


const AppMenu: FC<IAppMenuProps> = ({userRole, isLoggedIn}): JSX.Element => {
  const navigate = useNavigate();

  const items: MenuProps['items'] = makeMenu(isLoggedIn, userRole);

  const onClick: MenuProps['onClick'] = (item) => {
    navigate(item.key);
  };

  return (
    <>
      <AppMenuHeader isLoggedIn={isLoggedIn} />
      <Menu onClick={onClick}
            mode={'inline'}
            items={items}
            theme="dark"/>
    </>
  );
};
export default AppMenu;
