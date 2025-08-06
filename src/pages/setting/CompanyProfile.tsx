import { useState } from "react";
import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNav from "../../components/layouts/BottomNav";
import BirthModal from "../../components/onboarding/BirthModal";
import CompanyInputField from "../../components/setting/CompanyInputField";
import Modal from "../../components/ui/Modal";
import { useModal } from "../../contexts/ui/modalContext";
import { useNavigate } from "react-router-dom";

function CompanyProfile() {
  const { setIsModalOpen } = useModal();
  const [company, setCompany] = useState("");
  const [nickName, setNickName] = useState("");
  const [business, setBusiness] = useState("");
  const [birth, setBirth] = useState("");
  const nav = useNavigate();
  const TopBarContent = () => {
    return (
      <div className="flex ct-center">
        <span className="text-h2 font-Pretendard text-ct-black-100">
          프로필
        </span>
        <span
          className="absolute right-[23px] text-sub2 text-ct-gray-300"
          onClick={() => nav("/mypage")}
        >
          완료
        </span>
      </div>
    );
  };
  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="flex flex-col gap-[27px] mt-[21px] items-center">
        <CompanyInputField
          label="회사/팀 이름"
          placeholder="입력해주세요"
          value={company}
          onChange={(val) => setCompany(val)}
        />
        <CompanyInputField
          label="한줄 소개"
          placeholder="40자 이내"
          value={nickName}
          onChange={(val) => setNickName(val)}
          hintDescription="한줄로 팀에 대해 나타내보세요!"
        />
        <CompanyInputField
          label="주 활동 지역"
          value={birth}
          placeholder="'시/도'를 선택해주세요!"
          onClick={() => setIsModalOpen(true)}
        />
        <CompanyInputField
          label="주 활동 세부 지역"
          placeholder="세부 활동 지역을 선택해주세요!"
          value={business}
          onChange={(val) => setBusiness(val)}
        />
      </div>
      <BottomNav />
      <Modal>
        <BirthModal onConfirm={(val) => setBirth(val)} />
      </Modal>
    </TopBarContainer>
  );
}
export default CompanyProfile;
