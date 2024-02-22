import { ReactNode } from 'react';

export interface IRoute {
  path: string;
  description: string;
  icon?: ReactNode;
}

export type IRoutesAliases =
  'INDEX'
  | 'LOGIN'
  | 'LOGOUT'
  | 'REGISTRATION'
  | 'NOT_FOUND'
  | 'PLAYER_BIO'
  | 'PLAYER_TRAINING'
  | 'PLAYER_STATS_TRAINING'
  | 'PLAYER_BEFORE_TRAINING'
  | 'PLAYER_AFTER_TRAINING'
  | 'PLAYER_TEAMS'
  | 'PLAYER_CALENDAR'

export type IRoutesPaths = Record<IRoutesAliases, IRoute>;
