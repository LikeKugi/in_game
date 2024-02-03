import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IErrorSliceState } from '@/store/slices/ErrorSlice/ErrorSlice.types';
import { RootState } from '@/store/store';

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
    setErrorMessage: (state,  action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    }
  },
});

export const selectErrorMessage = (store: RootState) => store.ErrorSliceReducer.errorMessage;
export const { clearErrorMessage, setErrorMessage } = errorSlice.actions;
export const ErrorSliceReducer = errorSlice.reducer;
