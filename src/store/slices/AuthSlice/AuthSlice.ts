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
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, {payload}) => {
        state.id = payload.id;
        state.username = payload.username;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
      }
    );
  }
});

export const selectIsLoggedIn = (store: RootState) => !!store.AuthSliceReducer.refreshToken;
export const selectUserId = (store: RootState) => store.AuthSliceReducer.id;
export const selectUserName = (store: RootState) => store.AuthSliceReducer.username;
export const selectUserAccessToken = (store: RootState) => store.AuthSliceReducer.accessToken;
export const selectUserRefreshToken = (store: RootState) => store.AuthSliceReducer.refreshToken;

export const AuthSliceReducer = AuthSlice.reducer;
