import TopBarContainer from "../../components/common/TopBarContainer";
import ChatMessageList from "../../components/chatting/ChatMessageList";
import ChatInputField from "../../components/chatting/ChatInputField";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "me" | "you";
}

function Chatting() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    const NewMessage: Message = {
      id: Date.now(),
      text,
      sender: "me",
    };
    setMessages((prev) => [...prev, NewMessage]);
  };
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const TopBarContent = () => {
    return (
      <div className="flex flex-col gap-[3px] ct-center">
        <img
          src="/assets/chatting/manprofile.svg"
          alt="남성프로필"
          className="w-[49px] h-[49px]"
        />
        <span className="text-h2 text-ct-black-100">임호현</span>
        <img
          src="/assets/chatting/calender.svg"
          alt="캘린더 아이콘"
          className="absolute right-[28px] "
        />
      </div>
    );
  };
  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div>
        <ChatMessageList messages={messages} bottomRef={bottomRef} />
        <ChatInputField onSend={handleSend} />
      </div>
    </TopBarContainer>
  );
}
export default Chatting;
