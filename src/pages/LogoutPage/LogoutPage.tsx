import { JSX, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import { useLogout } from '@/hooks';

const LogoutPage = (): JSX.Element => {
  const navigate = useNavigate();

  useLogout();

  useEffect(() => {
    navigate(RoutesPath.INDEX.path);
  }, [navigate])

  return <></>;
};
export default LogoutPage;
