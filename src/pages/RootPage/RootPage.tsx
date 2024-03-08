import { JSX, useState } from 'react';
import { Drawer, FloatButton, Layout, Skeleton } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer } from 'antd/es/layout/layout';
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
import AppHeader from '@/components/AppHeader/AppHeader';

const RootPage = (): JSX.Element => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);

  const screens = useBreakpoint();

  const { isLoading } = useRefreshToken();

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
        <AppHeader />
        <Layout style={{ display: 'flex' }}>
          <Content style={{padding: '1rem'}}>
            <div style={{backgroundColor: '#fefefe', padding: '1rem'}}>{!screens.md && (<>
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
              <FloatButton onClick={toggleDrawer}
                           tooltip={<div>Меню</div>}
                           icon={<AiOutlineMenuFold/>}/>;
            </>)}
              <Skeleton loading={isLoading}>
                <Outlet/>
              </Skeleton></div>
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
