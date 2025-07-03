import TopBar from "../../components/common/TopBar";

function AlarmSetting() {
  return (
    <div className="flex flex-col">
      <TopBar>
        <span className="text-h2 font-Pretendard text-ct-black-100">
          알림 설정
        </span>
      </TopBar>
      <div className="w-full px-[15px] pt-[60px]">
        <span className="font-Pretendard text-ct-black-100">
          시스템 알림 설정
        </span>
      </div>
    </div>
  );
}
export default AlarmSetting;
