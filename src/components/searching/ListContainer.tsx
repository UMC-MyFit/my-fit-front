import { SectorBaseSearchingItem } from "../../apis/searchingAPI";
import SearchingListItem from "./SearchingListItem";

function ListContainer({ cards }: { cards: SectorBaseSearchingItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-[16px]">
      {cards.map((card) => (
        <SearchingListItem key={card.card_id} card={card} />
      ))}
    </div>
  );
}

export default ListContainer;
