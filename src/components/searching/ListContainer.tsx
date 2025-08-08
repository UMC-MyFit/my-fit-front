import { SectorBaseSearchingItem } from "../../apis/searchingAPI";
import SearchingListItem from "./SearchingListItem";

function ListContainer({
  cards,
  isLoading,
  hasNextPage,
  fetchNextPage,
}: {
  cards: SectorBaseSearchingItem[];
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}) {
  return (
    <div className="w-full ct-center">
      <div className="grid grid-cols-2 gap-[8px]">
        {cards.map((card) => (
          <SearchingListItem key={card.card_id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
