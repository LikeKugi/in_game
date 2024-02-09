import { useLazyGetUserShortBioQuery, useRefreshUserMutation } from '@/api';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserAccessToken, selectAuthUserRefreshToken } from '@/store/slices/AuthSlice';
import { useStorage } from '@/utils/useLocalStorage';
import { useEffect } from 'react';

export const useRefreshToken = () => {

  const [refreshUserData, { isLoading: isLoadingRefresh }] = useRefreshUserMutation();
  const [getUserShortBio, {isLoading: isLoadingShortBio }] = useLazyGetUserShortBioQuery()
  const refreshToken = useAppSelector(selectAuthUserRefreshToken);
  const accessToken = useAppSelector(selectAuthUserAccessToken);
  const { setTokenInLocalStorage } = useStorage();

  useEffect(() => {
    if (refreshToken) {
      if (!accessToken) {
        refreshUserData(refreshToken).then((data) => {
          if ('data' in data) {
            getUserShortBio({
              userId: data.data.id,
              userToken: data.data.accessToken,
            })
          }
        }).catch(() => {})
      } else {
        setTokenInLocalStorage(refreshToken);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToken, accessToken]);

  return { isLoading: isLoadingRefresh || isLoadingShortBio };
}

