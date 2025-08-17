# 🏃‍♂️ MyFit - 커리어 네트워킹 플랫폼

<div align="center">

![MyFit Logo](public/assets/onboarding/myfit_logo.svg)

**커리어 성장을 위한 맞춤형 네트워킹 플랫폼**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.11-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)

</div>

## 📖 프로젝트 소개

MyFit은 커리어 성장을 원하는 전문가들을 위한 맞춤형 네트워킹 플랫폼입니다. 개인 프로필 카드, 피드 시스템, 커피챗 매칭, 채팅, 채용 정보 등을 통해 효과적인 네트워킹을 지원합니다.

### ✨ 주요 기능

- 🎯 **개인 프로필 카드**: 전문성과 관심사를 담은 맞춤형 프로필
- 📱 **피드 시스템**: 업계 동향과 인사이트 공유
- ☕ **커피챗 매칭**: 1:1 네트워킹 기회 제공
- 💬 **실시간 채팅**: 소통과 협업을 위한 채팅 시스템
- 🔍 **스마트 검색**: 키워드와 해시태그 기반 검색
- 💼 **채용 정보**: 맞춤형 채용 공고 및 지원
- 🏢 **기업 프로필**: 기업 정보 및 연락처 관리

## 🚀 기술 스택

### Frontend

- **React 19** - 최신 React 기능을 활용한 컴포넌트 기반 아키텍처
- **TypeScript** - 타입 안정성과 개발자 경험 향상
- **Vite** - 빠른 개발 서버와 빌드 도구
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **React Router DOM 7** - 클라이언트 사이드 라우팅

### State Management & Data Fetching

- **React Query (TanStack Query)** - 서버 상태 관리 및 캐싱
- **React Context API** - 전역 상태 관리
- **React Hook Form** - 폼 상태 관리 및 유효성 검사
- **Zod** - 런타임 타입 검증

### UI/UX

- **Framer Motion** - 애니메이션 및 전환 효과
- **React Spring** - 물리 기반 애니메이션
- **Swiper** - 터치 슬라이더 및 캐러셀
- **React Mobile Picker** - 모바일 친화적 선택기

### PWA & Performance

- **Vite PWA Plugin** - Progressive Web App 기능
- **Workbox** - 서비스 워커 및 오프라인 지원
- **Body Scroll Lock** - 모바일 스크롤 제어

### Communication

- **Socket.IO Client** - 실시간 양방향 통신
- **Axios** - HTTP 클라이언트 및 인터셉터

### Cloud & Storage

- **AWS SDK** - S3, Cognito Identity 통합
- **File Upload** - 이미지 및 파일 업로드 지원

## 🏗️ 프로젝트 구조

```
src/
├── apis/                    # API 통신 모듈
│   ├── auth.ts             # 인증 관련 API
│   ├── feed.ts             # 피드 관련 API
│   ├── chatting/           # 채팅 관련 API
│   ├── recruiting/         # 채용 관련 API
│   └── middlewares/        # API 인터셉터
├── components/              # 재사용 가능한 컴포넌트
│   ├── common/             # 공통 컴포넌트
│   ├── feed/               # 피드 관련 컴포넌트
│   ├── chatting/           # 채팅 관련 컴포넌트
│   ├── profile/            # 프로필 관련 컴포넌트
│   ├── recruiting/         # 채용 관련 컴포넌트
│   └── ui/                 # UI 기본 컴포넌트
├── contexts/                # React Context
│   ├── AuthContext.tsx     # 인증 상태 관리
│   ├── UserContext.tsx     # 사용자 정보 관리
│   ├── ChattingContext.tsx # 채팅 상태 관리
│   └── coffeeChatContext.tsx # 커피챗 상태 관리
├── hooks/                   # 커스텀 훅
│   ├── useInfiniteScroll.ts # 무한 스크롤
│   ├── useFeedComments.ts  # 피드 댓글 관리
│   └── useHashtagAnalyze.ts # 해시태그 분석
├── pages/                   # 페이지 컴포넌트
│   ├── feed/               # 피드 페이지
│   ├── chatting/           # 채팅 페이지
│   ├── profile/            # 프로필 페이지
│   ├── recruiting/         # 채용 페이지
│   ├── searching/          # 검색 페이지
│   └── onboarding/         # 온보딩 페이지
├── types/                   # TypeScript 타입 정의
├── utils/                   # 유틸리티 함수
└── validations/             # 폼 유효성 검사 스키마
```

## 🎯 핵심 기능 상세

### 1. 인증 시스템

- 세션 기반 인증 (쿠키)
- 자동 로그아웃 처리
- 공개 페이지 접근 제어

### 2. 피드 시스템

- 무한 스크롤 피드
- 좋아요 및 댓글 기능
- 해시태그 기반 검색
- 이미지 업로드 및 표시

### 3. 채팅 시스템

- 실시간 1:1 채팅
- 커피챗 매칭 및 일정 관리
- 채팅방 목록 및 메시지 히스토리
- 소켓 기반 실시간 통신

### 4. 프로필 관리

- 개인 프로필 카드 생성/편집
- 키워드 태그 시스템
- 기업 프로필 연동
- 이미지 업로드 및 관리

### 5. 채용 시스템

- 채용 공고 등록/조회
- 지원자 매칭
- 북마크 및 구독 기능

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- pnpm (권장) 또는 npm

### 설치 및 실행

```bash
# 저장소 클론
git clone [repository-url]
cd my-fit

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 미리보기
pnpm preview

# 린팅
pnpm lint
```

### 환경 설정

프로젝트 실행을 위해 다음 환경 변수가 필요할 수 있습니다:

```env
# AWS 설정
VITE_AWS_REGION=your-aws-region
VITE_AWS_COGNITO_IDENTITY_POOL_ID=your-identity-pool-id

# API 설정
VITE_API_BASE_URL=your-api-base-url
```

## 📱 PWA 기능

- **오프라인 지원**: 서비스 워커를 통한 오프라인 기능
- **앱 설치**: 홈 화면에 앱으로 설치 가능
- **푸시 알림**: 실시간 알림 지원
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험

## 🎨 디자인 시스템

- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **컴포넌트 기반**: 재사용 가능한 UI 컴포넌트
- **모바일 퍼스트**: 모바일 디바이스에 최적화된 디자인
- **접근성**: 웹 접근성 가이드라인 준수

## 🔧 개발 도구

- **ESLint**: 코드 품질 및 일관성 관리
- **TypeScript**: 정적 타입 검사
- **Vite**: 빠른 개발 환경
- **Hot Module Replacement**: 실시간 코드 변경 반영

## 📊 성능 최적화

- **코드 스플리팅**: 라우트 기반 코드 분할
- **이미지 최적화**: WebP 포맷 및 지연 로딩
- **번들 최적화**: Tree shaking 및 압축
- **캐싱 전략**: React Query를 통한 효율적인 데이터 캐싱

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 [LICENSE](LICENSE) 파일에 명시된 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

<div align="center">

**MyFit과 함께 커리어를 성장시키세요! 🚀**

Made with ❤️ by MyFit Team

</div>
