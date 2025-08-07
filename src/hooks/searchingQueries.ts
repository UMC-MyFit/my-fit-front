import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  sectorBaseSearching,
  CountCardParams,
  countCard,
} from "../apis/searchingAPI";

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
    queryKey: ["sector-base-searching", high_sector, low_sector, sort],
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

export const useCountCard = (params: CountCardParams) => {
  return useQuery({
    queryKey: ["count-card"],
    queryFn: () => countCard({ ...params }),
    enabled:
      !!params.area ||
      !!params.status ||
      !!params.hope_job ||
      !!params.keywords?.length,
  });
};
