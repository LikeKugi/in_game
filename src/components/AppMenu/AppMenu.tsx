import { JSX } from 'react';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import { GrDomain } from 'react-icons/gr';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/slices/AuthSlice';
import { getLoginMenuPart, getPlayerMenuPart } from '@/components/AppMenu/parts';


const AppMenu = (): JSX.Element => {

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: RoutesPath.INDEX.description,
      key: RoutesPath.INDEX.path,
      icon: <GrDomain />,
    },
  ]

  items.push(...getPlayerMenuPart());

  items.push(getLoginMenuPart(isLoggedIn));

  const onClick: MenuProps['onClick'] = (item) => {
    navigate(item.key);
  }

  return (
    <>
      <Menu onClick={onClick} mode={'inline'} items={items} />
    </>
  );
};
export default AppMenu;
