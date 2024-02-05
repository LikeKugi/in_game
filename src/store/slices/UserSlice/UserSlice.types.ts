import { ITask } from '@/types/task.types';
import { ITeam } from '@/types/team.types';
import { UserRoles } from '@/types';

export interface IUserSliceState {
  id: number | null;
  name: string | null;
  lastName: string | null;
  username: string | null;
  password: string | null;
  passwordConfirmation: string | null;
  enabled: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
  roles: UserRoles[];
  tasks: ITask[];
  teams: ITeam[];
}
