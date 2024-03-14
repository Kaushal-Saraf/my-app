import Communitycard from "./Communitycard";

const Community = () => {
  return (
    <div className="px-[10.23px] md:px-[100.23px] my-[11.14px] py-[11.14px]  bg-white">
      <p className="text-[25.06px] text-center font-semibold text-[#4D4D4D] font-inter">
        Manage your entire community
      </p>
      <p className="text-[25.06px] text-center font-semibold text-[#4D4D4D] font-inter">
        in a single system
      </p>
      <p className="text-center text-[11.14px] font-normal text-[#717171] my-[5px]">
        Who is Nextcent suitable for?
      </p>
      <div className="flex flex-wrap justify-evenly">
       <Communitycard imageUrl="/communitycard1.svg" text1="Membership Organisations" text2="Our membership management software provides full automation of membership renewals and payments"/>
       <Communitycard imageUrl="/communitycard2.svg" text1="National Associations" text2="Our membership management software provides full automation of membership renewals and payments"/>
       <Communitycard imageUrl="/communitycard3.svg" text1="Clubs And Groups" text2="Our membership management software provides full automation of membership renewals and payments"/>
      </div>
    </div>
  );
};

export default Community;
