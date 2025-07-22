import { Comment } from "../types/feed/comment";

export const mockComments: Comment[] = [
  {
    id: 101,
    comment_text: "그 연결고리, 혹시 API 엔드포인트로는 안 되겠죠? 😅",
    high_comment_id: null,
    created_at: "2025-07-21T08:22:00Z",
    writer: {
      user_id: 3,
      name: "임호현",
      job: "백엔드 개발자",
      profile_image_url: "/public/assets/feed/network2.svg",
    },
    replies: [],
  },
  {
    id: 100,
    comment_text:
      "브랜드는 결국 사람의 말에서 시작되죠! 오늘도 잘 다녀오세요용 다음에 같이 가요~ ☺️",
    high_comment_id: null,
    created_at: "2025-07-21T07:15:00Z",
    writer: {
      user_id: 7,
      name: "장예슬",
      job: "기획자",
      profile_image_url: "/public/assets/feed/network3.svg",
    },
    replies: [
      {
        id: 202,
        comment_text: "저도 껴주세요 개발자 필요하시잖아요 ㅎㅎㅎ",
        high_comment_id: 100,
        created_at: "2025-07-04T08:20:00Z",
        writer: {
          user_id: 4,
          name: "김태우",
          job: "프론트엔드 개발자",
          profile_image_url: "/public/assets/feed/network4.svg",
        },
      },
      {
        id: 201,
        comment_text: "맞아요! 함께 소통하면서 크는 게 최고죠 🚀",
        high_comment_id: 100,
        created_at: "2025-07-04T08:18:00Z",
        writer: {
          user_id: 5,
          name: "이서연",
          job: "디자이너",
          profile_image_url: "/public/assets/feed/network1.svg",
        },
      },
    ],
  },
  {
    id: 301,
    comment_text: "그 연결고리, 혹시 API 엔드포인트로는 안 되겠죠? 😅",
    high_comment_id: null,
    created_at: "2025-07-21T08:22:00Z",
    writer: {
      user_id: 3,
      name: "임호현",
      job: "백엔드 개발자",
      profile_image_url: "/public/assets/feed/network2.svg",
    },
    replies: [],
  },
  {
    id: 401,
    comment_text: "그 연결고리, 혹시 API 엔드포인트로는 안 되겠죠? 😅",
    high_comment_id: null,
    created_at: "2025-07-21T08:22:00Z",
    writer: {
      user_id: 3,
      name: "임호현",
      job: "백엔드 개발자",
      profile_image_url: "/public/assets/feed/network2.svg",
    },
    replies: [],
  },
];