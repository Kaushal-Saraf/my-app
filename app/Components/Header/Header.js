"use client"
import { useEffect, useState } from "react";
import Normalheader from "./Normalheader";
import Mobileheader from "./Mobileheader";
const Header = () => {
  const [windowSize, setWindowSize] = useState(true);
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth>=670)setWindowSize(false);
      else setWindowSize(true)
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    {windowSize?<Mobileheader/>:<Normalheader/>}
    </>
  );
};
export default Header;
