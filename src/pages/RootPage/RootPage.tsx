import { JSX, useState } from 'react';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import AppFooter from '@/components/AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';
import AppMenu from '@/components/AppMenu/AppMenu';

const RootPage = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={isCollapsed} onCollapse={() => setIsCollapsed(prevState => !prevState)}>
        <AppMenu />
      </Sider>
      <Layout>
        <Header>

        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer style={{textAlign: 'center'}}>
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};
export default RootPage;
