import { useEffect, useState } from "react";
import ImageDisplay from "../../components/common/ImageDisplay";
import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNav from "../../components/layouts/BottomNav";
import {
<<<<<<< HEAD
  usegetRecruitmentDetailQuery,
  useSubscribeRecruitmentMutation,
  useUnSubscribeRecruitmentMutation,
=======
  getRecruitmentDetail,
  subscribeRecruitment,
  unsubscribeRecruitment,
>>>>>>> db105ae (afterrebase)
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
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [title, setTitle] = useState("");
  const [lowsector, setLowsector] = useState("");
  const [area, setArea] = useState("");
  const [require, setRequire] = useState("");
  const [salary, setSalary] = useState("");
  const [workType, setWorkType] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecruitmentDetail(recruitment_id);
        setName(response.writer.name);
        setDeadline(response.dead_line);
        setTitle(response.title);
        setLowsector(response.low_sector);
        setArea(response.area);
        setRequire(response.require);
        setSalary(response.salary);
        setWorkType(response.work_type);
        setImgUrl(response.recruiting_img);
      } catch (error) {
        console.error("공고 불러오기 실패:", error);
        alert("공고 불러오기에 실패했습니다.");
      }
    };
    fetchData();
  }, [recruitment_id]);
  const handleSubscribe = async () => {
    try {
      const res = await subscribeRecruitment(recruitment_id);
      alert(res.message);
      setIsSubscribed(true);
    } catch (error: any) {
      if (error.response?.status === 409) {
        alert("이미 구독한 공고입니다.");
      } else if (error.response?.status === 401) {
        alert("로그인이 필요한 요청입니다.");
      } else {
        alert("구독 중 오류가 발생했습니다.");
      }
    }
  };
  const handleUnSubscribe = async () => {
    try {
      const res = await unsubscribeRecruitment(recruitment_id);
      alert(res.message);
      setIsSubscribed(false);
    } catch (error: any) {
      if (error.response?.status === 400) {
        alert("해당 공고를 구독한 내역이 없습니다.");
      } else if (error.response?.status === 401) {
        alert("로그인이 필요한 요청입니다.");
      } else if (error.response?.status === 404) {
        alert("해당 공고를 찾을 수 없습니다.");
      } else {
        alert("서버에 오류가 발생했습니다.");
      }
    }
  };
>>>>>>> db105ae (afterrebase)
  const TopBarContent = () => {
    return (
      <div className="flex items-center gap-[6px]">
        <div className="w-[24px] h-[24px] bg-[#d9d9d9] rounded-[10px]" />
        <span className="text-h1 font-Pretendard text-ct-black-100 tracking-[-0.31px]">
<<<<<<< HEAD
          {data?.result.recruitment.writer.name}
=======
          {name}
>>>>>>> db105ae (afterrebase)
        </span>
      </div>
    );
  };

  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="flex flex-col px-[19px] overflow-y-scroll">
        <div className="text-sub2 px-[5px] text-ct-main-blue-100">
<<<<<<< HEAD
          {data?.result.recruitment.dead_line}
=======
          {deadline}
>>>>>>> db105ae (afterrebase)
        </div>
        <ul className="flex flex-col mt-[12.5px]">
          <li className="flex gap-[24px] px-[5px] py-[13px] border-y border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              공고 제목
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
              {data?.result.recruitment.title}
=======
              {title}
>>>>>>> db105ae (afterrebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              구인 직무
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
              {data?.result.recruitment.low_sector}
=======
              {lowsector}
>>>>>>> db105ae (afterrebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              근무 지역
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
              {data?.result.recruitment.area}
=======
              {area}
>>>>>>> db105ae (afterrebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              지원 조건
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
              {data?.result.recruitment.require}
=======
              {require}
>>>>>>> db105ae (afterrebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px] border-b border-ct-gray-200">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              급여
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
<<<<<<< HEAD
              {data?.result.recruitment.salary}
=======
              {salary}
>>>>>>> db105ae (afterrebase)
            </p>
          </li>
          <li className="flex gap-[24px] px-[5px] py-[13px]">
            <p className="w-[57px] h-[16px] text-body1 text-ct-gray-300 shrink-0">
              근무 형태
            </p>
            <p className="text-body1 text-ct-black-200 whitespace-pre-line">
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
            </p>
          </li>
        </ul>
        {imgUrl && (
          <ImageDisplay
            imageUrl={imgUrl}
>>>>>>> db105ae (afterrebase)
            alt="팀 상세 페이지"
            className="w-full max-w-[349px] max-h-[300px] object-contain rounded-[16px] mx-auto"
          />
        )}

        <div className="mt-[26px] flex justify-between">
          {isSubscribed ? (
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
