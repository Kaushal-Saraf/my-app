const Communityudatecards = ({ imageUrl, text1 }) => {
  return (
    <div className="w-[256.16px] h-[255.8px] flex-col justify-center items-center align-middle">
      <img className="w-[256.15px] h-[199.08px] z-0 relative " src={imageUrl} alt="Image" />
      <div className="w-[220.65px] px-[11.14px] mx-auto relative z-10 bg-[#F5F7FA] rounded-lg shadow-md">
        <div className="text-center m-[5.57px] mt-[-69px] pt-[11.14px] text-[13.92px] text-[#717171] font-inter font-semibold">
          {text1}
        </div>
        <div className="flex m-[5.57px] p-[5.57px] justify-center font-inter text-[#4CAF4F] font-semibold text-[13.92px]">
          Read more <img src="/customerarrow.svg" alt="hello" />
        </div>
      </div>
    </div>
  );
}

export default Communityudatecards
