const Stayuptodate = () => {
  return (
    <div className="fex-col w-[177.5px] my-[20.88px]">
      <div className="mb-[16.17px] text-white font-inter text-semibold text-[13.92px]">
        Stay up to date
      </div>
      <div className="flex">
        <input
          type="email"
          name="stay_updates"
          className="w-[177.5px] h-[27.84px] bg-white bg-opacity-20 rounded px-[8.35px] text-[#D9DBE1] font-inter text-[9.74px] placeholder:text-[#D9DBE1]"
          placeholder="Your email address"
        ></input>
        <button className="ml-[-22.4px]">
          <img src="/sendmail.svg" alt="sendmail" />
        </button>
      </div>
    </div>
  );
}

export default Stayuptodate
