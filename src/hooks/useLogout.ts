import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { logoutAuthUser } from '@/store/slices/AuthSlice';
import { logoutBioUser } from '@/store/slices/UserSlice';
import { logoutRoleUser } from '@/store/slices/RolesSlice';

export const useLogout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logoutAuthUser());
    dispatch(logoutBioUser());
    dispatch(logoutRoleUser());
  }, [dispatch]);
}
