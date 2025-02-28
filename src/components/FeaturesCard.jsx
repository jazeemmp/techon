import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import officer from "../assets/officer.jpg"; 

const FeaturesCard = ({ img, title, count }) => {
  const isOfficer = img === officer; 

  return (
    <div className="bg-[#4B66E3] rounded-[8px] md:rounded-[25px] w-[77px] md:w-[200px] p-4 flex flex-col justify-between md:h-[255px] h-[75px] transition-transform duration-300 ease-in-out hover:scale-102 cursor-pointer">
      <div className="flex justify-between items-center gap-3 relative">
        <div className="relative w-[12px] md:w-[40px]">
          <img src={img} alt="Feature" className="rounded-full w-full" />
          {isOfficer && (
            <img
              src={officer}
              alt="Overlay"
              className="absolute top-0 left-1 md:left-4 w-full rounded-full opacity-90"
            />
          )}
        </div>

        <p className="font-semibold text-white md:text-[14px] text-[5px]">{title}</p>
      </div>
      <p className="text-[18px] md:text-8xl font-bold text-white text-center">{count}</p>
      <div className="flex justify-end">
        <PiDotsThreeOutlineFill className="text-[#C8E764] md:text-2xl text-[8px] cursor-pointer" />
      </div>
    </div>
  );
};

export default FeaturesCard;
