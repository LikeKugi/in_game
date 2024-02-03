export const useStorage = () => {
  const tokenName = '365InGame';
  const setTokenInLocalStorage = (token: string): void => {
    localStorage.setItem(tokenName, token);
  };

  const getTokenFromLocalStorage = (): string | null => {
    return localStorage.getItem(tokenName);
  };

  const delTokenFromStorage = (): void => {
    localStorage.removeItem(tokenName);
    sessionStorage.removeItem(tokenName);
  };

  return ({
    setTokenInLocalStorage,
    getTokenFromLocalStorage,
    delTokenFromStorage,
  });
};
