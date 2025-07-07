function FixedHeader() {
  return (
    <div className="fixed top-0 left-0 w-full h-[66px] bg-white z-50 flex items-center justify-between px-4 shadow">
      <img
        src="/assets/common/headerLogo.svg"
        alt="MyFit"
        className="w-[68px]"
      />
      <div className="flex gap-4">
        <img src="/icons/search.svg" />
        <img src="/icons/plus.svg" />
        <img src="/icons/notification.svg" />
      </div>
    </div>
  );
}

export default FixedHeader;
