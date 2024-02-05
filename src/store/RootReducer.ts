import { combineReducers } from '@reduxjs/toolkit';
import { api, ApiReducer } from '@/api';
import { AuthSliceReducer } from '@/store/slices/AuthSlice';
import { ErrorSliceReducer } from '@/store/slices/ErrorSlice';
import { UserSliceReducer } from '@/store/slices/UserSlice';

export const RootReducer = combineReducers({
  [ApiReducer]: api.reducer,
  AuthSliceReducer,
  ErrorSliceReducer,
  UserSliceReducer,
})
