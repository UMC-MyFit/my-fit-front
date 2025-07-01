import Introduction from "../../components/profile/Introduction";
import { useState } from "react";

function Profile() {
  const [selectedTab, setSelectedTab] = useState<"card" | "feed">("card");

  return (
    <div className="w-full h-full ct-center flex-col mt-10">
      <Introduction />
      <div className="mt-[20px] w-[335px] ">
        <span>성과로 증명하는 디지털 광고 전략가입니다. 🤩</span>
      </div>
      <div className="w-full h-[40px] bg-ct-gray-200 flex mt-[20px] mb-[17px]">
        <div
          className="flex-1 ct-center relative"
          onClick={() => setSelectedTab("card")}
        >
          <span>이력/활동</span>
          {selectedTab === "card" && (
            <div className="absolute bottom-0 left-1/2 w-[74px] h-[3px] bg-ct-main-blue-200 translate-x-[-50%]"></div>
          )}
        </div>
        <div
          className="flex-1 ct-center relative"
          onClick={() => setSelectedTab("feed")}
        >
          <span>피드</span>
          {selectedTab === "feed" && (
            <div className="absolute bottom-0 left-1/2 w-[74px] h-[3px] bg-ct-main-blue-200 translate-x-[-50%]"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
