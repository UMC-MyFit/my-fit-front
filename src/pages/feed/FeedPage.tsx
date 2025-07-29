import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import FeedCard from "../../components/feed/FeedCard";
import FixedHeader from "../../components/feed/FixedHeader";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import FeedCardSkeleton from "../../components/skeletons/feed/FeedCardSkeleton";
import { getFeedsWithCursor } from "../../apis/feed";
import { FeedResponse } from "../../types/feed/feed";
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
    queryFn: ({ pageParam }: { pageParam: number | undefined }) => 
      getFeedsWithCursor(pageParam),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage: FeedResponse) => 
      lastPage.result.pagination.has_next ? lastPage.result.pagination.next_cursor : undefined,
  });

  const allFeeds = data?.pages.flatMap((page: FeedResponse) => page.result.feeds) || [];

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
                  name: feed.user?.name || "알 수 없음",
                  job: feed.user?.sector || "알 수 없음",
                  profileImage: feed.user?.profile_img || "",
                }}
                post={{
                  images: feed.images || [],
                  timeAgo: getTimeAgo(feed.created_at),
                  likes: feed.heart || 0,
                  comments: feed.comment_count || 0,
                  content: feed.feed_text || "",
                  tags: Array.isArray(feed.hashtags) 
                    ? feed.hashtags.map((tag: string) => tag.replace("#", ""))
                    : [],
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
