import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getProfile, getFeeds } from "../apis/mypageAPI";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: 1000 * 60,
  });
};

export const useGetFeeds = ({ service_id }: { service_id: string }) => {
  return useInfiniteQuery({
    queryKey: ["feeds", service_id],
    queryFn: ({ pageParam = "0" }) =>
      getFeeds({ service_id, cursor: pageParam }),
    staleTime: 1000 * 60,
    initialPageParam: "0",
    getNextPageParam: (lastPage) => {
      if (!lastPage.result.pagination.hasMore) return undefined;
      return lastPage.result.pagination.nextCursorId;
    },
    enabled: !!service_id,
  });
};

export const useGetCards = ({ service_id }: { service_id: string }) => {
  return;
};
