import { JSX, useEffect, useState } from 'react';
import { Layout, Skeleton, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import AppFooter from '@/components/AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';
import AppMenu from '@/components/AppMenu/AppMenu';
import AppMessage from '@/components/AppMessage/AppMessage';
import styles from './RootPage.module.scss';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { useRefreshUserMutation } from '@/api';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserAccessToken, selectAuthUserRefreshToken } from '@/store/slices/AuthSlice';
import { useStorage } from '@/utils/useLocalStorage';

const RootPage = (): JSX.Element => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const screens = useBreakpoint();


  const [refreshUserData, { isLoading }] = useRefreshUserMutation();
  const refreshToken = useAppSelector(selectAuthUserRefreshToken);
  const accessToken = useAppSelector(selectAuthUserAccessToken);
  const { setTokenInLocalStorage } = useStorage();

  useEffect(() => {
    if (refreshToken) {
      if (!accessToken) {
        refreshUserData(refreshToken);
      } else {
        setTokenInLocalStorage(refreshToken);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToken, accessToken]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <Layout className={styles.RootPage}>
      <Sider collapsible
             collapsed={isCollapsed}
             collapsedWidth={!screens.md ? 0 : undefined}
             onCollapse={() => setIsCollapsed(prevState => !prevState)}
             theme="dark"
             zeroWidthTriggerStyle={{
               top: '0.7rem',
             }}>
        <Skeleton loading={isLoading}>
          <AppMenu/>
        </Skeleton>
      </Sider>
      <Content style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ backgroundColor: colorBgContainer }}>

        </Header>
        <Layout style={{ display: 'flex' }}>
          <Content>
            <Skeleton loading={isLoading}>
              <Outlet/>
            </Skeleton>
          </Content>
          <Footer>
            <div className={styles.RootPage__footer}>
              <AppFooter/>
              <AppMessage/>
            </div>
          </Footer>
        </Layout>
      </Content>
    </Layout>
  );
};
export default RootPage;
