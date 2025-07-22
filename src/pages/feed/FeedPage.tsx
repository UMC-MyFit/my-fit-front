// FeedPage.tsx - 댓글을 모달(바텀시트 스타일)로 구현
import { useEffect, useState } from "react";
import FeedCard from "../../components/feed/FeedCard";
import FixedHeader from "../../components/feed/FixedHeader";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import FeedCardSkeleton from "../../components/skeletons/feed/FeedCardSkeleton";
import { mockFeeds } from "../../mocks/feed";
import { mockComments } from "../../mocks/comments";
import CommentModal from "../../components/feed/CommentModal";
import { motion, AnimatePresence } from "framer-motion";
import getTimeAgo from "../../utils/timeAgo";

function FeedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePostId, setActivePostId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BottomNavContainer showBottomNav={!activePostId}>
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
                  timeAgo: getTimeAgo(feed.created_at),
                  likes: feed.heart,
                  comments: feed.comment_count,
                  content: feed.feed_text,
                  tags: feed.hashtags.map((tag) => tag.replace("#", "")),
                }}
                onCommentClick={() => setActivePostId(feed.feed_id.toString())}
              />
            ))}
      </div>

      {/* 댓글 모달 */}
      <AnimatePresence>
        {activePostId && (
          <>
            {/* 오버레이: 뒷배경 흐림 처리 */}
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

export default FeedPage;
