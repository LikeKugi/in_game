import { IRoutesPaths } from '@/routes/routes.types';

export const RoutesPath: IRoutesPaths = {
  INDEX: {
    path: '/',
    description: 'Главная',
  },
  NOT_FOUND: {
    path: '*',
    description: '',
  },
  LOGIN: {
    path: '/login',
    description: 'Авторизация',
  },
  LOGOUT: {
    path: '/logout',
    description: 'Выход',
  }
}
