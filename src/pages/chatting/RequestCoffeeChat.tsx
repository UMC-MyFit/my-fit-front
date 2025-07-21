import Calendar from "../../components/chatting/Calendar";
import TimePicker from "../../components/chatting/TimePicker";
import PlacePicker from "../../components/chatting/PlacePicker";
import TopBarContainer from "../../components/common/TopBarContainer";
import { useModal } from "../../contexts/ui/modalContext";
import Modal from "../../components/ui/Modal";
import RequestModal from "../../components/chatting/Modal/RequestModal";
<<<<<<< HEAD
<<<<<<< HEAD
import { useCoffeeChatModal } from "../../contexts/CoffeeChatModalContext";
import EditConfirmedModal from "../../components/chatting/Modal/EditConfirmedModal";
=======
>>>>>>> 351c1c4 (rebase)
=======
import { useCoffeeChatModal } from "../../contexts/CoffeeChatModalContext";
import EditConfirmedModal from "../../components/chatting/Modal/EditConfirmedModal";
>>>>>>> cb5831e (feat:naigate 연결)

const TopBarContent = () => {
  return <span className="text-h2 text-ct-black-100">커피챗 요청</span>;
};

function RequestCoffeeChat() {
  const { setIsModalOpen } = useModal();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cb5831e (feat:naigate 연결)
  const { editMode, modalType, setModalType } = useCoffeeChatModal();
  const handleClick = () => {
    if (editMode) {
      setModalType("editConfirm");
    } else setModalType("request");
    setIsModalOpen(true);
  };
  const label = editMode ? "수정하기" : "요청하기";
<<<<<<< HEAD
=======
>>>>>>> 351c1c4 (rebase)
=======
>>>>>>> cb5831e (feat:naigate 연결)
  return (
    <TopBarContainer TopBarContent={<TopBarContent />}>
      <div className="w-full h-auto ct-center flex-col">
        <Calendar />
        <TimePicker />
        <PlacePicker />
        <button
          className="mb-[57px] w-[168px] h-[42px] rounded-[100px] border-[1px] border-ct-main-blue-200 ct-center text-ct-black-100 text-sub1"
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={handleClick}
        >
          {label}
        </button>
      </div>
      <Modal>
        {modalType === "request" && <RequestModal />}
        {modalType === "editConfirm" && <EditConfirmedModal />}
=======
          onClick={() => setIsModalOpen(true)}
=======
          onClick={handleClick}
>>>>>>> cb5831e (feat:naigate 연결)
        >
          {label}
        </button>
      </div>
      <Modal>
<<<<<<< HEAD
        <RequestModal />
>>>>>>> 351c1c4 (rebase)
=======
        {modalType === "request" && <RequestModal />}
        {modalType === "editConfirm" && <EditConfirmedModal />}
>>>>>>> cb5831e (feat:naigate 연결)
      </Modal>
    </TopBarContainer>
  );
}

export default RequestCoffeeChat;
