import { MenuProps } from 'antd';
import { RoutesPath } from '@/routes';
import { FaUserAlt } from 'react-icons/fa';
import { MdSports } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { TbCalendarStats } from 'react-icons/tb';



const items: MenuProps['items'] = [
  {
    label: RoutesPath.PLAYER_BIO.description,
    key: RoutesPath.PLAYER_BIO.path,
    icon: <FaUserAlt />,
  },
  {
    label: RoutesPath.PLAYER_TRAINING.description,
    key: RoutesPath.PLAYER_BIO.path + RoutesPath.PLAYER_TRAINING.path,
    icon: <MdSports />,
  },
  {
    label: RoutesPath.PLAYER_TEAMS.description,
    key: RoutesPath.PLAYER_BIO.path + RoutesPath.PLAYER_TEAMS.path,
    icon: <RiTeamFill />,
  },
  {
    label: RoutesPath.PLAYER_CALENDAR.description,
    key: RoutesPath.PLAYER_BIO.path + RoutesPath.PLAYER_CALENDAR.path,
    icon: <TbCalendarStats />,
  },
]

export const getPlayerMenuPart = () => {
  return items;
}
