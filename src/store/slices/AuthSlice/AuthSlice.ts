import { createSlice } from '@reduxjs/toolkit';
import { IAuthSliceState } from '@/store/slices/AuthSlice/AuthSlice.types';
import { authApi } from '@/api/inject/auth.api';
import { RootState } from '@/store/store';

const initialState: IAuthSliceState = {
  id: null,
  username: null,
  accessToken: null,
  refreshToken: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAuthUser: (state) => {
      state.id = null;
      state.username = null;
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.id;
        state.username = payload.username;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
      }
    );
    builder.addMatcher(
      authApi.endpoints.refreshUser.matchFulfilled,
      (state, {payload}) => {
        state.id = payload.id;
        state.username = payload.username;
        state.accessToken = payload.accessToken;
        if (state.refreshToken !== payload.refreshToken) {
          state.refreshToken = payload.refreshToken;
        }
      }
    )
  }
});

export const { logoutAuthUser } = AuthSlice.actions;
export const selectIsLoggedIn = (store: RootState) => !!store.AuthSliceReducer.refreshToken;
export const selectAuthUserId = (store: RootState) => store.AuthSliceReducer.id;
export const selectAuthUserName = (store: RootState) => store.AuthSliceReducer.username;
export const selectAuthUserAccessToken = (store: RootState) => store.AuthSliceReducer.accessToken;
export const selectAuthUserRefreshToken = (store: RootState) => store.AuthSliceReducer.refreshToken;

export const AuthSliceReducer = AuthSlice.reducer;
