import { UserRoles } from '@/types/userRoles.types';
import { ITask } from '@/types/task.types';
import { ITeam } from '@/types/team.types';

export interface IUserBioRequest {
  userId: string | number;
  userToken: string;
}

export interface IUserShortBioResponse {
  username: string;
  roles: UserRoles[];
}

export interface IUserLongBioResponse {
  id: number;
  name: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  roles: UserRoles[];
  tasks: ITask[];
  teams: ITeam[];
}
