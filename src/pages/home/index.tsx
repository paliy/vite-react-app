import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ICard } from "../../types/types";
import { fetchListData } from "./fetchData/fetchListData";
import { filterPosts } from "./helpers/filterPosts";

import CardsList from "../../components/cardList";
import Search from "../../components/search";
import Loading from "../../components/loader";
import Pagination from "../../components/pagination";

const Home = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const state = useAppSelector((state) => state.cardsLibrary);
  const [searchText, setSearchText] = useState<string>('');
  const [searchedResults, setSearchedResults] = useState<ICard[] | undefined>([]);
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  const listData = searchText ? searchedResults : state.cardsLibrary;
  const pageNumber = Number(searchParams.get("page")) || 0;

  useEffect(() => {
    fetchListData(dispatch, pageNumber);
  }, []);

  useEffect(() => {
    return () => {
      if (searchTimeout) clearTimeout(searchTimeout);
    };
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchText(searchText);

    // debounce method
    setSearchTimeout(setTimeout(() => {
      const searchResult = filterPosts(searchText, state.cardsLibrary);
      setSearchedResults(searchResult);
    }, 500));
  }, [searchTimeout, state.cardsLibrary]);

  //TODO implement error state of request
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center black_gradient">List of Keboola components.</h1>
      <br className="max-md:hidden" />

      <Search
        searchText={searchText}
        handleSearchChange={handleSearchChange}
      />

      <>
        {listData && <CardsList listData={listData} />}
        {state.isLoading && <Loading />}
        {state.isLoading || listData && <Pagination isPaginationShown={listData.length > 0 && searchText.length <= 0} />}
      </>

    </section>
  );
};

export default Home;