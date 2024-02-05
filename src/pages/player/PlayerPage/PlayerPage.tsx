import { JSX } from 'react';
import { Outlet } from 'react-router-dom';

const PlayerPage = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default PlayerPage;
