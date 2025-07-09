function TimeBox({ time, isSelected }: { time: string; isSelected: boolean }) {
  return (
    <div
      className={`w-[60px] h-[37px] rounded-[11px] ct-center ${
        isSelected
          ? "bg-ct-main-blue-200 text-ct-white"
          : "bg-ct-gray-100 text-ct-black-300"
      }`}
    >
      <span className="text-sub3">{time}</span>
    </div>
  );
}

export default TimeBox;
