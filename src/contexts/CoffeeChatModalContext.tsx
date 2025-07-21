import { createContext, ReactNode, useContext, useState } from "react";

type ModalType =
  | "none"
  | "request"
  | "waiting"
  | "confirm"
  | "edit"
  | "editConfirm";

type RequestStatus = "none" | "requested" | "accepted" | "edited" | "rejected";

interface CoffeeChatModalContextType {
  modalType: ModalType;
  setModalType: (type: ModalType) => void;

  requestStatus: RequestStatus;
  setRequestStatus: (type: RequestStatus) => void;
<<<<<<< HEAD
<<<<<<< HEAD

  editMode: boolean;
  setEditMode: (val: boolean) => void;
=======
>>>>>>> 351c1c4 (rebase)
=======

  editMode: boolean;
  setEditMode: (val: boolean) => void;
>>>>>>> cb5831e (feat:naigate 연결)
}

const CoffeeChatModalContext = createContext<
  CoffeeChatModalContextType | undefined
>(undefined);

export const CoffeeChatModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [modalType, setModalType] = useState<ModalType>("none");
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("none");
<<<<<<< HEAD
<<<<<<< HEAD
  const [editMode, setEditMode] = useState<boolean>(false);
=======
>>>>>>> 351c1c4 (rebase)
=======
  const [editMode, setEditMode] = useState<boolean>(false);
>>>>>>> cb5831e (feat:naigate 연결)

  return (
    <CoffeeChatModalContext.Provider
      value={{
        modalType,
        setModalType,
        requestStatus,
        setRequestStatus,
<<<<<<< HEAD
<<<<<<< HEAD
        editMode,
        setEditMode,
=======
>>>>>>> 351c1c4 (rebase)
=======
        editMode,
        setEditMode,
>>>>>>> cb5831e (feat:naigate 연결)
      }}
    >
      {children}
    </CoffeeChatModalContext.Provider>
  );
};

export const useCoffeeChatModal = () => {
  const context = useContext(CoffeeChatModalContext);
  if (!context)
    throw new Error(
      "useCoffeeChatModal must be used within CoffeeChatModalProvider"
    );
  return context;
};
