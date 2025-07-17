import { useEffect, useState } from "react";
import BottomCTAButton from "../../components/common/BottomCTAButton";
import TopBarContainer from "../../components/common/TopBarContainer";
import { useLocation, useNavigate } from "react-router-dom";

function RegisterEmail() {
  const [authCode, setAuthCode] = useState("");

  // ✅ Router 도구 불러오기
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ 회원 유형 가져오기: state or localStorage
  const memberType =
    location.state?.memberType || localStorage.getItem("memberType");
  // ✅ 상태 보존 실패 시 강제 리디렉션
  useEffect(() => {
    if (!memberType) {
      navigate("/onboarding/selectmembers");
    }
  }, [memberType, navigate]);

  // ✅ 저장 후 다음 페이지로 이동
  const handleSubmit = () => {
    if (memberType === "individual") {
      navigate("/onboarding/profile-register");
    } else if (memberType === "team") {
      navigate("/onboarding/company-profile-register");
    }
  };

  const TopBarContent = () => {
    return (
      <span className="text-h2 font-Pretendard text-ct-black-100">
        이메일로 회원가입
      </span>
    );
  };
  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="px-[25.45px]">
        {/* 이메일 입력 */}
        <fieldset className="w-full mt-[30px]">
          <label
            htmlFor="email"
            className="block mb-[10px] text-sub1 font-sans text-ct-black-200"
          >
            이메일
          </label>
          <div className="flex justify-between items-center">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="이메일"
              className="w-[127px] h-[44px] pl-[18px] rounded-[10px] bg-[#F7F7F7] text-sub2 font-sans text-ct-gray-200"
            />
            <span className="ml-[7px] w-[18px] h-[24px]">@</span>
            <input
              id="emailDomain"
              name="emailDomain"
              type="text"
              placeholder="도메인 주소 입력"
              className="w-[162px] h-[44px] ml-[12px] pl-[26.5px] rounded-[10px] bg-[#F7F7F7] text-sub2 font-sans text-ct-gray-200"
            />
          </div>
        </fieldset>
        {/* 인증번호 입력 */}
        <fieldset className="w-full  mx-auto mt-[50px]">
          <label
            htmlFor="authCode"
            className="block mb-[10px] text-sub1 font-sans text-ct-black-200"
          >
            인증번호 입력
          </label>

          <div className="flex flex-col gap-[12px]">
            {/* 인증 발송 */}
            <button
              type="button"
              className="w-full h-[44px] rounded-[10px] bg-ct-gray-100  "
            >
              <span className="text-sub2 text-ct-gray-300 font-sans">
                이메일 인증 발송
              </span>
            </button>

            {/* 인증번호 입력칸 */}
            <div className="flex justify-between">
              <div className="relative w-[205px] h-[44px]">
                <input
                  id="authCode"
                  name="authCode"
                  type="text"
                  value={authCode}
                  onChange={(e) => setAuthCode(e.target.value)}
                  className="w-full h-full rounded-[10px] bg-[#F7F7F7] px-3 pr-[36px] text-sub2 font-sans text-ct-gray-200"
                  placeholder="인증번호 입력"
                />

                {authCode.trim() === "" ? (
                  <button
                    type="button"
                    className="absolute right-[10px] top-1/2 -translate-y-1/2"
                    aria-label="입력값 지우기"
                  >
                    <img
                      src="/assets/onboarding/delete.svg"
                      alt="지우기 아이콘"
                      className="w-[16px] h-[16px]"
                    />
                  </button>
                ) : (
                  // 체크 아이콘 (입력값 존재 시)
                  <div className="absolute right-[10px] top-1/2 -translate-y-1/2">
                    <img
                      src="/assets/setting/check.svg"
                      alt="확인 아이콘"
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                )}
              </div>{" "}
              <button
                type="button"
                className="w-[109px] h-[44px] bg-ct-gray-100 rounded-[10px] "
              >
                <span className="text-sub2 text-ct-gray-300 font-sans">
                  재발송
                </span>
              </button>
            </div>
          </div>
        </fieldset>
        {/* 비밀번호 입력 */}
        <fieldset className="w-full mx-auto mt-[50px] mb-[127px] flex flex-col gap-[13px]">
          <label
            htmlFor="password"
            className="text-sub1 font-sans text-ct-black-200"
          >
            새로운 비밀번호
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="새로운 비밀번호"
            className="w-full h-[44px] pl-[18px] bg-[#F7F7F7] rounded-[10px] text-sub2 font-sans text-ct-gray-200"
          />
          <input
            type="password"
            placeholder="새로운 비밀번호 확인"
            className="w-full h-[44px] pl-[18px] bg-[#F7F7F7] rounded-[10px] text-sub2 font-sans text-ct-gray-200 "
          />
        </fieldset>
        {/* CTA 버튼 */}
        <div className="mt-[127px] ">
          <BottomCTAButton
            text="저장하기"
            onClick={handleSubmit}
            disabled={true}
          />{" "}
        </div>
      </div>
    </TopBarContainer>
  );
}

export default RegisterEmail;
