import { useEffect, useState } from "react";
import ImageDisplay from "../../components/common/ImageDisplay";
import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNav from "../../components/layouts/BottomNav";
import {
<<<<<<< HEAD
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
=======
>>>>>>> 34e8bff (refactor/imageuploadBox)
  usegetRecruitmentDetailQuery,
  useSubscribeRecruitmentMutation,
  useUnSubscribeRecruitmentMutation,
>>>>>>> 4b52133 (refactor/recruit)
} from "../../apis/recruiting/recruiting";
import { useParams } from "react-router-dom";
import RecruitAnnouncementSkeleton from "../../components/skeletons/recruiting/RecruitAnnouncementSkeleton";

function RecruitAnnouncement() {
<<<<<<< HEAD
<<<<<<< HEAD
  const { recruitment_id } = useParams();
  const recruitmentId = String(recruitment_id);

  const { data, isLoading, isError } =
    usegetRecruitmentDetailQuery(recruitmentId);
  const { mutate: subscribe } = useSubscribeRecruitmentMutation(recruitmentId);
<<<<<<< HEAD
  const { mutate: unsubscribe } =
    useUnSubscribeRecruitmentMutation(recruitmentId);

  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);
  const [showSkeleton, setShowSkeleton] = useState(true);

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

<<<<<<< HEAD
=======
  const { recruitmentId } = useParams();
  const recruitment_id = String(recruitmentId);
  const [isSubscribed, setIsSubscribed] = useState(false);
=======
  const { recruitment_id } = useParams();
  const recruitmentId = String(recruitment_id);
>>>>>>> 34e8bff (refactor/imageuploadBox)

  const { data, isLoading, isError } =
    usegetRecruitmentDetailQuery(recruitmentId);
  const { mutate: subscribe, isPending } =
    useSubscribeRecruitmentMutation(recruitmentId);
=======
>>>>>>> 4a75838 (before rebase)
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
<<<<<<< HEAD
>>>>>>> db105ae (afterrebase)
=======

>>>>>>> 4a75838 (before rebase)
=======
  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setShowSkeleton(false);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setShowSkeleton(true);
    }
  }, [isLoading]);

  const formattedDeadLine = data?.result.recruitment.dead_line.split("T")[0];

  if (isLoading || showSkeleton) {
    return (
      <TopBarContainer
        TopBarContent={
          <div className="w-[100px] h-[24px] bg-gray-200 rounded" />
        }
      >
        <RecruitAnnouncementSkeleton />
        <BottomNav />
      </TopBarContainer>
    );
  }

>>>>>>> ec2d7e9 (beforerebase)
  const TopBarContent = () => {
    return (
      <div className="flex items-center gap-[6px]">
        <div className="w-[24px] h-[24px] bg-[#d9d9d9] rounded-[10px]" />
        <span className="text-h1 font-Pretendard text-ct-black-100 tracking-[-0.31px]">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {data?.result.recruitment.writer.name}
=======
          {name}
>>>>>>> db105ae (afterrebase)
=======
          {data?.writer.name}
>>>>>>> 4b52133 (refactor/recruit)
=======
          {data?.result.writer.name}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
          {data?.result.recruitment.writer.name}
>>>>>>> 4a75838 (before rebase)
        </span>
      </div>
    );
  };

  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
<<<<<<< HEAD
      <div className="flex flex-col px-[19px] overflow-y-scroll">
        <div className="text-sub2 px-[5px] text-ct-main-blue-100">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {data?.result.recruitment.dead_line}
=======
          {deadline}
>>>>>>> db105ae (afterrebase)
=======
          {data?.dead_line}
>>>>>>> 4b52133 (refactor/recruit)
=======
          {data?.result.dead_line}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
          {data?.result.recruitment.dead_line}
>>>>>>> 4a75838 (before rebase)
=======
      <div className="flex flex-col px-[19px] pb-[100px] overflow-y-auto">
        <div className="text-sub2 px-[5px] text-ct-main-blue-100 mt-[10px]">
          마감일자 : {formattedDeadLine}
>>>>>>> ec2d7e9 (beforerebase)
        </div>
        <ul className="flex flex-col mt-[12.5px]">
          <li className="flex gap-[24px] px-[5px] py-[13px] border-y border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              공고 제목
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.title}
=======
              {title}
>>>>>>> db105ae (afterrebase)
=======
              {data?.title}
>>>>>>> 4b52133 (refactor/recruit)
=======
              {data?.result.title}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
              {data?.result.recruitment.title}
>>>>>>> 4a75838 (before rebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              구인 직무
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.low_sector}
=======
              {lowsector}
>>>>>>> db105ae (afterrebase)
=======
              {data?.low_sector}
>>>>>>> 4b52133 (refactor/recruit)
=======
              {data?.result.low_sector}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
              {data?.result.recruitment.low_sector}
>>>>>>> 4a75838 (before rebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              근무 지역
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.area}
=======
              {area}
>>>>>>> db105ae (afterrebase)
=======
              {data?.area}
>>>>>>> 4b52133 (refactor/recruit)
=======
              {data?.result.area}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
              {data?.result.recruitment.area}
>>>>>>> 4a75838 (before rebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              지원 조건
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.require}
=======
              {require}
>>>>>>> db105ae (afterrebase)
=======
              {data?.require}
>>>>>>> 4b52133 (refactor/recruit)
=======
              {data?.result.require}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
              {data?.result.recruitment.require}
>>>>>>> 4a75838 (before rebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              급여
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {data?.result.recruitment.salary}
=======
              {salary}
>>>>>>> db105ae (afterrebase)
=======
              {data?.salary}
>>>>>>> 4b52133 (refactor/recruit)
=======
              {data?.result.salary}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
              {data?.result.recruitment.salary}
>>>>>>> 4a75838 (before rebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px]">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              근무 형태
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
              {data?.result.work_type}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
              {data?.result.recruitment.work_type}
>>>>>>> 4a75838 (before rebase)
            </p>
          </li>
        </ul>

        {data?.result.recruitment.recruiting_img && (
          <ImageDisplay
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            imageUrl={imgUrl}
>>>>>>> db105ae (afterrebase)
=======
            imageUrl={data?.recruiting_img}
>>>>>>> 4b52133 (refactor/recruit)
=======
            imageUrl={data?.result.recruiting_img}
>>>>>>> 34e8bff (refactor/imageuploadBox)
=======
            imageUrl={data?.result.recruitment.recruiting_img}
>>>>>>> 4a75838 (before rebase)
            alt="팀 상세 페이지"
            className="w-full max-w-[349px] mt-[15px] rounded-[16px] mx-auto"
          />
        )}

        <div className="mt-[26px] flex justify-between">
          {data?.result.recruitment.is_subscribed ? (
            <img
              src="/assets/recruit/bookmark(on).svg"
              alt="bookmark"
              onClick={handleUnSubscribe}
              className="ml-[19px]"
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
