import { useEffect, useRef, useState } from "react";
import { useChatting } from "../../contexts/ChattingContext";
import { useCoffeeChatModal } from "../../contexts/CoffeeChatModalContext";
import { useUser } from "../../contexts/UserContext";
import { ChatBoxStatus } from "../../types/chatting/ChatBoxStatus";
import MessageBubble from "./MessageBubble";
import RequestCoffeeChatBox from "./RequestCoffechatBox";
import { useChatMessageInfiniteQuery } from "../../hooks/chatting/chatting";

interface Props {
  bottomRef?: React.RefObject<HTMLDivElement | null>;
}

function ChatMessageList({ bottomRef }: Props) {
  const { messages, roomId } = useChatting();
  const { requestStatus } = useCoffeeChatModal();
  const { myId, name } = useUser();
  const [statusMap, setStatusMap] = useState<Record<number, ChatBoxStatus>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useChatMessageInfiniteQuery(roomId);
  const LastCoffeeChatIndex = messages
    .map((m) => m.type)
    .lastIndexOf("COFFEECHAT");

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el || isFetchingNextPage || !hasNextPage) return;

    if (el.scrollTop < 100) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isFetchingNextPage, hasNextPage]);

  return (
    <div
      className="flex-1 flex flex-col overflow-y-auto overscroll-contain px-4 pb-[80px]"
      ref={containerRef}
    >
      {messages.length > 0 && (
        <div className="flex flex-col items-center gap-[6px] pt-[46px]">
          <span className="text-body2 text-ct-gray-300">
            2025.05.15 (월) PM 3:00
          </span>
          <span className="text-body2 text-ct-gray-300">
            {name}님께서 대화를 시작하셨습니다.
          </span>
        </div>
      )}

      {messages.map((msg, idx) => {
        const isLastCoffeeChat = idx === LastCoffeeChatIndex;

        if (msg.type === "COFFEECHAT") {
          return (
            <div key={msg.id} className="min-h-[41px] my-[10px]">
              <RequestCoffeeChatBox
                status={statusMap[msg.id] ?? "none"}
                name={name}
                sender="you"
                isLast={isLastCoffeeChat}
              />
            </div>
          );
        }

        const prev = messages[idx - 1];
        const isSameSenderAsPrev = prev?.sender_id === msg.sender_id;
        const marginTop = isSameSenderAsPrev ? "mt-[5px]" : "mt-[20px]";
        const isMyMessage = msg.sender_id === myId;

        return (
          <div key={msg.id} className={`flex flex-col ${marginTop}`}>
            <div
              className={`flex ${
                isMyMessage ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex flex-col gap-[5px]">
                <MessageBubble
                  text={msg.detail_message}
                  sender_id={msg.sender_id}
                />
              </div>
            </div>
          </div>
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
}

export default ChatMessageList;
