import { FC, JSX } from 'react';
import styles from './AppMenuHeader.module.scss'
import { Avatar } from 'antd';
import { IoHomeSharp } from 'react-icons/io5';

interface IAppMenuHeader {
  isLoggedIn: boolean;
}

const AppMenuHeader: FC<IAppMenuHeader> = ({isLoggedIn}): JSX.Element => {
  return (
    <div className={styles.AppMenuHeader}>
      {isLoggedIn ? <Avatar size={64} >USER</Avatar>  : <>
        <Avatar size={64} icon={<IoHomeSharp />} />
      </> }
    </div>
  );
};
export default AppMenuHeader;
