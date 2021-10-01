import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countryForSidebarReducer from '../features/StatisticsForSidebar/statisticsForSidebarSlice';
import histogramReducer from '../features/histogram/histogramSlice';

export const store = configureStore({
  reducer: {
    countryForSidebar: countryForSidebarReducer,
    histogram: histogramReducer 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
