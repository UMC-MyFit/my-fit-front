interface BottomCTAButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

function BottomCTAButton({
  text,
  onClick,
  disabled = false,
}: BottomCTAButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[62px] rounded-[10px] font-sans text-h2 text-ct-white text-center
        ${
          disabled
            ? "bg-ct-gray-200"
            : "bg-ct-main-blue-100 hover:bg-ct-main-blue-200"
        }
        transition-colors duration-200
      `}
    >
      {text}
    </button>
  );
}

export default BottomCTAButton;
