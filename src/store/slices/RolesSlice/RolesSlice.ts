import { createSlice } from '@reduxjs/toolkit';
import { IRolesSliceState } from '@/store/slices/RolesSlice/RolesSlice.types';
import { userApi } from '@/api';
import { UserRoles } from '@/types';
import { RootState } from '@/store/store';

const initialState: IRolesSliceState = {
  role: null,
};

export const RolesSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    logoutRoleUser: (state) => {
      state.role = null;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getUserShortBio.matchFulfilled,
      (state, {payload}) => {
        if (~payload.roles.indexOf(UserRoles.PLAYER)) {
          state.role = UserRoles.PLAYER;
          return;
        }
        if (~payload.roles.indexOf(UserRoles.ADMIN)) {
          state.role = UserRoles.ADMIN;
          return;
        }
      }
    );
    builder.addMatcher(
      userApi.endpoints.getUserLongBio.matchFulfilled,
      (state, {payload}) => {
        if (UserRoles.PLAYER in payload.roles) {
          state.role = UserRoles.PLAYER;
          return;
        }
        if (UserRoles.ADMIN in payload.roles) {
          state.role = UserRoles.ADMIN;
          return;
        }
      }
    )
  }
})

export const selectUserRole = (state: RootState) => state.RolesSliceReducer.role
export const {logoutRoleUser} = RolesSlice.actions;
export const RolesSliceReducer = RolesSlice.reducer;
