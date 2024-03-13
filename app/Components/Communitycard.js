const Communitycard = ({ imageUrl, text1, text2 }) => {
  return (
    <div className="w-[208.12px] h-[191.6px] flex flex-col px-[16.71px] py-[22.27px] justify-center items-center">
        <img
            className="w-[45.24px] h-[38.98px] object-cover"
            src={imageUrl}
            alt="Image"
        />
      <div className="text-center text-[19.49px] font-inter font-bold">{text1}</div>
      <div className="text-center font-inter text-[9.74px]">{text2}</div>
    </div>
  );
};

export default Communitycard;
