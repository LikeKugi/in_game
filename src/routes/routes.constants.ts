import { IRoutesPaths } from '@/routes/routes.types';

export const RoutesPath: IRoutesPaths = {
  INDEX: {
    path: '/',
    route: '/',
    description: 'Главная',
  },
  NOT_FOUND: {
    path: '*',
    route: '*',
    description: '',
  },
  LOGIN: {
    path: '/login',
    route: '/login',
    description: 'Авторизация',
  },
  LOGOUT: {
    path: '/logout',
    route: '/logout',
    description: 'Выход',
  },
  REGISTRATION: {
    path: '/registration',
    route: '/registration',
    description: 'Регистрация'
  },
  PLAYER_BIO: {
    path: '/user/',
    route: '/user',
    description: 'Личный кабинет'
  },
  PLAYER_TRAINING: {
    path: 'training',
    route: '/user/training',
    description: 'Тренировки',
  },
  PLAYER_STATS_TRAINING: {
    path: ':trainingId',
    route: '/user/training/:trainingId',
    description: 'Тренировки',
  },
  PLAYER_BEFORE_TRAINING: {
    path: 'before',
    route: 'before',
    description: 'Перед тренировкой',
  },
  PLAYER_AFTER_TRAINING: {
    path: 'after',
    route: 'after',
    description: 'После тренировки',
  },
  PLAYER_TEAMS: {
    path: '/teams/',
    route: '/teams/',
    description: 'Команды',
  },
  PLAYER_CALENDAR: {
    path: '/calendar/',
    route: '/calendar/',
    description: 'Расписание',
  }
}
