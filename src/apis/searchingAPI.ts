import apiClient from "./apiClient";

interface BaseResponse {
  isSuccess: boolean;
  code: number;
  message: string;
}

export interface SectorBaseSearchingItem {
  card_id: number;
  author_name: string;
  recruiting_status: string;
  keywords: string[];
  card_img: string;
  one_line_profile: string;
}
export interface SectorBaseSearchingResponse extends BaseResponse {
  result: {
    cards: SectorBaseSearchingItem[];
    next_cursor: string | null;
    has_next: boolean;
  };
}
type SectorBaseSearchingParams = {
  high_sector: string;
  low_sector: string;
  sort: "latest" | "oldest";
  cursor?: string;
};
export const sectorBaseSearching = async ({
  high_sector,
  low_sector,
  sort,
  cursor = "0",
}: SectorBaseSearchingParams): Promise<SectorBaseSearchingResponse> => {
  try {
    const { data } = await apiClient.get<SectorBaseSearchingResponse>(
      `/api/cards/sector`,
      {
        params: {
          high_sector,
          low_sector,
          sort,
          cursor,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("sectorBaseSearching error:", error);
    throw error;
  }
};
