import { JSX } from 'react';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import { GrDomain } from 'react-icons/gr';
import { IoIosLogIn } from 'react-icons/io';


const AppMenu = (): JSX.Element => {

  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: RoutesPath.INDEX.description,
      key: RoutesPath.INDEX.path,
      icon: <GrDomain />,
    },
    {
      label: RoutesPath.LOGIN.description,
      key: RoutesPath.LOGIN.path,
      icon: <IoIosLogIn />,
    }
  ]

  const onClick: MenuProps['onClick'] = (item) => {
    navigate(item.key);
  }

  return (
    <>
      <Menu onClick={onClick} mode={'vertical'} items={items} />
    </>
  );
};
export default AppMenu;
