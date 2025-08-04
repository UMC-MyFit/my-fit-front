import { useNavigate } from "react-router-dom";
import InformationBox from "../InformationBox";
import { useCoffeeChat } from "../../../contexts/coffeeChatContext";
import { useModal } from "../../../contexts/ui/modalContext";
import { useCoffeeChatModal } from "../../../contexts/CoffeeChatModalContext";
import { formatDateWithDay } from "../../../utils/format";
import {
  useGetCoffeeChatPreviewQuery,
  useUpdateCoffeeChatMutation,
} from "../../../hooks/chatting/coffeechat";

function EditConfirmedModal({ roomId }: { roomId: number }) {
  const nav = useNavigate();
  const { setIsModalOpen } = useModal();
  const { selectedTitle, selectedDate, selectedTime, selectedPlace } =
    useCoffeeChat();
  const { requestStatus } = useCoffeeChatModal();
  const numericRoomId = Number(roomId);

  const formattedDate = selectedDate
    ? formatDateWithDay(
        selectedDate.year,
        selectedDate.month,
        selectedDate.date
      )
    : "";

  const { data } = useGetCoffeeChatPreviewQuery(numericRoomId);
  const { mutate: editCoffeeChat } = useUpdateCoffeeChatMutation(numericRoomId);

  function toISOString(
    timeStr: string,
    dateObj: { year: number; month: number; date: number }
  ): string {
    const [period, time] = timeStr.split(" ");
    let [hour, minute] = time.split(":").map(Number);

    if (period === "PM" && hour < 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    const date = new Date(
      dateObj.year,
      dateObj.month - 1,
      dateObj.date,
      hour,
      minute,
      0
    );

    return date.toISOString();
  }

  if (!selectedDate) return null;
  const scheduledAt = toISOString(selectedTime, selectedDate);

  return (
    <div className="w-full h-[498px] rounded-[15px] bg-ct-white flex flex-col ct-center">
      <img
        src="/assets/chatting/coffechatlogo.svg"
        alt="커피챗 로고"
        className="w-[80.53px] h-[80.53px]"
      />
      <span className="text-h2 text-ct-black-200 mt-[4.24px]">
        {selectedTitle}
      </span>

      <div className="mt-[21px] flex">
        <img
          src={data?.result.participants[0]?.profile_img}
          alt="senderprofile"
          className="w-[61px] h-[61px] rounded-full"
        />
        <img
          src={data?.result.participants[1]?.profile_img}
          alt="receiverprofile"
          className="w-[61px] h-[61px] rounded-full"
        />
      </div>

      <div className="mt-[25px] relative">
        <InformationBox
          date={formattedDate}
          time={selectedTime}
          place={selectedPlace}
        />

        {requestStatus === "PENDING" ? (
          <img
            src="/assets/chatting/disablecheck.svg"
            alt="비활성 체크"
            className="absolute top-[10px] right-[10px]"
          />
        ) : (
          <img
            src="/assets/chatting/check.svg"
            alt="활성화 체크"
            className="absolute top-[10px] right-[10px]"
          />
        )}
      </div>

      <button
        className="mt-[26px] w-[168px] h-[42px] rounded-[100px] border border-ct-main-blue-200 text-sub1 bg-ct-main-blue-200 text-ct-white"
        onClick={() => {
          editCoffeeChat(
            {
              title: selectedTitle,
              scheduled_at: scheduledAt,
              place: selectedPlace,
            },
            {
              onSuccess: () => {
                // 메시지는 소켓을 통해 자동 수신됨
                nav(`/chatting/${roomId}`);
                setIsModalOpen(false);
              },
              onError: (err) => {
                console.error("커피챗 수정 실패", err);
              },
            }
          );
        }}
      >
        변경 완료
      </button>

      <button
        className="mt-[20px] w-[70px] h-[23px] border-b border-ct-gray-300 text-sub1 text-ct-gray-300"
        onClick={() => setIsModalOpen(false)}
      >
        다시 수정
      </button>
    </div>
  );
}

export default EditConfirmedModal;
