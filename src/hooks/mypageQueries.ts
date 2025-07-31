import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../apis/mypageAPI";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: 1000 * 60,
  });
};
