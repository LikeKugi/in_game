import { JSX, useState } from 'react';
import { Drawer, FloatButton, Layout, Skeleton, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import AppFooter from '@/components/AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';
import AppMenu from '@/components/AppMenu/AppMenu';
import AppMessage from '@/components/AppMessage/AppMessage';
import styles from './RootPage.module.scss';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { useRefreshToken } from '@/hooks/useRefreshToken';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/slices/AuthSlice';
import { selectUserRole } from '@/store/slices/RolesSlice';
import { AiOutlineMenuFold } from 'react-icons/ai';

const RootPage = (): JSX.Element => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);

  const screens = useBreakpoint();

  const { isLoading } = useRefreshToken();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const userRole = useAppSelector(selectUserRole);

  const onCloseDrawer = () => {
    setIsOpenedDrawer(false);
  };

  const toggleDrawer = () => {
    setIsOpenedDrawer(prevState => !prevState);
  };

  return (

    <Layout className={styles.RootPage}>
      {screens.md && (<Sider collapsible
                             collapsed={isCollapsed}
                             collapsedWidth={!screens.md ? 0 : undefined}
                             onCollapse={() => setIsCollapsed(prevState => !prevState)}
                             theme="dark"
                             zeroWidthTriggerStyle={{
                               top: '0.7rem',
                             }}>
        <Skeleton loading={isLoading}>
          <AppMenu isLoggedIn={isLoggedIn}
                   userRole={userRole}/>
        </Skeleton>
      </Sider>)}

      <Content style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ backgroundColor: colorBgContainer }}>

        </Header>
        <Layout style={{ display: 'flex' }}>
          <Content>
            {!screens.md && (<>
              <Drawer title={'Главное меню'}
                      placement={'right'}
                      size="default"
                      open={isOpenedDrawer}
                      onClose={onCloseDrawer}>
                <Skeleton loading={isLoading}>
                  <AppMenu isLoggedIn={isLoggedIn}
                           userRole={userRole}/>
                </Skeleton>
              </Drawer>
              <FloatButton onClick={toggleDrawer} tooltip={<div>Меню</div>} icon={<AiOutlineMenuFold/>} />;
            </>)}
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
