import { JSX } from 'react';

const AppFooter = (): JSX.Element => {
  return (
    <>
      365 In Game ©{new Date().getFullYear()}
    </>
  );
};
export default AppFooter;
