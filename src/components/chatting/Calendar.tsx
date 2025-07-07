import { getCalendarData } from "../../utils/date";
import Month from "./Month";

function Calendar() {
  const calendarData = getCalendarData();
  const monthArray = Array.from(calendarData.keys());

  return (
    <div className="w-[330px] ct-center flex-col">
      <div className="w-full h-auto ct-center gap-2">
        <img
          src="/assets/chatting/chevronLeft.svg"
          alt="chevronLeft"
          className="w-[6px] h-[10px]"
        />
        <div>
          <span className="text-sub1 text-ct-black-200">
            {monthArray[monthArray.length - 1]}
          </span>
        </div>
        <img
          src="/assets/chatting/chevronRight.svg"
          alt="chevronRight"
          className="w-[6px] h-[10px]"
        />
      </div>
      <Month data={calendarData.get(monthArray[monthArray.length - 1]) || []} />
    </div>
  );
}

export default Calendar;
