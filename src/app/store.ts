import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardsLibraryReducer from "../pages/home/store/slices";
import cardDetailsReducer from "../pages/cardDetails/store/slices";

export const store = configureStore({
  reducer: {
    cardsLibrary: cardsLibraryReducer,
    cardDetails: cardDetailsReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;