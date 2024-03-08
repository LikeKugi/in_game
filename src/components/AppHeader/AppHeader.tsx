import { JSX } from 'react';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import logo from '@/assets/footer/logo.svg';
import { theme } from 'antd';
import styles from './AppHeader.module.scss'

const AppHeader = (): JSX.Element => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ backgroundColor: colorBgContainer }} className={styles.AppHeader}>
      <Link to={RoutesPath.INDEX.path}>
        <img src={logo} alt={RoutesPath.INDEX.description} className={styles.AppHeader__logo}/>
      </Link>
    </Header>
  );
};
export default AppHeader;
