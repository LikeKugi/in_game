import { RoutesPath } from '@/routes';
import { IoIosLogIn, IoIosLogOut } from 'react-icons/io';

const loginItem = {
  label: RoutesPath.LOGIN.description,
  key: RoutesPath.LOGIN.path,
  icon: <IoIosLogIn />,
}

const logoutItem = {
  label: RoutesPath.LOGOUT.description,
  key: RoutesPath.LOGOUT.path,
  icon: <IoIosLogOut />,
}

export const getLoginMenuPart = (isLoggedIn: boolean) => {
  if(isLoggedIn) {
    return logoutItem;
  }
  return loginItem
}
