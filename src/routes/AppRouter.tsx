import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RoutesPath } from '@/routes/routes.constants';
import RootPage from '@/pages/RootPage/RootPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import HomePage from '@/pages/HomePage/HomePage';
import LoginPage from '@/pages/LoginPage/LoginPage';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesPath.INDEX.path}
         element={<RootPage/>}>
    <Route index element={<HomePage />} />

    <Route path={RoutesPath.LOGIN.path} element={<LoginPage />} />

    <Route path={RoutesPath.NOT_FOUND.path}
           element={<NotFoundPage/>}/>
  </Route>
));

const AppRouter = (): JSX.Element => {
  return <RouterProvider router={routes}/>;
};
export default AppRouter;
