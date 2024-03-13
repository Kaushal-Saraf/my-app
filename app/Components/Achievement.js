import Achievementcard from "./Achievementcard";

const Achievement = () => {
  return (
    <div className="my-[11.27px] px-[100.23px] py-[44.55px] bg-[#F5F7FA] flex justify-between align-middle items-center">
      <div className="flex-col  w-[375.88px]">
        <p className="text-[25.06px] font-semibold text-[#4D4D4D] font-inter">
        Helping a local 
        </p>
        <p className="text-[25.06px] font-semibold text-[#4CAF4F] font-inter">
        business reinvent itself
        </p>
        <p className="text-[11.14px] text-[#18191F] font-inter">
        We reached here with our hard work and dedication
        </p>
      </div>
      <div className=" flex-col justify-between w-[375.88px]">
        <div className="flex justify-between my-[27.84px]">
           <Achievementcard imageUrl="/achievement1.svg" text1="2,245,341" text2="Member"/>
           <Achievementcard imageUrl="/achievement2.svg" text1="46,328" text2="Club"/>
        </div>
        <div className="flex justify-between">
           <Achievementcard imageUrl="/achievement3.svg" text1="828,867" text2="Event Bookings"/>
           <Achievementcard imageUrl="/achievement4.svg" text1="1,926,436" text2="Payments"/>
        </div>
      </div>
    </div>
  );
}

export default Achievement
