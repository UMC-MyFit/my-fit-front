import apiInstance from "../apiClient";

type Sector = {
  category: string;
  skills: string[];
};

export interface RegisterRecruitRequest {
  title: string;
  sectors: Sector[];
  area: string;
  require: string;
  salary: string;
  work_type: string;
  dead_line: string;
  recruiting_img: string;
}
export interface RegisterRecruitResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    recruiting_id: number;
    title: string;
    service_id: number;
  };
}
export interface RecruitmentItem {
  recruitment_id: number;
  title: string;
  require: string;
  low_sector: string[];
  work_type: string;
  dead_line: string;
  writer: {
    id: number;
    name: string;
    profile_img: string;
  };
}

export interface RecruitmentResponse {
  result: {
    recruitments: RecruitmentItem[];
    pagination: {
      total_page: number;
    };
  };
}
export interface UserInfo {
  id: number;
  name: string;
  profile_img: string;
}
export interface recruitmentDetailResponse {
  recruitment_id: number;
  title: string;
  low_sector: string;
  area: string;
  require: string;
  salary: string;
  work_type: string;
  dead_line: string;
  recruiting_img: string;
  writer: UserInfo;
}
export interface SubscribedRecruitment {
  recruitment_id: number;
  title: string;
  low_sector: string[];
  work_type: string;
  dead_line: string;
  writer: UserInfo;
}
export interface SubscribeRecruitmentResponse {
  recruitments: SubscribedRecruitment[];
  next_cursor: number;
  has_next: boolean;
}

export const RegisterRecruitPost = async (
  data: RegisterRecruitRequest
): Promise<RegisterRecruitResponse> => {
  const response = await apiInstance.post("/api/recruitments", data);
  return response.data;
};

export const getRecruitments = async (
  highSector: string,
  lowSector?: string,
  page?: number
): Promise<RecruitmentResponse> => {
  const params = {
    highSector,
    ...(lowSector !== undefined ? { lowSector } : {}),
    ...(page !== undefined ? { page } : {}),
  };
  const response = await apiInstance.get<RecruitmentResponse>(
    "/api/recruitments",
    { params }
  );
  return response.data;
};

export const getRecruitmentDetail = async (
  recruitment_id: string
): Promise<recruitmentDetailResponse> => {
  const response = await apiInstance.get(`/api/recruitments/${recruitment_id}`);
  return response.data;
};

export const subscribeRecruitment = async (recruitment_id: string) => {
  const response = await apiInstance.post(
    `/api/recruitments/${recruitment_id}/subscribe`
  );
  return response.data;
};
export const unsubscribeRecruitment = async (recruitment_id: string) => {
  const response = await apiInstance.delete(
    `/api/recruitments/${recruitment_id}/subscribe`
  );
  return response.data;
};
export const getSubscribedRecruitment = async (
  cursor?: number,
  limit: number = 10
): Promise<SubscribeRecruitmentResponse> => {
  const response = await apiInstance.get("/api/recruitments/subscribe", {
    params: { cursor, limit },
  });
  return response.data;
};
