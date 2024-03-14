const Calender = () => {
  return (
    <div className="flex flex-wrap my-[11.27px] px-[100.23px] justify-evenly items-center ">
      <img
        src="/calender.svg"
        alt="hello"
        className="w-[307.66px] h-[301.4px] object-cover"
      />
      <div className="flex-col  w-[460.1px]">
        <p className="font-inter text-[25.06px] font-semibold">
          How to design your site footer like we did
        </p>
        <p className="font-inter text-[9.74px] my-[11.6px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="py-[9.74px] px-[22.27px] bg-[#4CAF4F] text-white rounded-sm font-medium text-[11.14px] font-inter">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Calender;
