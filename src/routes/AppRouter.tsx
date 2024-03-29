import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { RoutesPath } from '@/routes/routes.constants';
import RootPage from '@/pages/RootPage/RootPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import HomePage from '@/pages/HomePage/HomePage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import PublicGuardPage from '@/pages/PublicGuardPage/PublicGuardPage';
import PrivateGuardPage from '@/pages/PrivateGuardPage/PrivateGuardPage';
import PlayerPage from '@/pages/player/PlayerPage/PlayerPage';
import PlayerBioPage from '@/pages/player/PlayerBioPage/PlayerBioPage';
import LogoutPage from '@/pages/LogoutPage/LogoutPage';
import RegistrationPage from '@/pages/RegistrationPage/RegistrationPage';
import PlayerTrainingsPage from '@/pages/player/PlayerTrainigsPage/PlayerTrainingsPage';
import PlayerBeforeTraining from '@/pages/player/PlayerBeforeTraining/PlayerBeforeTraining';
import PlayerAfterTraining from '@/pages/player/PlayerAfterTraining/PlayerAfterTraining';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesPath.INDEX.path}
         element={<RootPage/>}>
    <Route index element={<HomePage />} />

    <Route element={<PrivateGuardPage />}>
      <Route path={RoutesPath.LOGOUT.path} element={<LogoutPage />}/>
      <Route path={RoutesPath.PLAYER_BIO.path} element={<PlayerPage />}>
        <Route index element={<PlayerBioPage />} />
        <Route path={RoutesPath.PLAYER_TRAINING.path} element={<Outlet />}>
          <Route index element={<PlayerTrainingsPage />} />
          <Route path={RoutesPath.PLAYER_STATS_TRAINING.path} element={<Outlet />}>
            <Route path={RoutesPath.PLAYER_BEFORE_TRAINING.path} element={<PlayerBeforeTraining />}/>
            <Route path={RoutesPath.PLAYER_AFTER_TRAINING.path} element={<PlayerAfterTraining />}/>
          </Route>
        </Route>
      </Route>
    </Route>

    <Route element={<PublicGuardPage />}>
      <Route path={RoutesPath.LOGIN.path} element={<LoginPage />} />
      <Route path={RoutesPath.REGISTRATION.path} element={<RegistrationPage />} />
    </Route>

    <Route path={RoutesPath.NOT_FOUND.path}
           element={<NotFoundPage/>}/>
  </Route>
));

const AppRouter = (): JSX.Element => {
  return <RouterProvider router={routes}/>;
};
export default AppRouter;
