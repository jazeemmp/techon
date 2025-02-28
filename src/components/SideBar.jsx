import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoBusiness } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import assests from "../assets/icons/assets.png";
import money from "../assets/icons/money-flow.png";
import chart from "../assets/icons/line-chart.png";
import logo2 from "../assets/logo2.png";
import { IoExitOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="h-[100vh] hidden md:flex  flex-col items-center justify-between">
      <div className="w-[56px]  flex flex-col items-center overflow-hidden justify-between gap-5 rounded-full bg-white/51">
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-[#D2F561] hover:bg-white rounded-full">
          <GoHomeFill className="text-3xl" />
        </div>
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full hover:bg-[#D2F561] cursor-pointer">
          <IoBusiness className="text-3xl" />
        </div>
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full hover:bg-[#D2F561] cursor-pointer">
          <BsFillPersonFill className="text-3xl" />
        </div>
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full hover:bg-[#D2F561] cursor-pointer">
          <img src={assests} alt="" />
        </div>
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full hover:bg-[#D2F561] cursor-pointer">
          <img src={money} alt="" />
        </div>
        <div className="flex items-center justify-center w-[56px] mb-6 h-[56px] bg-white rounded-full hover:bg-[#D2F561] cursor-pointer">
          <img src={chart} alt="" />
        </div>
      </div>
      <div className="w-[56px]  flex flex-col items-center overflow-hidden justify-between gap-7 rounded-full bg-white/51">
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full hover:bg-[#D2F561] cursor-pointer">
          <IoExitOutline className="text-3xl" />
        </div>
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-white rounded-full hover:bg-[#D2F561] cursor-pointer">
          <img src={logo2} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
