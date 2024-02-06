import { JSX, useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { logoutAuthUser } from '@/store/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import { logoutBioUser } from '@/store/slices/UserSlice';

const LogoutPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutAuthUser());
    dispatch(logoutBioUser());
    navigate(RoutesPath.INDEX.path);
  }, [dispatch, navigate])

  return <></>;
};
export default LogoutPage;
