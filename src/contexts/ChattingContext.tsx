import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import socket from "../libs/socket";
import { ChatMessage } from "../apis/chatting/chatting";

interface ChattingContextType {
  roomId: number | null;
  setRoomId: (id: number | null) => void;
  messages: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
  prependMessages: (msgs: ChatMessage[]) => void;
  clearMessages: () => void;
  replaceMessage: (tempId: number, newMsg: ChatMessage) => void;
  removeMessage: (tempId: number) => void;
}

const ChattingContext = createContext<ChattingContextType | undefined>(
  undefined
);

export const ChattingProvider = ({ children }: { children: ReactNode }) => {
  const [roomId, setRoomId] = useState<number | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const addMessage = (msg: ChatMessage) => {
    setMessages((prev) => [...prev, msg]);
  };

  useEffect(() => {
    if (!roomId) return;
    socket.emit("join", roomId);
    socket.on("receiveMessage", (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const prependMessages = (msgs: ChatMessage[]) => {
    setMessages((prev) => [...msgs, ...prev]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const replaceMessage = (tempId: number, newMsg: ChatMessage) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === tempId ? newMsg : msg))
    );
  };

  const removeMessage = (tempId: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== tempId));
  };

  return (
    <ChattingContext.Provider
      value={{
        roomId,
        setRoomId,
        messages,
        addMessage,
        prependMessages,
        clearMessages,
        replaceMessage,
        removeMessage,
      }}
    >
      {children}
    </ChattingContext.Provider>
  );
};

export const useChatting = () => {
  const context = useContext(ChattingContext);
  if (!context)
    throw new Error("useChatting must be used within ChattingProvider");
  return context;
};
