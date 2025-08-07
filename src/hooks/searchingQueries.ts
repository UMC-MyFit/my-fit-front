import { useInfiniteQuery } from "@tanstack/react-query";
import { sectorBaseSearching } from "../apis/searchingAPI";

export const useSectorBaseSearching = ({
  high_sector,
  low_sector,
  sort,
}: {
  high_sector: string;
  low_sector: string;
  sort: "latest" | "oldest";
}) => {
  return useInfiniteQuery({
    queryKey: ["sector-base-searching"],
    queryFn: ({ pageParam = "0" }) =>
      sectorBaseSearching({
        high_sector,
        low_sector,
        sort,
        cursor: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const nextCursor = lastPage.result.next_cursor;
      return nextCursor ? nextCursor : undefined;
    },
    initialPageParam: "0",
    enabled: !!high_sector && !!low_sector && !!sort,
  });
};
