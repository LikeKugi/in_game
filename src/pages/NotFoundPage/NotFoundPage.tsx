import { JSX } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/routes';

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Информация не найдена или страница удалена"
      extra={<Button type="primary" onClick={() => navigate(RoutesPath.INDEX.path)}>{RoutesPath.INDEX.description}</Button>}
    />
  );
};
export default NotFoundPage;
