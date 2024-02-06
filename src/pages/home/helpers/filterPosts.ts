import { ICard } from "../../../types/types";

export const filterPosts = (searchText: string, cardsLibrary: ICard[] | null) => {
  const trimmedSearchText = searchText.trim();
  const regex = new RegExp(trimmedSearchText, "i"); // 'i' flag for case-insensitive search

  return cardsLibrary?.filter((item) =>
    regex.test(item.name) ||
    regex.test(item.id) ||
    regex.test(item.shortDescription) ||
    regex.test(item.type)
  );
};