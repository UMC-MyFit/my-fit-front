// 로그인 요청
export interface SigninRequest {
  email: string;
  password: string;
}

// 로그인 성공 응답
export interface SigninSuccessResponse {
  isSuccess: true;
  code: number; // 200
  message: string; // "로그인 성공"
  result: {
    service_id: number;
    email: string;
    name: string;
  };
}

// 로그인 실패 응답 (401, 500 등)
export interface SigninErrorResponse {
  isSuccess: false;
  code: number; // 401 or 500
  message: string;
  result: null;
}

// 최종적으로 API 응답 타입
export type SigninResponse = SigninSuccessResponse | SigninErrorResponse;
