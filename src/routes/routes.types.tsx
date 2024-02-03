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
}
