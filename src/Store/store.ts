//src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import ScoresReducer from '../Slices/ScoresReducer';

export const store = configureStore({
  reducer:{
    score: ScoresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
