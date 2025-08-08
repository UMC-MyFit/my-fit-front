import { useState, useCallback, useEffect } from "react";
import TopBarContainer from "../../components/common/TopBarContainer";
import { useLocation } from "react-router-dom";
import { useFilterResult } from "../../hooks/searchingQueries";
import SearchingSwipeItem from "../../components/searching/SearchingSwipeItem";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { SectorBaseSearchingItem } from "../../apis/searchingAPI";

function TopBarContent() {
  return (
    <div>
      <span className="text-h2 text-ct-black-100">검색 결과</span>
    </div>
  );
}

const CARD_OFFSET = 10;
const SWIPE_CONFIDENCE_THRESHOLD = 10000;

function FilterResult() {
  const { state } = useLocation();
  const [viewType, setViewType] = useState<"swipe" | "list">("swipe");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [exitX, setExitX] = useState(0);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useFilterResult({
      area: state?.area,
      status: state?.status,
      hope_job: state?.hope_job,
      keywords: state?.keywords,
    });

  // Reset current index when data changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [data?.pages]);

  const allCards = data?.pages.flatMap((page) => page.result.cards) || [];
  const currentCard = allCards[currentIndex];
  const nextCard = allCards[currentIndex + 1];

  const handleTypeClick = () => {
    setViewType(viewType === "swipe" ? "list" : "swipe");
  };

  const handleDragEnd = useCallback(
    (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const shouldSwipe = Math.abs(info.offset.x) > SWIPE_CONFIDENCE_THRESHOLD;

      if (shouldSwipe) {
        setExitX(info.offset.x < 0 ? -200 : 200);
        setDirection(info.offset.x < 0 ? 1 : -1);

        setTimeout(() => {
          setCurrentIndex((prev) => {
            const nextIndex = prev + 1;

            // Load more when we're at the second-to-last card
            if (
              hasNextPage &&
              !isFetchingNextPage &&
              nextIndex >= allCards.length - 2
            ) {
              fetchNextPage();
            }

            return nextIndex % allCards.length;
          });
          setExitX(0);
        }, 200);
      }
    },
    [allCards.length, hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  const renderList = (cards: SectorBaseSearchingItem[]) => (
    <div className="w-full">
      {cards.map((card) => (
        <div key={card.card_id} className="mb-4">
          <SearchingSwipeItem card={card} />
        </div>
      ))}
    </div>
  );

  const renderSwipe = (
    currentCard?: SectorBaseSearchingItem,
    nextCard?: SectorBaseSearchingItem
  ) => (
    <div className="relative w-[320px] h-[500px]">
      {nextCard && (
        <motion.div
          className="absolute w-full h-full"
          style={{
            top: CARD_OFFSET,
            scale: 0.95,
            zIndex: 1,
          }}
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{
            scale: 0.95,
            opacity: 1,
            transition: { duration: 0.2 },
          }}
        >
          <SearchingSwipeItem card={nextCard} />
        </motion.div>
      )}

      <AnimatePresence custom={direction}>
        {currentCard && (
          <motion.div
            key={currentCard.card_id}
            className="absolute w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            custom={direction}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              x: exitX,
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.2 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <SearchingSwipeItem card={currentCard} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (viewType === "list") {
    return (
      <TopBarContainer TopBarContent={<TopBarContent />}>
        <div className="w-full ct-center py-[24px]">
          <div className="w-[320px] ct-center flex-col">
            <div className="w-full flex justify-end gap-2">
              <span
                className="text-sub2 text-ct-black-200 cursor-pointer"
                onClick={handleTypeClick}
              >
                넘겨보기
              </span>
              <span className="text-sub2 text-ct-main-blue-100">
                총 {state?.count}장
              </span>
            </div>
            {renderList(allCards)}
          </div>
        </div>
      </TopBarContainer>
    );
  }

  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="w-full ct-center py-[24px]">
        <div className="w-[320px] ct-center flex-col">
          <div className="w-full flex justify-end gap-2">
            <span
              className="text-sub2 text-ct-black-200 cursor-pointer"
              onClick={handleTypeClick}
            >
              전체보기
            </span>
            <span className="text-sub2 text-ct-main-blue-100">
              총 {state?.count}장
            </span>
          </div>
          {renderSwipe(currentCard, nextCard)}
        </div>
      </div>
    </TopBarContainer>
  );
}

export default FilterResult;
