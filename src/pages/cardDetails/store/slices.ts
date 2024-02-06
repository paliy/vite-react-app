import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardDetails } from "../../../types/types";

interface IState {
  isLoading: boolean;
  cardDetails: ICardDetails | null;
  error: string | null;
}

const initialState: IState = {
  isLoading: false,
  cardDetails: null,
  error: null,
};

export const cardDetailsSlice = createSlice({
  name: "cardDetails",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCardDetails: (state, action: PayloadAction<ICardDetails | null>) => {
      state.cardDetails = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setIsLoading, setCardDetails, setError } = cardDetailsSlice.actions;
export default cardDetailsSlice.reducer;