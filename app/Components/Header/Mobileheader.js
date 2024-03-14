import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const Mobileheader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="px-[10.23px] py-[11.14px]">
        <div className="flex items-center align-middle justify-evenly">
          <div className="flex align-middle">
            <h1 className="font-bold text-[24px]">P</h1>
            <h1 className="text-[#4CAF4F] text-[24px]">cl</h1>
          </div>
            <button onClick={toggleDropdown} className="items-center justify-center text-[11.14px] mb-[15px] flex">
              Navigate{isDropdownOpen?<FaAngleUp/>:<FaAngleDown/>}
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-[120px] w-30 mr-[76.5px] rounded-lg shadow-lg">
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[11.14px] px-[5.57px] py-[2px] rounded-sm hover:text-white hover:bg-[#4CAF4F]"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <button
          className="flex align-middle items-center bg-[#4CAF4F] h-full rounded-sm text-[11.14px] px-[22.27px] py-[5.57px] text-white"
          href={"/"}
        >
          Register Now
          <img src="/arrow.svg" alt="hello" />
        </button>
        </div>
      </div>
    );
  };

export default Mobileheader
