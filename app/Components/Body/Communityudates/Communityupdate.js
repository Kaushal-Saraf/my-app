import Communityudatecards from "./Communityudatecards";

const Communityupdate = () => {
  return (
    <div className="px-[100.23px] my-[11.74px]">
      <div className="py-[5.57px]">
        <p className="text-[25.06px] text-center font-semibold text-[#4D4D4D] font-inter">
          Caring is the new marketing
        </p>
        <p className="text-center text-[11.14px] font-normal text-[#717171] my-[5px]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>
      <div className="flex justify-between">
        <Communityudatecards imageUrl="/customerupdate1.png" text1="Creating Streamlined Safeguarding Processes with OneRen"/>
        <Communityudatecards imageUrl="/customerupdate2.png" text1="What are your safeguarding responsibilities and how can you manage them?"/>
        <Communityudatecards imageUrl="/customerupdate3.png" text1="Revamping the Membership Model with Triathlon Australia"/>
      </div>
    </div>
  );
};

export default Communityupdate;
