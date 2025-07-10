import { useState } from "react";
import TopBarContainer from "../../components/common/TopBarContainer";
import KeywordCategoryTabs from "../../components/onboarding/KeywordCategoryTabs";
import KeywordSearchInput from "../../components/onboarding/KeywordSearchInput";
import SelectedKeywords from "../../components/onboarding/SelectedKeywords";
import KeywordList from "../../components/onboarding/KeywordList";

function KeywordSelectorPage() {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<
    "프로그래밍" | "디자인" | "데이터 분석" | "마케팅"
  >("프로그래밍");

  const TopBarContent = () => {
    return <span className="text-h2 text-ct-black-200">키워드</span>;
  };

  const handleSelectKeyword = (keyword: string) => {
    if (!selectedKeywords.includes(keyword) && selectedKeywords.length < 5) {
      setSelectedKeywords((prev) => [...prev, keyword]);
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setSelectedKeywords((prev) => prev.filter((k) => k !== keyword));
  };

  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="p-[16px] flex flex-col gap-4">
        <KeywordSearchInput />
        <SelectedKeywords
          keywords={selectedKeywords}
          onRemove={handleRemoveKeyword}
        />
        <KeywordCategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <KeywordList
          category={activeCategory}
          selectedKeywords={selectedKeywords}
          onSelect={handleSelectKeyword}
        />
      </div>
    </TopBarContainer>
  );
}

export default KeywordSelectorPage;
