import { useEffect, useState } from "react";
import FeedCard from "../../components/feed/FeedCard";
import FixedHeader from "../../components/feed/FixedHeader";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import FeedCardSkeleton from "../../components/skeletons/feed/FeedCardSkeleton";
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

function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
