import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import FeedCard from "../../components/feed/FeedCard";
import FixedHeader from "../../components/feed/FixedHeader";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import FeedCardSkeleton from "../../components/skeletons/feed/FeedCardSkeleton";
import { getFeedsWithCursor } from "../../apis/feed";
import { mockComments } from "../../mocks/comments";
import CommentModal from "../../components/feed/CommentModal";
import { motion, AnimatePresence } from "framer-motion";
import getTimeAgo from "../../utils/timeAgo";

export default function FeedPage() {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['feeds'],
    queryFn: ({ pageParam }) => getFeedsWithCursor(pageParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => 
      lastPage.has_next ? lastPage.next_cursor : undefined,
  });

  const allFeeds = data?.pages.flatMap(page => page.feeds) || [];

  return (
    <BottomNavContainer showBottomNav={!activePostId}>
      <FixedHeader />
      <div className="pt-[66px] pb-[89px] px-[10px] bg-ct-white min-h-screen flex flex-col gap-6">
        {isLoading
          ? Array(5).fill(0).map((_, idx) => <FeedCardSkeleton key={idx} />)
          : allFeeds.map((feed) => (
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
        
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="py-3 text-ct-main-blue font-medium"
          >
            {isFetchingNextPage ? "로딩 중..." : "더보기"}
          </button>
        )}

        {error && (
          <div className="text-center py-4 text-red-500">
            피드를 불러오는데 실패했습니다.
          </div>
        )}
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
