import Link from "next/link"

const Normalheader = () => {
  return (
    <div className="px-[100.23px] py-[11.14px] flex justify-between">
      <div className="flex align-middle">
        <h1 className="font-bold text-[24px]">P</h1>
        <h1 className="text-[#4CAF4F] text-[24px]">cl</h1>
      </div>
      <div className="flex flex-wrap justify-evenly align-middle items-center">
        <div className="mx-[22.27px] flex flex-wrap justify-evenly align-middle items-center">
          <Link className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]" href={"/"}>
            Home
          </Link>
          <Link className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]" href={"/"}>
            Features
          </Link>
          <Link className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]" href={"/"}>
            Community
          </Link>
          <Link className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]" href={"/"}>
            Blog
          </Link>
          <Link className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]" href={"/"}>
            Pricing
          </Link>
        </div>
        <button
          className="flex align-middle items-center bg-[#4CAF4F] h-full rounded-sm text-[11.14px] px-[22.27px] text-white"
          href={"/"}
        >
          Register Now
          <img src="/arrow.svg" alt="hello" />
        </button>
      </div>
    </div>
  )
}

export default Normalheader
