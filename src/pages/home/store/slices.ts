import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../../types/types";

interface IState {
  isLoading: boolean;
  cardsLibrary: ICard[] | null;
  error: string | null;
  pageNumber: number;
}

const initialState: IState = {
  isLoading: false,
  cardsLibrary: null,
  error: null,
  pageNumber: 0
};

export const cardsLibrarySlice = createSlice({
  name: "cardLibrary",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setCardsLibrary: (state, action: PayloadAction<ICard[]>) => {
      if (!state.cardsLibrary) {
        state.cardsLibrary = [];
      }
      action.payload.forEach((item) => {
        const itemString = JSON.stringify(item);
        const isItemInState = state.cardsLibrary!.some((stateItem) => {
          const stateItemString = JSON.stringify(stateItem);
          return stateItemString === itemString;
        });
        if (!isItemInState) {
          state.cardsLibrary!.push(item);
        }
      });
    },

    setPageNumber: (state) => {
      if (state.cardsLibrary) {
        state.pageNumber = [...state.cardsLibrary].length / 30;
      }
    },
    
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCardsLibrary, setIsLoading, setError, setPageNumber } = cardsLibrarySlice.actions;
export default cardsLibrarySlice.reducer;