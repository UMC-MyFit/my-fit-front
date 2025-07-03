import FeedTagContainer from "./FeedTagContainer";

const imgList = [
  "/assets/profile/feed.jpg",
  "/assets/profile/profileImage.png",
  "/assets/profile/feed.jpg",
];

function DetailFeedItem() {
  return (
    <div className="w-full h-auto bg-ct-white rounded-[10px] p-[16px] flex flex-col gap-[10px] items-center">
      <div className="w-full h-[30px] px-[5px] py-[14px] flex items-center justify-between">
        <span className="text-ct-main-blue-100 text-body1">활동 카드 1</span>
        <img src="/assets/profile/settingIcon.svg" alt="설정" />
      </div>
      {imgList.map((img, index) => (
        <img
          key={index}
          className="w-[353px] h-[359px] rounded-[5px] object-cover"
          src={img}
          alt="활동 카드 이미지"
        />
      ))}
      <FeedTagContainer />
    </div>
  );
}

export default DetailFeedItem;
