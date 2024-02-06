import { ICard } from "../types/types";
import Card from "./card";

interface Props {
  listData: ICard[];
}

const CardsList = ({ listData }: Props) => {

  return (
    <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {listData.map((listItem, index) => {
        return (
          <Card key={index} cardData={listItem} />
        );
      })}
    </div>
  );
};

export default CardsList;