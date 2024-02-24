import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { logoutAuthUser } from '@/store/slices/AuthSlice';
import { logoutBioUser } from '@/store/slices/UserSlice';
import { logoutRoleUser } from '@/store/slices/RolesSlice';
import { useStorage } from '@/utils/useLocalStorage';
import { clearTrainings } from '@/store/slices/TrainingsSlice';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const {delTokenFromStorage} = useStorage();

  useEffect(() => {
    delTokenFromStorage();
    dispatch(logoutAuthUser());
    dispatch(logoutBioUser());
    dispatch(logoutRoleUser());
    dispatch(clearTrainings());
    // eslint-disable-next-line
  }, [dispatch]);
}
