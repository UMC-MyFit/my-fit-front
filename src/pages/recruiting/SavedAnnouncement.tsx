import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNav from "../../components/layouts/BottomNav";
import RecruitCard from "../../components/recruiting/RecruitCard";

function SavedAnnouncement() {
  const TopBarContent = () => {
    return (
      <span className="text-h2 font-Pretendard text-ct-black-300">
        저장된 공고
      </span>
    );
  };
  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="flex flex-col gap-[12px] items-center mb-[89px] ">
        <RecruitCard />
        <RecruitCard />
      </div>
      <BottomNav />
    </TopBarContainer>
  );
}
export default SavedAnnouncement;
