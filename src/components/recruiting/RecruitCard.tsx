interface RecruitCardProps {
  company: string;
  deadline: string;
  title: string;
  tag?: string;
}
function RecruitCard() {
  return (
    <div className="w-[360px] h-[123px] rounded-[10px] border border-ct-gray-200">
      <div className="flex justify-between items-center">
        <div className="w-[19.52px] h-[19.52px] bg-[#d9d9d9]"></div>
      </div>
    </div>
  );
}
export default RecruitCard;
