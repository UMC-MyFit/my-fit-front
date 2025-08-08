import { SectorBaseSearchingItem } from "../../apis/searchingAPI";
import SearchingSwipeItem from "./SearchingSwipeItem";

function SwipeContainer({ cards }: { cards: SectorBaseSearchingItem[] }) {
  return (
    <div className="w-[300px] mx-auto">
      {cards.map((card) => (
        <SearchingSwipeItem key={card.card_id} card={card} />
      ))}
    </div>
  );
}

export default SwipeContainer;
