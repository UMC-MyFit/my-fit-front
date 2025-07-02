import TopBar from "../../components/common/TopBar";

function SelectMembers() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[375px] h-[812px] rounded-[15px] ">
        <TopBar title="회원가입" />
        <div className="pt-[66px]">{/* 콘텐츠 */}</div>
      </div>
    </div>
  );
}

export default SelectMembers;
