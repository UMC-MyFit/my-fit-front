import { useEffect, useState } from "react";
import ImageDisplay from "../../components/common/ImageDisplay";
import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNav from "../../components/layouts/BottomNav";
import {
<<<<<<< HEAD
<<<<<<< HEAD
  usegetRecruitmentDetailQuery,
  useSubscribeRecruitmentMutation,
  useUnSubscribeRecruitmentMutation,
=======
  getRecruitmentDetail,
  subscribeRecruitment,
  unsubscribeRecruitment,
>>>>>>> db105ae (afterrebase)
=======
  subscribeRecruitment,
  unsubscribeRecruitment,
  usegetRecruitmentDetailQuery,
  useSubscribeRecruitmentMutation,
  useUnSubscribeRecruitmentMutation,
>>>>>>> 4b52133 (refactor/recruit)
} from "../../apis/recruiting/recruiting";
import { useParams } from "react-router-dom";

function RecruitAnnouncement() {
<<<<<<< HEAD
  const { recruitment_id } = useParams();
  const recruitmentId = String(recruitment_id);

  const { data, isLoading, isError } =
    usegetRecruitmentDetailQuery(recruitmentId);
  const { mutate: subscribe } = useSubscribeRecruitmentMutation(recruitmentId);
  const { mutate: unsubscribe } =
    useUnSubscribeRecruitmentMutation(recruitmentId);

  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);

  const handleSubscribe = () => {
    subscribe(undefined, {
      onSuccess: (res: any) => {
        setIsSubscribed(res?.is_subscribed ?? true);
      },
    });
  };

  const handleUnSubscribe = () => {
    unsubscribe(undefined, {
      onSuccess: (res: any) => {
        setIsSubscribed(res?.is_subscribed ?? false);
      },
    });
  };

=======
  const { recruitmentId } = useParams();
  const recruitment_id = String(recruitmentId);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { data, isLoading, isError } =
    usegetRecruitmentDetailQuery(recruitment_id);
  const { mutate: subscribe, isPending } =
    useSubscribeRecruitmentMutation(recruitment_id);
  const { mutate: unsubscribe } =
    useUnSubscribeRecruitmentMutation(recruitment_id);
  const handleSubscribe = () => {
    subscribe();
  };
  const handleUnSubscribe = () => {
    unsubscribe();
  };
>>>>>>> db105ae (afterrebase)
  const TopBarContent = () => {
    return (
      <div className="flex items-center gap-[6px]">
        <div className="w-[24px] h-[24px] bg-[#d9d9d9] rounded-[10px]" />
        <span className="text-h1 font-Pretendard text-ct-black-100 tracking-[-0.31px]">
<<<<<<< HEAD
<<<<<<< HEAD
          {data?.result.recruitment.writer.name}
=======
          {name}
>>>>>>> db105ae (afterrebase)
=======
          {data?.writer.name}
>>>>>>> 4b52133 (refactor/recruit)
        </span>
      </div>
    );
  };

  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="flex flex-col px-[19px] overflow-y-scroll">
        <div className="text-sub2 px-[5px] text-ct-main-blue-100">
<<<<<<< HEAD
<<<<<<< HEAD
          {data?.result.recruitment.dead_line}
=======
          {deadline}
>>>>>>> db105ae (afterrebase)
=======
          {data?.dead_line}
>>>>>>> 4b52133 (refactor/recruit)
        </div>
        <ul className="flex flex-col mt-[12.5px]">
          <li className="flex gap-[24px] px-[5px] py-[13px] border-y border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              공고 제목
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.title}
=======
              {title}
>>>>>>> db105ae (afterrebase)
=======
              {data?.title}
>>>>>>> 4b52133 (refactor/recruit)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              구인 직무
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.low_sector}
=======
              {lowsector}
>>>>>>> db105ae (afterrebase)
=======
              {data?.low_sector}
>>>>>>> 4b52133 (refactor/recruit)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              근무 지역
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.area}
=======
              {area}
>>>>>>> db105ae (afterrebase)
=======
              {data?.area}
>>>>>>> 4b52133 (refactor/recruit)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              지원 조건
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.require}
=======
              {require}
>>>>>>> db105ae (afterrebase)
=======
              {data?.require}
>>>>>>> 4b52133 (refactor/recruit)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              급여
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.salary}
=======
              {salary}
>>>>>>> db105ae (afterrebase)
=======
              {data?.salary}
>>>>>>> 4b52133 (refactor/recruit)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px]">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              근무 형태
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.work_type}
            </p>
          </li>
        </ul>

        {data?.result.recruitment.recruiting_img && (
          <ImageDisplay
            imageUrl={data?.result.recruitment.recruiting_img}
=======
              {workType}
=======
              {data?.work_type}
>>>>>>> 4b52133 (refactor/recruit)
            </p>
          </li>
        </ul>
        {data?.recruiting_img && (
          <ImageDisplay
<<<<<<< HEAD
            imageUrl={imgUrl}
>>>>>>> db105ae (afterrebase)
=======
            imageUrl={data?.recruiting_img}
>>>>>>> 4b52133 (refactor/recruit)
            alt="팀 상세 페이지"
            className="w-full max-w-[349px] max-h-[300px] object-contain rounded-[16px] mx-auto"
          />
        )}

        <div className="mt-[26px] flex justify-between">
          {isPending ? (
            <img
              src="/assets/recruit/bookmark(on).svg"
              alt="bookmark"
              onClick={handleUnSubscribe}
            />
          ) : (
            <img
              src="/assets/recruit/bookmark(off).svg"
              alt="bookmark"
              onClick={handleSubscribe}
            />
          )}

          <button className="w-[132px] h-[34px] rounded-[16px] bg-ct-main-blue-100 text-sub2 font-Pretendard text-ct-white">
            채팅으로 문의
          </button>
        </div>
      </div>
      <BottomNav />
    </TopBarContainer>
  );
}

export default RecruitAnnouncement;
