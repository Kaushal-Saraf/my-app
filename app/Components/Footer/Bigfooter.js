import Link from "next/link";
import Company from "./Company";
import Support from "./Support";
import Stayuptodate from "./Stayuptodate";

const Bigfooter = () => {
  return (
    <div className="flex justify-between px-[100.23px] bg-[#263238]">
      <div className="flex-col my-[20.88px]">
        <div className="font-inter text-[9.74px] text-[#F5F7FA]">
          Copyright © 2020 Landify UI Kit.
          <br />
          All rights reserved
        </div>
        <div className="my-[27.84px] flex justify-start">
            <Link href="/"> <img src="/socialicons1.svg"  alt="" /></Link>
            <Link className=" mx-[6.94px]" href="/"> <img src="/socialicons2.svg"  alt="" /></Link>
            <Link className=" mr-[6.94px]" href="/"> <img src="/socialicons3.svg"  alt="" /></Link>
            <Link href="/"> <img src="/socialicons4.svg"  alt="" /></Link>
        </div>
      </div>
      <div className="flex justify-start my-[20.88px]">
        <Company/>
        <Support/>
        <Stayuptodate/>
      </div>
    </div>
  );
};

export default Bigfooter;
