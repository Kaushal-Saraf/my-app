const Achievementcard = ({ imageUrl, text1, text2 }) => {
  return (
    <div className="w-[177.5px] h-[43px] my-[27.84px] flex items-center">
      <img
        className=""
        src={imageUrl}
        alt="Image"
      />
      <div className="flex-col px-[11.7px]">
        <div className="text-[19.49px] font-inter font-bold">
          {text1}
        </div>
        <div className="font-inter text-[11.14px]">
            {text2}
        </div>
      </div>
    </div>
  );
};
export default Achievementcard;
