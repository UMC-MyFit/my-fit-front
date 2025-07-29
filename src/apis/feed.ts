import apiClient from "./apiClient";
import { FeedResponse } from "../types/feed/feed";

export const getFeedsWithCursor = async (cursor?: number): Promise<FeedResponse> => {
  try {
    console.log("🔵 [API] 피드 목록 요청:", { cursor });
    
    const params = cursor ? { cursor } : {};
    const response = await apiClient.get<FeedResponse>("/api/feeds", { params });
    
    console.log("✅ [API] 피드 목록 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ [API] 피드 목록 실패:", error);
    throw error;
  }
};