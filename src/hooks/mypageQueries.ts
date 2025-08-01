import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getProfile,
  getFeeds,
  getCards,
  updateProfileImage,
  updateProfileStatus,
} from "../apis/mypageAPI";

export const useGetProfile = ({ service_id }: { service_id: string }) => {
  return useQuery({
    queryKey: ["profile", service_id],
    queryFn: () => getProfile({ service_id }),
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
      console.log("lastPage", lastPage);
      if (!lastPage.result.pagination.has_next) return undefined;
      return lastPage.result.pagination.next_cursor;
    },
    enabled: !!service_id,
  });
};

export const useGetCards = ({ service_id }: { service_id: string }) => {
  return useInfiniteQuery({
    queryKey: ["cards", service_id],
    queryFn: ({ pageParam = "0" }) =>
      getCards({ service_id, cursor: pageParam }),
    staleTime: 1000 * 60,
    initialPageParam: "0",
    getNextPageParam: (lastPage) => {
      if (!lastPage.result.pagination.has_next) return undefined;
      return lastPage.result.pagination.next_cursor;
    },
    enabled: !!service_id,
  });
};

export const useUpdateProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ profile_img }: { profile_img: string }) =>
      updateProfileImage({ profile_img }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      console.error("Failed to update profile image:", error);
    },
  });
};

export const useUpdateProfileStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ recruiting_status }: { recruiting_status: string }) =>
      updateProfileStatus({ recruiting_status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      console.error("Failed to update profile status:", error);
    },
  });
};
