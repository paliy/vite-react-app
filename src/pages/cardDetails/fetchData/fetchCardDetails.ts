import { AppDispatch } from "../../../app/store";
import { ICardDetails } from "../../../types/types";
import { setCardDetails, setIsLoading, setError } from "../store/slices";

export const fetchCardDetailsData = async (dispatch: AppDispatch, id: string | undefined) => {
  if (!id) {
    // No ID provided, reset cardDetails and return
    dispatch(setCardDetails(null));
    return;
  }

  dispatch(setIsLoading(true));
  dispatch(setError(null));
  try {
    const url = `https://apps-api.keboola.com/apps/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: ICardDetails = await response.json();
    dispatch(setCardDetails(data));
    dispatch(setError(null)); // Reset error state if successful
  } catch (error) {
    setError('Failed to fetch data');
  } finally {
    dispatch(setIsLoading(false));
  }
};