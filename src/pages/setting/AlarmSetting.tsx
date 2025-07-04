import TopBar from "../../components/common/TopBar";
import ToggleSwitch from "../../components/setting/ToggleSwitch";

function AlarmSetting() {
  return (
    <div className="flex flex-col">
      <TopBar>
        <span className="text-h2 font-Pretendard text-ct-black-100">
          알림 설정
        </span>
      </TopBar>
      <div className="w-full px-[15px] pt-[126px]">
        <span className="font-Pretendard text-sub1 text-ct-black-100">
          시스템 알림 설정
        </span>
        <div className="mt-[57px] flex gap-[179px]">
          <span className="text-sub1 text-[#100F0F] font-Pretendard">
            PUSH 알림 설정
          </span>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}
export default AlarmSetting;
