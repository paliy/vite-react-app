import { AppDispatch } from "../../../app/store";
import { ICard } from "../../../types/types";
import { setCardsLibrary, setError, setIsLoading, setPageNumber } from "../store/slices";

export const fetchListData = async (dispatch: AppDispatch, pageNumber: number) => {
  const itemsPerPage = 30; // Number of items you want to display per page
  
  dispatch(setIsLoading(true));
  dispatch(setError(null));
  try {
    const offset = pageNumber === 0 ? 0 : itemsPerPage * pageNumber;
    const limit = itemsPerPage;

    const url = `https://apps-api.keboola.com/apps?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: ICard[] = await response.json();

    dispatch(setCardsLibrary(data));
    dispatch(setPageNumber());
    dispatch(setError(null)); // Reset error state if successful
  } catch (error) {
    dispatch(setError('Failed to fetch data'));
  } finally {
    dispatch(setIsLoading(false));
  }
};