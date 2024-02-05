import { JSX } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { logoutAuthUser } from '@/store/slices/AuthSlice';
import { Navigate } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import { logoutBioUser } from '@/store/slices/UserSlice';

const LogoutPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  dispatch(logoutAuthUser());
  dispatch(logoutBioUser());
  return <Navigate to={RoutesPath.INDEX.path}/>;
};
export default LogoutPage;
