import { useLazyGetUserShortBioQuery, useLoginUserMutation } from '@/api';

export const useLogin = () => {
  const [loginUser] = useLoginUserMutation();
  const [getUserShortBio] = useLazyGetUserShortBioQuery();

  const login = ({ username, password }: { username: string, password: string }) => {
    loginUser({
      username,
      password,
    }).then((data) => {
      if ('data' in data) {
        getUserShortBio({
          userId: data.data.id,
          userToken: data.data.accessToken,
        });
      }
    }).catch(() => {
    });
  }

  return [login]
}
