import { fetchListData } from "../pages/home/fetchData/fetchListData";
import { useAppDispatch, useAppSelector } from "../app/hooks";

interface Props {
  isPaginationShown: boolean;
}

export default function Pagination({ isPaginationShown }: Props) {
  const state = useAppSelector((state) => state.cardsLibrary);
  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    fetchListData(dispatch, state.pageNumber);
  };

  if (!isPaginationShown) return null;

  return (
    <button onClick={handleLoadMore} className="my_btn mb-10 mt-10">
      Load more
    </button>
  );
}