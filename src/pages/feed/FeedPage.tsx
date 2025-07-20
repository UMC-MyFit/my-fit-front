import { useEffect, useState } from "react";
import FeedCard from "../../components/feed/FeedCard";
import FixedHeader from "../../components/feed/FixedHeader";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import FeedCardSkeleton from "../../components/skeletons/feed/FeedCardSkeleton";
<<<<<<< HEAD
<<<<<<< HEAD
import { mockFeeds } from "../../mocks/feed";
import { mockComments } from "../../mocks/comments";
import CommentModal from "../../components/feed/CommentModal";
import { motion, AnimatePresence } from "framer-motion";
import getTimeAgo from "../../utils/timeAgo";

export default function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePostId, setActivePostId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

=======

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
=======
import CommentBottomSheet from "../../components/common/CommentBottomSheet";
import CommentList from "../../components/feed/CommentList";
import { mockComments } from "../../mocks/comments";
import { mockFeeds } from "../../mocks/feed";
import CommentInput from "../../components/feed/CommentInput";
>>>>>>> 8f0f1a9 (before-rebase)

function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

<<<<<<< HEAD
>>>>>>> 49e25d2 (feat:feed-skeleton-ui)
  return (
    <BottomNavContainer showBottomNav={!activePostId}>
      <FixedHeader />
      <div className="pt-[66px] pb-[89px] px-[10px] bg-ct-white min-h-screen flex flex-col gap-6">
        {isLoading
<<<<<<< HEAD
          ? mockFeeds.map((_, idx) => <FeedCardSkeleton key={idx} />)
          : mockFeeds.map((feed) => (
              <FeedCard
                key={feed.feed_id}
                user={{
                  name: feed.user.name,
                  job: feed.user.sector,
                  profileImage: feed.user.profile_img,
                }}
                post={{
                  images: feed.images,
                  timeAgo: getTimeAgo(feed.created_at),
                  likes: feed.heart,
                  comments: feed.comment_count,
                  content: feed.feed_text,
                  tags: feed.hashtags.map((tag) => tag.replace("#", "")),
                }}
                onCommentClick={() => setActivePostId(feed.feed_id.toString())}
              />
            ))}
=======
          ? Array.from({ length: dummyFeed.length }).map((_, idx) => (
              <FeedCardSkeleton key={`skeleton-${idx}`} />
            ))
          : dummyFeed.map((item, idx) => (
              <FeedCard key={idx} user={item.user} post={item.post} />
            ))}{" "}
>>>>>>> 49e25d2 (feat:feed-skeleton-ui)
=======
  const handleSubmit = (text: string) => {
    console.log("댓글 작성:", text);
  };

  return (
    <BottomNavContainer showBottomNav={!isBottomSheetOpen}>
      <FixedHeader />
      <div className="pt-[66px] pb-[89px] px-[10px] bg-ct-white min-h-screen flex flex-col gap-6">
        {isLoading
          ? Array.from({ length: mockFeeds.length }).map((_, idx) => (
              <FeedCardSkeleton key={`skeleton-${idx}`} />
            ))
          : mockFeeds.map((feed) => (
              <FeedCard
                key={feed.feed_id}
                user={{
                  name: feed.user.name,
                  job: feed.user.sector,
                  profileImage: feed.user.profile_img,
                }}
                post={{
                  images: feed.images,
                  timeAgo: feed.created_at,
                  likes: feed.heart,
                  comments: feed.comment_count,
                  content: feed.feed_text,
                  tags: feed.hashtags.map((tag) => tag.replace("#", "")),
                }}
                onCommentClick={() => setIsBottomSheetOpen(true)}
              />
            ))}

        {/* 댓글 바텀시트 */}
        {isBottomSheetOpen && (
          <CommentBottomSheet
            isOpen={isBottomSheetOpen}
            onClose={() => setIsBottomSheetOpen(false)}
          >
            <div className="flex flex-col h-full">
              {/* 댓글 목록 */}
              <div className="flex-1 overflow-y-auto">
                <CommentList comments={mockComments} />
              </div>

              {/* 고정 입력창 + 버튼 */}
              <div className="sticky bottom-0 bg-white px-4 pt-2 pb-4 border-t border-gray-200">
                <div className="flex gap-2 mb-2">
                  <button className="flex-1 border rounded-full py-2 px-4 text-sm font-semibold">
                    🧳 함께 일 해보고싶어요!
                  </button>
                  <button className="flex-1 border rounded-full py-2 px-4 text-sm font-semibold">
                    ⏱ 비슷한 루틴을 원해요!
                  </button>
                </div>
                <CommentInput onSubmit={handleSubmit} />
              </div>
            </div>
          </CommentBottomSheet>
        )}
>>>>>>> 8f0f1a9 (before-rebase)
      </div>

      <AnimatePresence>
        {activePostId && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePostId(null)}
            />
            <CommentModal
              postId={activePostId}
              comments={mockComments}
              onClose={() => setActivePostId(null)}
            />
          </>
        )}
      </AnimatePresence>
    </BottomNavContainer>
  );
}
<<<<<<< HEAD
=======
export default FeedPage;
>>>>>>> 8f0f1a9 (before-rebase)
