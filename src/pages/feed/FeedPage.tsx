import { useEffect, useState } from "react";
import FeedCard from "../../components/feed/FeedCard";
import FixedHeader from "../../components/feed/FixedHeader";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import FeedCardSkeleton from "../../components/skeletons/feed/FeedCardSkeleton";

const dummyFeed = [
  {
    user: {
      name: "우슬희",
      job: "광고 마케터",
      profileImage: "/assets/profile/profileImage.png",
    },
    post: {
      images: [
        "/assets/feed/feed_main.svg",
        "/assets/feed/feed_main.svg",
        "/assets/feed/feed_main.svg",
        "/assets/feed/feed_main.svg",
        "/assets/feed/feed_main.svg",
        "/assets/feed/feed_main.svg",
        "/assets/feed/feed_main.svg",
        "/assets/feed/feed_main.svg",
      ],
      timeAgo: "30분 전",
      likes: 13,
      comments: 14,
      content:
        "소셜 지나간 소비자의 말 한마디에서 다음 캠페인의 방향이 보이니까. 오늘도 브랜드와 사람 사이, 가장 설득력 있는 연결고리를 찾아..",
      tags: ["광고하는사람들", "Freelancer", "AdLife", "DailyInsight"],
    },
  },
  {
    user: {
      name: "우슬희",
      job: "광고 마케터",
      profileImage: "/assets/profile/profileImage.png",
    },
    post: {
      images: ["/assets/feed/feed_main.svg"],
      timeAgo: "30분 전",
      likes: 13,
      comments: 14,
      content:
        "소셜 지나간 소비자의 말 한마디에서 다음 캠페인의 방향이 보이니까. 오늘도 브랜드와 사람 사이, 가장 설득력 있는 연결고리를 찾아..",
      tags: ["광고하는사람들", "Freelancer", "AdLife", "DailyInsight"],
    },
  },
  {
    user: {
      name: "우슬희",
      job: "광고 마케터",
      profileImage: "/assets/profile/profileImage.png",
    },
    post: {
      images: ["/assets/feed/feed_main.svg"],
      timeAgo: "30분 전",
      likes: 13,
      comments: 14,
      content:
        "소셜 지나간 소비자의 말 한마디에서 다음 캠페인의 방향이 보이니까. 오늘도 브랜드와 사람 사이, 가장 설득력 있는 연결고리를 찾아..",
      tags: ["광고하는사람들", "Freelancer", "AdLife", "DailyInsight"],
    },
  },
];

function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BottomNavContainer>
      {/* 🧷 고정 헤더 삽입 */}
      <FixedHeader />
      <div className="pt-[66px] pb-[89px] px-[10px] bg-ct-white min-h-screen flex flex-col gap-6">
        {isLoading
          ? Array.from({ length: dummyFeed.length }).map((_, idx) => (
              <FeedCardSkeleton key={`skeleton-${idx}`} />
            ))
          : dummyFeed.map((item, idx) => (
              <FeedCard key={idx} user={item.user} post={item.post} />
            ))}{" "}
      </div>
    </BottomNavContainer>
  );
}

export default FeedPage;
