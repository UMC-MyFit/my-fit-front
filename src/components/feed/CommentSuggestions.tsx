<<<<<<< HEAD
import { useRef } from "react";

interface Suggestion {
  icon: string;
=======
interface Suggestion {
  icon: string; // 이미지 경로
>>>>>>> 8f0f1a9 (before-rebase)
  label: string;
}

const SUGGESTIONS: Suggestion[] = [
  { icon: "/assets/feed/work.svg", label: "함께 일 해보고싶어요!" },
<<<<<<< HEAD
  { icon: "/assets/feed/routine.svg", label: "비슷한 루틴을 갖고있어요!" },
  { icon: "/assets/feed/curious.svg", label: "더 많은 활동이 궁금해요!" },
  { icon: "/assets/feed/shake.svg", label: "함께 활동을 만들고 싶어요!" },
  { icon: "/assets/feed/grow.svg", label: "동기부여가 되었어요!" },
];

interface CommentSuggestionsProps {
  onSelect: (label: string) => void;
}

function CommentSuggestions({ onSelect }: CommentSuggestionsProps) {
  const isDragging = useRef(false);

  return (
    <div
      className="-mx-4 px-4 overflow-x-auto scrollbar-hide"
      style={{
        touchAction: "pan-x",
        WebkitOverflowScrolling: "touch",
        pointerEvents: "auto",
        overscrollBehaviorX: "contain", // ✅ 핵심
      }}
    >
      <div className="flex gap-2 w-max whitespace-nowrap">
        {SUGGESTIONS.map((sug) => (
          <div
            key={sug.label}
            role="button"
            tabIndex={0}
            onPointerDown={() => (isDragging.current = false)}
            onPointerMove={() => (isDragging.current = true)}
            onPointerUp={() => {
              if (!isDragging.current) {
                onSelect(sug.label);
              }
            }}
            className="border border-blue-500 rounded-full py-2 px-4 text-sm font-semibold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition select-none"
          >
            <img src={sug.icon} alt={sug.label} className="w-4 h-4" />
            <span>{sug.label}</span>
          </div>
=======
  {
    icon: "/assets/feed/routine.svg",
    label: "비슷한 루틴을 갖고있어요!",
  },
  {
    icon: "/assets/feed/curious.svg",
    label: "더 많은 활동이 궁금해요!",
  },
  {
    icon: "/assets/feed/shake.svg",
    label: "함께 활동을 만들고 싶어요!",
  },
  { icon: "/assets/feed/grow.svg", label: "동기부여가 되었어요!" },
];

function CommentSuggestions() {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-2 w-max">
        {SUGGESTIONS.map((sug, idx) => (
          <button
            key={idx}
            className="whitespace-nowrap border border-blue-500 rounded-full py-2 px-4 text-sm font-semibold flex items-center gap-2"
          >
            <img src={sug.icon} alt={sug.label} className="w-4 h-4" />
            <span>{sug.label}</span>
          </button>
>>>>>>> 8f0f1a9 (before-rebase)
        ))}
      </div>
    </div>
  );
}

export default CommentSuggestions;
