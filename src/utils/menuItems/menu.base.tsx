import { RoutesPath } from '@/routes';
import { GrDomain } from 'react-icons/gr';
import { UserRoles } from '@/types';
import { getLoginMenuPart } from '@/utils/menuItems/parts';
import { makeRolePartMenu } from '@/utils/menuItems/parts/role.part';
import { ItemType } from 'antd/es/menu/hooks/useItems';

const item: ItemType = {
    label: RoutesPath.INDEX.description,
    key: RoutesPath.INDEX.path,
    icon: <GrDomain />,
  };


export const makeMenu = (isLoggedIn: boolean, role: UserRoles | null = UserRoles.USER): ItemType[] => {
  const menu: ItemType[] = [item];
  if (role) {
    menu.push(...makeRolePartMenu(role));
  }
  menu.push(getLoginMenuPart(isLoggedIn));
  return menu;
}
