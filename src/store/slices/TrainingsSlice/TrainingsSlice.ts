import { createSlice } from '@reduxjs/toolkit';
import { ITrainingsSliceState } from '@/store/slices/TrainingsSlice/TrainingsSlice.types';
import { trainingApi } from '@/api';
import { RootState } from '@/store/store';

const initialState: ITrainingsSliceState = {
  trainings: [],
}

export const TrainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    clearTrainings: state => {
      state.trainings = [];
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      trainingApi.endpoints.getTrainingsByUserId.matchFulfilled,
      (state, {payload}) => {
        state.trainings = payload;
      }
    )
  }
})

export const selectUserTrainings = (state: RootState) => state.TrainingsSliceReducer.trainings;
export const {clearTrainings} = TrainingsSlice.actions;
export const TrainingsSliceReducer = TrainingsSlice.reducer;
