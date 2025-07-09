import { createContext, ReactNode, useContext, useState } from "react";
import { CalendarDateData } from "../utils/date";

interface CoffeeChatContextType {
  selectedDate: CalendarDateData;
  setSelectedDate: React.Dispatch<React.SetStateAction<CalendarDateData>>;
}

const CoffeeChatContext = createContext<CoffeeChatContextType | undefined>(
  undefined
);

export const CoffeeChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<CalendarDateData>(null);

  return (
    <CoffeeChatContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </CoffeeChatContext.Provider>
  );
};

export const useCoffeeChat = (): CoffeeChatContextType => {
  const context = useContext(CoffeeChatContext);

  if (!context) {
    throw new Error("useCoffeeChat must be used within a CoffeeChatProvider");
  }

  return context;
};
