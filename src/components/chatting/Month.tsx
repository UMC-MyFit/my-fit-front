import { CalendarDateData } from "../../utils/date";
import Date from "./Date";

function Month({
  data,
  selectedDate,
  setSelectedDate,
}: {
  data: CalendarDateData[];
  selectedDate: CalendarDateData;
  setSelectedDate: (date: CalendarDateData) => void;
}) {
  const paddedData = [...data];
  const remainder = data.length % 7;

  if (remainder !== 0) {
    const paddingNeeded = 7 - remainder;
    for (let i = 0; i < paddingNeeded; i++) {
      paddedData.push(null);
    }
  }

  return (
    <div className="grid grid-cols-7 w-full">
      {paddedData.map((dateData, index) => (
        <Date
          key={index}
          data={dateData}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </div>
  );
}

export default Month;
