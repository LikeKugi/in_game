import { ReactNode } from 'react';

export interface IRoute {
  path: string;
  description: string;
  icon?: ReactNode;
}

export type IRoutesAliases = 'INDEX' | 'LOGIN' | 'LOGOUT' | 'NOT_FOUND'

export interface IRoutesPaths {
  'INDEX': IRoute;
  'LOGIN': IRoute;
  'LOGOUT': IRoute;
  'NOT_FOUND': IRoute;
  'PLAYER_BIO': IRoute;
  'PLAYER_TRAINING': IRoute;
  PLAYER_STATS_TRAINING: IRoute;
  'PLAYER_BEFORE_TRAINING': IRoute;
  'PLAYER_AFTER_TRAINING': IRoute;
  'PLAYER_TEAMS': IRoute;
  'PLAYER_CALENDAR': IRoute;
}
