import Frame from "./Frame";
import Illustration from "./Illustration";
const Herosection = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="flex flex-wrap justify-evenly py-[66.82px] px-[100.23px] ">
        <Frame />
        <Illustration />
      </div>
      <img className = "mx-auto py-[5.57px]" src="/dots.svg" alt="Hello" />
    </div>
  );
};

export default Herosection;
