import { useMutation } from "@tanstack/react-query";
import { postLogout } from "../apis/settingAPI";
import { useNavigate } from "react-router-dom";

export const usePostLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      navigate("/onboarding");
    },
  });
};
