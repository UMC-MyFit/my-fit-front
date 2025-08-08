import { SectorBaseSearchingItem } from "../../apis/searchingAPI";

function SearchingSwipeItem({ card }: { card: SectorBaseSearchingItem }) {
  return (
    <div className="w-[300px] ct-center shadow-find-card rounded-[16px] py-[16px]">
      <div className="w-[280px] ct-center flex-col gap-[8px]">
        <img
          src={card.card_img}
          alt="카드 이미지"
          className="rounded-[5px] w-[280px] h-[350px] object-cover"
        />
        <div className="w-full flex gap-[4px] justify-start items-center flex-wrap">
          {card.keywords.map((keyword, index) => (
            <div className="px-[9px] py-[2px] bg-ct-gray-100 rounded-[5px]">
              <span key={index} className="text-body2 text-ct-main-blue-100">
                #{keyword}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full p-[12px] bg-ct-gray-100 flex flex-col rounded-[5px] gap-2">
          <span className="text-sub1 text-ct-black-100">한줄 소개</span>
          <span className="text-body3 text-ct-black-200">
            {card.one_line_profile}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchingSwipeItem;
