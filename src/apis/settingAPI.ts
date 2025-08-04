import apiClient from "./apiClient";

interface BaseResponse {
  isSuccess: boolean;
  code: number;
  message: string;
}

export interface LogoutResponse extends BaseResponse {
  result: null;
}
export const postLogout = async (): Promise<LogoutResponse> => {
  try {
    const { data } = await apiClient.post("/api/users/logout");
    return data;
  } catch (error) {
    console.error("postLogout error:", error);
    throw error;
  }
};
