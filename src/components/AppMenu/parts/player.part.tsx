import { MenuProps } from 'antd';
import { RoutesPath } from '@/routes';
import { FaUserAlt } from 'react-icons/fa';
import { MdSports } from 'react-icons/md';
import { RiPassportFill, RiPassportLine, RiTeamFill } from 'react-icons/ri';
import { TbCalendarStats } from 'react-icons/tb';
import { ImStatsBars2 } from 'react-icons/im';



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
    children: [
      {
        label: RoutesPath.PLAYER_STATS_TRAINING.description,
        key: RoutesPath.PLAYER_BIO.path + RoutesPath.PLAYER_STATS_TRAINING.path,
        icon: <ImStatsBars2 />,
      },
      {
        label: RoutesPath.PLAYER_BEFORE_TRAINING.description,
        key: RoutesPath.PLAYER_BIO.path + RoutesPath.PLAYER_BEFORE_TRAINING.path,
        icon: <RiPassportFill />,
      },
      {
        label: RoutesPath.PLAYER_AFTER_TRAINING.description,
        key: RoutesPath.PLAYER_BIO.path + RoutesPath.PLAYER_AFTER_TRAINING.path,
        icon: <RiPassportLine />,
      },
    ]
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
