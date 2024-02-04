import { JSX, useState } from 'react';
import { Layout, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import AppFooter from '@/components/AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';
import AppMenu from '@/components/AppMenu/AppMenu';
import AppMessage from '@/components/AppMessage/AppMessage';
import styles from './RootPage.module.scss'

const RootPage = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className={styles.RootPage}>
      <Sider collapsible
             collapsed={isCollapsed}
             onCollapse={() => setIsCollapsed(prevState => !prevState)}
             theme="dark" className={styles.RootPage__sider}>
        <AppMenu/>
      </Sider>
      <Content style={{ display: 'flex', flexDirection: 'column' }}>
          <Header style={{backgroundColor: colorBgContainer}}>

          </Header>
        <Layout style={{ display: 'flex' }}>
          <Content>
            <Outlet/>
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
