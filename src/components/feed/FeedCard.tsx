import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

interface User {
  name: string;
  profileImage: string;
  job: string;
}

interface Post {
  images: string[];
  timeAgo: string;
  likes: number;
  comments: number;
  content: string;
  tags: string[];
}

function FeedTagContainer({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1 text-ct-main-blue-100 text-body2">
      {tags.map((tag, idx) => (
        <span key={idx}>#{tag}</span>
      ))}
    </div>
  );
}

function FeedCard({ user, post }: { user: User; post: Post }) {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setIsReady(true);
    }
  }, [paginationRef]);

  return (
    <div className="w-full bg-white rounded-[10px] p-[16px] flex flex-col gap-[12px]">
      {/* 사용자 정보 */}
      <div className="flex items-center gap-3">
        <img
          src={user.profileImage}
          alt="프로필 이미지"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sub1 text-ct-black-100">{user.name}</span>
          <span className="text-sub2 text-ct-blue-gray-100">{user.job}</span>
        </div>
      </div>

      {/* 피드 이미지 (Swiper) */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        className="w-full h-[360px]"
      >
        {post.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`피드 이미지 ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full h-[12px] relative">
        <div
          ref={paginationRef}
          className="absolute left-1/2 -translate-x-1/2"
        />
      </div>

      {/* 좋아요 / 댓글 */}
      <div className="flex justify-between items-center">
        <span className="text-sub2 text-ct-gray-200">{post.timeAgo}</span>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <img
              src="/assets/profile/heart.svg"
              alt="좋아요"
              className="w-5 h-5"
            />
            <span className="text-body2 text-ct-black-300">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="/assets/profile/chat_white.svg"
              alt="댓글"
              className="w-5 h-5"
            />
            <span className="text-body2 text-ct-black-300">
              {post.comments}
            </span>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <p className="text-body2 text-ct-black-300">{post.content}</p>

      {/* 해시태그 */}
      <FeedTagContainer tags={post.tags} />
    </div>
  );
}

export default FeedCard;
