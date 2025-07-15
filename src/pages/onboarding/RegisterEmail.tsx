import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import BottomCTAButton from "../../components/common/BottomCTAButton";
import TopBarContainer from "../../components/common/TopBarContainer";
import { useNavigate } from "react-router-dom";
import {
  RegisterEmailFormData,
  registerEmailSchema,
} from "../../validations/registerEmailSchema";

function RegisterEmail() {
  const navigate = useNavigate();

  const memberType = localStorage.getItem("memberType");

  useEffect(() => {
    if (!memberType) {
      navigate("/onboarding/selectmembers");
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterEmailFormData>({
    resolver: zodResolver(registerEmailSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegisterEmailFormData) => {
    if (memberType === "individual") {
      navigate("/onboarding/profile-register", { state: { data } });
    } else if (memberType === "team") {
      navigate("/onboarding/company-profile-register", { state: { data } });
    }
  };

  const authCode = watch("authCode");

  const TopBarContent = () => {
    return (
      <span className="text-h2 font-Pretendard text-ct-black-100">
        이메일로 회원가입
      </span>
    );
  };

  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <form onSubmit={handleSubmit(onSubmit)} className="px-[25.45px]">
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
              {...register("email")}
              type="text"
              placeholder="이메일"
              className="w-[127px] h-[44px] pl-[18px] rounded-[10px] bg-[#F7F7F7] text-sub2 font-sans text-ct-black-200 placeholder:text-ct-gray-200"
            />
            <span className="ml-[7px] w-[18px] h-[24px]">@</span>
            <input
              id="emailDomain"
              {...register("domain")}
              type="text"
              placeholder="도메인 주소 입력"
              className="w-[162px] h-[44px] ml-[12px] pl-[26.5px] rounded-[10px] bg-[#F7F7F7] text-sub2 font-sans text-ct-black-200  placeholder:text-ct-gray-200"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sub2 mt-1">
              {errors.email.message}
            </p>
          )}
          {errors.domain && (
            <p className="text-red-500 text-sub2">{errors.domain.message}</p>
          )}
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
            <button
              type="button"
              className="w-full h-[44px] rounded-[10px] bg-ct-gray-100"
            >
              <span className="text-sub2 text-ct-gray-300 font-sans">
                이메일 인증 발송
              </span>
            </button>

            <div className="flex justify-between">
              <div className="relative w-[205px] h-[44px]">
                <input
                  id="authCode"
                  {...register("authCode")}
                  type="text"
                  className="w-full h-full rounded-[10px] bg-[#F7F7F7] px-3 pr-[36px] text-sub2 font-sans text-ct-black-200 placeholder:text-ct-gray-200"
                  placeholder="인증번호 입력"
                />
                {authCode?.trim() === "" ? (
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
                  <div className="absolute right-[10px] top-1/2 -translate-y-1/2">
                    <img
                      src="/assets/setting/check.svg"
                      alt="확인 아이콘"
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                )}
              </div>
              <button
                type="button"
                className="w-[109px] h-[44px] bg-ct-gray-100 rounded-[10px]"
              >
                <span className="text-sub2 text-ct-gray-300 font-sans">
                  재발송
                </span>
              </button>
            </div>
            {errors.authCode && (
              <p className="text-red-500 text-sub2">
                {errors.authCode.message}
              </p>
            )}
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
            {...register("password")}
            placeholder="새로운 비밀번호"
            className="w-full h-[44px] pl-[18px] bg-[#F7F7F7] rounded-[10px] text-sub2 font-sans  text-ct-black-200 placeholder:text-ct-gray-200"
          />
          {errors.password && (
            <p className="text-red-500 text-sub2">{errors.password.message}</p>
          )}
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="새로운 비밀번호 확인"
            className="w-full h-[44px] pl-[18px] bg-[#F7F7F7] rounded-[10px] text-sub2 font-sans text-ct-black-200"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sub2">
              {errors.confirmPassword.message}
            </p>
          )}
        </fieldset>

        {/* CTA 버튼 */}
        <div className="mt-[127px]">
          <BottomCTAButton
            type="submit"
            text="다음 단계로 이동"
            onClick={() => {}}
            disabled={!isValid || isSubmitting}
          />
        </div>
      </form>
    </TopBarContainer>
  );
}

export default RegisterEmail;
