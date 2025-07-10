import { useState } from "react";

function KeywordInput() {
  const [inputValue, setInputValue] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // space 입력 시 태그로 변환
    if (value.endsWith(" ")) {
      const newKeyword = value.trim();
      if (newKeyword && !keywords.includes(newKeyword) && keywords.length < 5) {
        setKeywords([...keywords, newKeyword]);
      }
      setInputValue("");
    } else {
      setInputValue(value);
    }
  };

  return (
    <div>
      <p className="text-sub1 font-semibold text-ct-black-300">해시태그 추가</p>
      <p className="text-body2 text-ct-gray-200 mt-[2px]">
        최대 5개까지 추가가 가능합니다.
      </p>
      <div className="mt-[8px] flex flex-wrap gap-[8px]">
        {keywords.map((tag) => (
          <span key={tag} className="text-hashtag text-blue-500">
            #{tag}
          </span>
        ))}
      </div>
      {keywords.length < 5 && (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="mt-[10px] w-full border-b border-ct-gray-100 outline-none text-body2"
          placeholder="키워드를 입력해주세요"
        />
      )}
    </div>
  );
}
export default KeywordInput;
