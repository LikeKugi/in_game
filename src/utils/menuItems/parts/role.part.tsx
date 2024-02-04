import { UserRoles } from '@/types';
import { getPlayerMenuPart } from '@/utils/menuItems/parts/player.part';
import { ItemType } from 'antd/es/menu/hooks/useItems';

export const makeRolePartMenu = (role: UserRoles): ItemType[] => {
  switch (role) {
    case UserRoles.PLAYER:
      return getPlayerMenuPart()
    default:
      return [];
  }
}
