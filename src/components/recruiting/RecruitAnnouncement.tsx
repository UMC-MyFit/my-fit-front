import TopBar from "../common/TopBar";
import BottomNav from "../layouts/BottomNav";

function RecruitAnnouncement() {
  return (
    <>
      <TopBar>
        <div className="flex items-center gap-[6px]">
          <div className="w-[32px] h-[32px] bg-[#d9d9d9] rounded-[10px]" />
          <span className="text-h1 font-Pretendard text-[#333333] tracking-[-0.31px] ">
            마이루틴
          </span>
        </div>
      </TopBar>
      <div className="flex flex-col min-h-screen pt-[66px] mb-[89px] px-[19px]">
        <div className="text-sub2 px-[5px] text-ct-main-blue-100">
          마감일자:2025.01.01
        </div>
        <ul className="flex flex-col mt-[12.5px]">
          <li className="flex gap-[24px] px-[5px] py-[13px] border-y border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              공고제목
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
              Next.js와 함께 성장할 프론트엔드 엔지니어
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              구인 직무
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
              프론트엔드 엔지니어
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              근무 지역
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
              서울특별시 강남구 테헤란로 311 (역삼역 도보 5분)
            </p>
          </li>
        </ul>
      </div>
      <BottomNav />
    </>
  );
}
export default RecruitAnnouncement;
