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
  },
  REGISTRATION: {
    path: '/registration',
    description: 'Регистрация'
  },
  PLAYER_BIO: {
    path: '/user',
    description: 'Личный кабинет'
  },
  PLAYER_TRAINING: {
    path: '/trainings',
    description: 'Тренировки',
  },
  PLAYER_STATS_TRAINING: {
    path: '/training',
    description: 'Статистика',
  },
  PLAYER_BEFORE_TRAINING: {
    path: '/before',
    description: 'Перед тренировкой',
  },
  PLAYER_AFTER_TRAINING: {
    path: '/after',
    description: 'После тренировки',
  },
  PLAYER_TEAMS: {
    path: '/teams',
    description: 'Команды',
  },
  PLAYER_CALENDAR: {
    path: '/calendar',
    description: 'Расписание',
  }
}
