import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IErrorSliceState } from '@/store/slices/ErrorSlice/ErrorSlice.types';
import { RootState } from '@/store/store';
import { authApi } from '@/api/inject/auth.api';

const initialState: IErrorSliceState = {
  errorMessage: null,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    clearErrorMessage: state => {
      state.errorMessage = null;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchRejected,
      (state, { payload }) => {
        if (payload && 'data' in payload) {
          console.log(payload)
          state.errorMessage = (payload.data as { message: string }).message || 'Неизвестная ошибка';
        } else {
          state.errorMessage = 'Неизвестная ошибка';
        }
      }
    );
  }
});

export const selectErrorMessage = (store: RootState) => store.ErrorSliceReducer.errorMessage;
export const { clearErrorMessage, setErrorMessage } = errorSlice.actions;
export const ErrorSliceReducer = errorSlice.reducer;
