import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listingReducer from '../features/listing/listingSlice';

export const store = configureStore({
  reducer: {
    listing: listingReducer,
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
