import { useEffect, useState } from "react";
import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNav from "../../components/layouts/BottomNav";
<<<<<<< HEAD
<<<<<<< HEAD
import RecruitCard from "../../components/recruiting/RecruitCard";
import {
  SubscribedRecruitment,
  useGetSubscribedRecruitment,
} from "../../apis/recruiting/recruiting";

function SavedAnnouncement() {
  const [recruitment, setRecruitment] = useState<SubscribedRecruitment[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const { data, isLoading, isError } = useGetSubscribedRecruitment(page);

  useEffect(() => {
    if (data) {
      setRecruitment(data.result.subscribedRecruitments);
      setTotalPage(data.result.pagination.total_page);
    }
  }, [data]);
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>저장된 공고를 불러오는 중 오류가 발생했습니다.</div>;

=======
<<<<<<< HEAD
import RecruitCardSkeleton from "../../components/skeletons/recruiting/RecruitCardSkeleton";
=======
=======
>>>>>>> 1c1dd6c (afterrebase)
import RecruitCard from "../../components/recruiting/RecruitCard";
import {
  getSubscribedRecruitment,
  SubscribedRecruitment,
} from "../../apis/recruiting/recruiting";

function SavedAnnouncement() {
  const [recruitment, SetRecruitment] = useState<SubscribedRecruitment[]>([]);
  const [cursor, setCursor] = useState<number | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { recruitments, next_cursor } = await getSubscribedRecruitment(
          cursor
        );
        SetRecruitment(recruitments);
        setCursor(next_cursor);
      } catch (error) {
        console.log("공고 불러오기 실패", error);
      }
    };
    fetchData();
  }, [cursor]);
>>>>>>> db105ae (afterrebase)
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
        {recruitment.map((item) => (
          <RecruitCard key={item.recruitment_id} data={item} />
        ))}
      </div>
      {totalPage >= 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="px-3 py-1 text-sm rounded border disabled:text-ct-gray-200"
          >
            {"<"}
          </button>
          {Array.from({ length: totalPage }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 text-sm rounded border ${
                page === i + 1
                  ? "bg-ct-main-blue-200 text-white"
                  : "text-ct-black-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPage}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-3 py-1 text-sm rounded border disabled:text-ct-gray-200"
          >
            {">"}
          </button>
        </div>
      )}
      <BottomNav />
    </TopBarContainer>
  );
}
export default SavedAnnouncement;
