import TopBarContainer from "../../components/common/TopBarContainer";
import BottomNavContainer from "../../components/layouts/BottomNavContainer";
import { useNavigate } from "react-router-dom";
import PersonalInputField from "../../components/setting/PersonalInputField";
import { useState } from "react";
import { z } from "zod";
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
  const [keywordInput, setKeywordInput] = useState("");
  const [keywordError, setKeywordError] = useState("");

  // Zod schema for keyword validation
  const keywordSchema = z.object({
    keywords: z.array(
      z.string().max(3, "키워드는 최대 3개까지 입력 가능합니다")
    ),
  });

  // Update keywords when input changes
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeywordInput(value);

    // Split by comma and trim whitespace
    const keywords = value
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    // Update keywords state regardless of validation
    setKeyword(keywords);

    // Validate using zod
    const result = keywordSchema.safeParse({ keywords });

    if (!result.success) {
      // Get the first error message
      const firstError =
        result.error.issues[0]?.message || "유효하지 않은 키워드입니다";
      setKeywordError(firstError);
    } else {
      setKeywordError("");
    }
  };

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
            <div className="flex flex-col gap-[11px] w-full mb-[10px]">
              <label className="ml-1 text-sub1 text-ct-black-200">키워드</label>
              <input
                type="text"
                value={keywordInput}
                onChange={handleKeywordChange}
                placeholder="최대 3개 ( ,로 구분됩니다. )"
                className="w-full flex text-body1 placeholder:text-ct-gray-300 text-ct-black-200 font-Pretendard min-h-[44px] rounded-[10px] pl-[26px] bg-ct-gray-100"
              />
              {keywordError && (
                <span className="text-body2 text-ct-red-100 pl-[13px]">
                  {keywordError}
                </span>
              )}
            </div>
            <PersonalInputField
              label="희망 직무를 선택해주세요"
              value={selectedSkillLabel}
              placeholder="희망직무 입력"
              onClick={() =>
                nav("/onboarding/jobpreference", {
                  state: {
                    from: "onboarding",
                    prevData: {
                      region,
                      subRegion,
                      birthDate,
                      employ,
                      academic,
                      nickname,
                      shortIntro,
                      educationLevel,
                    },
                    high_sector: highSector,
                    low_sector: lowSector,
                  },
                })
              }
            />
          </div>
          <div
            className="mb-[30px] px-[40px] py-[10px] rounded-[100px] border-[1px] border-ct-main-blue-200 cursor-pointer"
            onClick={() => {
              // Only navigate if there are no validation errors
              if (!keywordError) {
                console.log("Searching with keywords:", keyword);
                navigate("/searching/filter/result", {
                  state: {
                    keywords: keyword,
                    region,
                    employmentStatus,
                  },
                });
              }
            }}
            style={{
              opacity: keywordError ? 0.6 : 1,
              cursor: keywordError ? "not-allowed" : "pointer",
            }}
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
