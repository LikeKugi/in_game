import { JSX } from 'react';
import { Empty, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RoutesPath } from '@/routes';

const NotFoundPage = (): JSX.Element => {
  return (
    <Space direction="vertical"
           size="large"
           style={{ textAlign: 'center', display: 'flex', height: '100%', justifyContent: 'center' }}>
      <Typography.Title>Информация не найдена или страница удалена</Typography.Title>
      <Empty description={false}/>
      <Link to={RoutesPath.INDEX.path}>
        <Typography.Link>
          {RoutesPath.INDEX.description}
        </Typography.Link>
      </Link>
    </Space>
  );
};
export default NotFoundPage;
