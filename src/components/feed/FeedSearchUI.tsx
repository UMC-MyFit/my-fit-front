import { useState } from "react";

function FeedSearchUI() {
  const [searchText, setSearchText] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = () => {
    if (searchText.trim()) {
      setSearchHistory((prev) => [searchText, ...prev]);
      setSearchText("");
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="flex flex-col gap-[19px] px-[22px] pt-[30px] ">
      {" "}
      {/* Safe area + BottomNav spacing 고려 */}
      {/* 검색 입력 */}
      <div className="border-b border-ct-gray-300 flex items-center px-1 py-2">
        <input
          type="text"
          placeholder="키워드를 검색해보세요!"
          className="flex-1 bg-transparent placeholder-ct-gray-200 text-sub2 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch} className="text-gray-500 px-2">
          <img src="/public/assets/feed/searchfeed.svg" alt="검색 아이콘" />
        </button>
      </div>
      {/* 검색 기록 */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sub2 text-gray-500">검색기록</span>
        <button className="text-sub2 text-gray-400" onClick={clearHistory}>
          전체삭제
        </button>
      </div>
      {/* 검색 기록 리스트 */}
      <ul className=" text-ct-gray-300 space-y-2">
        {searchHistory.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeedSearchUI;
