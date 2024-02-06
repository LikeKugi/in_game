import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from '@/store/RootReducer';
import { api } from '@/api';
import { useStorage } from '@/utils/useLocalStorage';

// eslint-disable-next-line react-hooks/rules-of-hooks
const {getTokenFromLocalStorage} = useStorage();
const token = getTokenFromLocalStorage();

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  preloadedState: {
    AuthSliceReducer: {
      refreshToken: token,
      username: null,
      accessToken: null,
      id: null,
    }
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
