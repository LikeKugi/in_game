import { JSX } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/slices/AuthSlice';
import { Navigate, Outlet } from 'react-router-dom';
import { RoutesPath } from '@/routes';

const PrivateGuardPage = (): JSX.Element => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if(!isLoggedIn) {
    return <Navigate to={RoutesPath.INDEX.path} />
  }

  return (
    <>
      <Outlet />
    </>
  );
};
export default PrivateGuardPage;
