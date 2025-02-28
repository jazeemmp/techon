import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import message from "../assets/message.png";
import { HiDotsHorizontal } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };
    if (showNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav]);

  return (
    <>
      <div ref={navRef} className="w-full flex justify-between items-center px-5 md:px-10 py-5">
        <div className="flex items-center gap-12">
          <img src={logo} alt="Company Logo" className="w-28 cursor-pointer" />
          <h1 className="text-3xl text-[#02024B] font-bold hidden md:block cursor-pointer">
            Dashboard
          </h1>
        </div>
        <div className="items-center gap-5 hidden md:flex">
          <img src={message} alt="Messages" className="w-10" />
          <div className="border-l border-white h-8" />
          <img src={logo2} alt="Admin Profile" className="w-10 rounded-full" />
          <div>
            <p className="text-[25px] font-normal text-[#4B66E3]">techon</p>
            <p className="text-sm m-0 text-black font-normal">Admin</p>
          </div>
          <HiDotsHorizontal className="text-3xl text-gray-700 cursor-pointer" />
        </div>
        <div className="flex gap-2 items-center md:hidden">
          <img src={message} alt="Messages" className="w-9 md:w-12" />
          <GiHamburgerMenu
            className="text-3xl text-[#D2F561]"
            onClick={() => setShowNav(!showNav)}
          />
        </div>
      </div>
      {showNav && <MobileNav />}
    </>
  );
};

export default NavBar;
