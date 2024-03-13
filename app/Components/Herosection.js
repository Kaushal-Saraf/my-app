import Frame from "./Frame";
import Illustration from "./Illustration";
const Herosection = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between py-[66.82px] px-[100.23px]">
        <Frame />
        <Illustration />
      </div>
      <img className = "mx-auto py-[5.57px]" src="/dots.svg" alt="Hello" />
    </div>
  );
};

export default Herosection;
