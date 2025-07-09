import TimeBox from "./TimeBox";

function TimePicker() {
  const morningTimes = ["11:00", "11:30", "12:00", "12:30"];
  const afternoonTimes = [
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "8:00",
    "8:30",
  ];

  return (
    <div className="w-[330px]">
      <div className="mb-[10px]">
        <span className="text-body1 text-ct-gray-400">오전</span>
        <div className="grid grid-cols-5 gap-2 mt-[13px]">
          {morningTimes.map((time, index) => (
            <TimeBox key={index} time={time} isSelected={false} />
          ))}
        </div>
      </div>

      <div>
        <span className="text-body1 text-ct-gray-400">오후</span>
        <div className="grid grid-cols-5 gap-2 mt-[13px]">
          {afternoonTimes.map((time, index) => (
            <TimeBox key={index} time={time} isSelected={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimePicker;
