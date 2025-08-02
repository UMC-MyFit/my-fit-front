import apiClient from "./apiClient";

interface BaseResponse {
  isSuccess: boolean;
  code: number;
  message: string;
}

export interface GetProfileResponse extends BaseResponse {
  result: {
    service: {
      id: number;
      recruiting_status: string;
      profile_img: string;
      high_sector: string;
      low_sector: string;
      userArea: {
        high_area: string;
        low_area: string;
      };
    };
    user: {
      id: number;
      name: string;
      one_line_profile: string;
      Highest_grade: string | null;
      link: string | null;
      inc_AuthN_file: string | null;
      division: string;
      grade_status: string;
      industry: string | null;
      team_division: string | null;
    };
    interest_count: number;
    network_count: number;
  };
}
export const getProfile = async ({
  service_id,
}: {
  service_id: string;
}): Promise<GetProfileResponse> => {
  try {
    const { data } = await apiClient.get<GetProfileResponse>(
      `/api/mypage/${service_id}/profile_info`
    );
    return data;
  } catch (error) {
    console.error("getProfile error:", error);
    throw error;
  }
};

export interface UpdateProfileImageResponse extends BaseResponse {
  result: {
    user_id: string;
    profile_img: string;
  };
}
export const updateProfileImage = async ({
  profile_img,
}: {
  profile_img: string;
}): Promise<UpdateProfileImageResponse> => {
  try {
    const { data } = await apiClient.patch<UpdateProfileImageResponse>(
      `/api/mypage/profile_pic`,
      { profile_img }
    );
    return data;
  } catch (error) {
    console.error("updateProfileImage error:", error);
    throw error;
  }
};

export interface UpdateProfileStatusResponse extends BaseResponse {
  result: {
    user_id: string;
    service_id: string;
    recruiting_status: string;
  };
}
export const updateProfileStatus = async ({
  recruiting_status,
}: {
  recruiting_status: string;
}): Promise<UpdateProfileStatusResponse> => {
  try {
    const { data } = await apiClient.patch<UpdateProfileStatusResponse>(
      `/api/mypage/recruiting_status`,
      { recruiting_status }
    );
    return data;
  } catch (error) {
    console.error("updateProfileStatus error:", error);
    throw error;
  }
};

// 스웨거와 실제 응답값이 다름
export interface FeedItem {
  feed_id: string;
  user: {
    id: string;
    name: string;
    sector: string;
    profile_img: string;
  };
  created_at: string;
  images: string[];
  feed_text: string;
  hashtags: string;
  heart: number;
  comment_count: number;
}
export interface GetFeedsResponse extends BaseResponse {
  result: {
    feeds: FeedItem[];
    pagination: {
      has_next: boolean;
      next_cursor: string;
    };
  };
}
export const getFeeds = async ({
  service_id,
  cursor,
}: {
  service_id: string;
  cursor: string;
}): Promise<GetFeedsResponse> => {
  try {
    const { data } = await apiClient.get<GetFeedsResponse>(
      `/api/mypage/${service_id}/feeds`,
      {
        params: {
          limit: "10",
          cursor,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("getFeeds error:", error);
    throw error;
  }
};

export interface CardItem {
  id: string;
  card_img: string;
  one_line_profile: string;
  detailed_profile: string;
  link: string;
  created_at: string;
  updated_at: string;
  keywords: string[];
}
export interface GetCardsResponse extends BaseResponse {
  result: {
    cards: CardItem[];
    pagination: {
      has_next: boolean;
      next_cursor: string;
    };
  };
}
export const getCards = async ({
  service_id,
  cursor,
}: {
  service_id: string;
  cursor: string;
}): Promise<GetCardsResponse> => {
  try {
    const { data } = await apiClient.get<GetCardsResponse>(
      `/api/mypage/${service_id}/cards`,
      {
        params: {
          cursor,
          limit: "10",
        },
      }
    );
    return data;
  } catch (error) {
    console.error("getCards error:", error);
    throw error;
  }
};
