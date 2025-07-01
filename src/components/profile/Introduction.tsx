function Introduction() {
  return (
    <div className="w-[335px]">
      <img
        src="/assets/profile/setting.svg"
        alt="설정"
        className="w-[20px] h-[20px]"
      />
      <div className="w-full flex justify-between items-center mt-4 h-[80px]">
        <img
          src="/assets/profile/profileImage.png"
          alt="프로필 이미지"
          className="w-[70px] h-[70px] rounded-full"
        />
        <div className="w-[160px] h-full flex flex-col justify-between">
          <div className="h-[20px]">
            <span className="text-body2">장예솔 / 30</span>
          </div>
          <div className="flex flex-col h-[50px]">
            <span className="text-body3">수원</span>
            <span className="text-body3">광고마케터</span>
            <span className="text-body3">광운대학교 4학년 2학기 재학</span>
          </div>
        </div>
        <div className="w-[80px] h-full flex flex-col justify-between">
          <div className="w-full h-[30px] rounded-md ct-center bg-ct-main-blue-200">
            <span className="text-ct-white">구직중</span>
          </div>
          <div className="w-full h-[40px] flex flex-col justify-between">
            <div className="flex justify-end items-center gap-2 h-[20px]">
              <img
                src="/assets/profile/networkingIcon.svg"
                alt="네트워킹"
                className="w-[20px] h-[20px]"
              />
              <span>70</span>
            </div>
            <div className="flex items-center gap-2 justify-end h-[16px]">
              <img
                src="/assets/profile/follow.svg"
                alt="팔로우"
                className="w-[11px] h-[11px]"
              />
              <span>177</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
