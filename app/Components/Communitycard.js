const Card = ({ imageUrl, text1, text2 }) => {
  return (
    <div className="w-[208.12px] h-[191.6px] flex flex-col justify-center items-center">
        <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="Image"
        />
      <div className="text-center">{text1}</div>
      <div className="text-center">{text2}</div>
    </div>
  );
};

export default Card;
