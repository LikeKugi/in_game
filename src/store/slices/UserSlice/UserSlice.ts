import { IUserSliceState } from '@/store/slices/UserSlice/UserSlice.types';
import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '@/api';
import { RootState } from '@/store/store';

const initialState: IUserSliceState = {
  id: null,
  name: null,
  lastName: null,
  username: null,
  password: null,
  passwordConfirmation: null,
  enabled: null,
  createdAt: null,
  updatedAt: null,
  roles: [],
  tasks: [],
  teams: []
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutBioUser: () => {
      return {
        ...initialState,
      };
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getUserLongBio.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.id;
        state.name = payload.name;
        state.lastName = payload.lastName;
        state.username = payload.username;
        state.password = payload.password;
        state.passwordConfirmation = payload.passwordConfirmation;
        state.enabled = payload.enabled;
        state.createdAt = payload.updatedAt;
        state.updatedAt = payload.updatedAt;
        state.roles = payload.roles;
        state.tasks = payload.tasks;
        state.teams = payload.teams;
      }
    );
  }
});

export const { logoutBioUser } = UserSlice.actions;
export const selectUserBioId = (state: RootState) => state.UserSliceReducer.id;
export const selectUserBioName = (state: RootState) => state.UserSliceReducer.name;
export const selectUserBioLastname = (state: RootState) => state.UserSliceReducer.lastName;
export const selectUserBioUsername = (state: RootState) => state.UserSliceReducer.username;
export const selectUserBioRoles = (state: RootState) => state.UserSliceReducer.roles;
export const selectUserBioTasks = (state: RootState) => state.UserSliceReducer.tasks;
export const selectUserBioTeams = (state: RootState) => state.UserSliceReducer.teams;
export const UserSliceReducer = UserSlice.reducer;
