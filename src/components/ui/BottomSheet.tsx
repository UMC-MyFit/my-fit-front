import { useRef } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

function BottomSheet({ isOpen, setIsOpen, children }: BottomSheetProps) {
  const bottomSheetRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (
      bottomSheetRef.current &&
      !bottomSheetRef.current.contains(e.target as Node)
    ) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-ct-black-100/50 z-[9999]"
      onClick={handleOutsideClick}
    >
      <div
        ref={bottomSheetRef}
        className="fixed bottom-0 left-0 right-0 min-h-[400px] rounded-t-[30px] bg-ct-white ct-center px-[30px] py-[45px]"
      >
        {children}
      </div>
    </div>
  );
}

export default BottomSheet;
