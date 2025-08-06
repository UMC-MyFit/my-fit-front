import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import { useNavigate } from "react-router-dom";
import PersonalInputField from "../../components/setting/PersonalInputField";
import { useState } from "react";
import { useModal } from "../../contexts/ui/modalContext";
import Modal from "../../components/ui/Modal";
import RegionModal from "../../components/onboarding/RegionModal";
import EmploymentStatusModal from "../../components/onboarding/EmploymentStatusModal";

function TopBarContent() {
  return (
    <div>
      <span className="text-h2 text-ct-black-100">필터링</span>
    </div>
  );
}

function Filter() {
  const navigate = useNavigate();
  const [region, setRegion] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [keyword, setKeyword] = useState<string[]>([]);
  const { isModalOpen, setIsModalOpen } = useModal();
  const [modalType, setModalType] = useState<"region" | "employment" | null>(
    null
  );

  const openModal = (type: "region" | "employment") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <BottomNavContainer>
      <TopBarContainer TopBarContent={<TopBarContent />}>
        <div className="w-full flex flex-col flex-1 items-center justify-between">
          <div className="mt-[50px] ct-center flex-col w-[330px] gap-[20px]">
            <PersonalInputField
              label="주 활동 지역"
              value={region}
              placeholder="'시/도' 를 선택해주세요!"
              onClick={() => openModal("region")}
            />
            <PersonalInputField
              label="구인/구직"
              value={employmentStatus}
              placeholder="구인/구직 상태를 선택해주세요!"
              onClick={() => openModal("employment")}
            />
            <PersonalInputField
              label="키워드"
              value={keyword.join(",")}
              placeholder="최대 3개 ( ,로 구분됩니다. )"
            />
          </div>
          <div
            className="mb-[30px] px-[40px] py-[10px] rounded-[100px] border-[1px] border-ct-main-blue-200"
            onClick={() => navigate("/searching/filter/result")}
          >
            <span className="text-sub1 text-ct-black-200">
              n개의 카드가 검색되었습니다.
            </span>
          </div>
        </div>

        <Modal>
          {isModalOpen && modalType === "region" && (
            <RegionModal onConfirm={(val) => setRegion(val)} />
          )}
          {isModalOpen && modalType === "employment" && (
            <EmploymentStatusModal
              onConfirm={(val) => setEmploymentStatus(val)}
            />
          )}
        </Modal>
      </TopBarContainer>
    </BottomNavContainer>
  );
}

export default Filter;
