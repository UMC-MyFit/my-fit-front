import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardItem } from "../../apis/mypageAPI";

function ProfileCardItem({ card }: { card: CardItem }) {
  const [isHighlight, _] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/mypage/card`);
  };

  return (
    <div className="w-[174px] h-[216px] relative" onClick={handleClick}>
      {isHighlight && (
        <img
          src="/assets/profile/bestCard.svg"
          alt="하이라이트"
          className="absolute top-0 left-0"
        />
      )}
      <img
        src={card.card_img}
        alt="카드 이미지"
        className="w-full h-full object-cover rounded-[5px]"
      />
    </div>
  );
}

export default ProfileCardItem;
