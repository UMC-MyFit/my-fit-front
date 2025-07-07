import { useState } from "react";
import TopBarContainer from "../../components/common/TopBarContainer";
import BottomCTAButton from "../../components/common/BottomCTAButton";

type MemberType = "individual" | "team";

function SelectMembers() {
  const [selected, setSelected] = useState<MemberType | null>(null);

  const handleSelect = (type: MemberType) => setSelected(type);

  const handleNextStep = () => {
    if (!selected) return;
    // navigate 로직 추가 예정
  };

  return (
    <TopBarContainer
      TopBarContent={
        <span className="font-sans text-h2 text-ct-black-200">회원가입</span>
      }
    >
      <div className="flex flex-col px-[25.26px] bg-ct-white justify-between">
        {/* 카드 선택 영역 */}
        <div className="flex flex-col items-center gap-[10px] mt-[118px] mb-[118px]">
          {/* 개인 회원 카드 */}
          <div
            onClick={() => handleSelect("individual")}
            className={`w-full h-[164px] ct-center gap-[25px] px-[20px] rounded-[10px] border cursor-pointer ${
              selected === "individual"
                ? "border-ct-main-blue-100"
                : "border-ct-gray-100"
            }`}
          >
            <img
              src="/assets/onboarding/individual_member.svg"
              alt="개인 회원"
              className="w-[109px] h-[99px]"
            />
            <div className="font-sans">
              <p className="text-h2 text-ct-black-200">개인 회원</p>
              <p className="text-sub1 text-ct-main-blue-100">
                구직/네트워킹 희망
              </p>
            </div>
          </div>

          {/* 회사/팀 회원 카드 */}
          <div
            onClick={() => handleSelect("team")}
            className={`w-full h-[164px] ct-center gap-[25px] px-[20px] rounded-[10px] border cursor-pointer ${
              selected === "team"
                ? "border-ct-main-blue-100"
                : "border-ct-gray-100"
            }`}
          >
            <img
              src="/assets/onboarding/group_member.svg"
              alt="회사/팀 회원"
              className="w-[109px] h-[99px]"
            />
            <div className="font-sans">
              <p className="text-h2 text-ct-black-200">회사/팀 회원</p>
              <p className="text-sub1 text-ct-main-blue-100">
                스타트업/(예비)창업 팀
              </p>
            </div>
          </div>
        </div>
        {/* CTA 버튼 */}
        <div className="mt-[24px] mb-[42px] px-[0.74px]">
          <BottomCTAButton
            text="다음 단계로 이동"
            onClick={handleNextStep}
            disabled={!selected}
          />
        </div>{" "}
      </div>
    </TopBarContainer>
  );
}

export default SelectMembers;
