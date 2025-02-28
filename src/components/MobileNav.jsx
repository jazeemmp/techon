import React from "react";
import { motion } from "framer-motion";
import { BsFillPersonFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoBusiness } from "react-icons/io5";
import assests from "../assets/icons/assets.png";
import money from "../assets/icons/money-flow.png";
import chart from "../assets/icons/line-chart.png";

const navItems = [
  { icon: <GoHomeFill className="text-lg" />, bg: "bg-[#D2F561]", label: "Dashboard" },
  { icon: <IoBusiness className="text-lg" />, bg: "bg-white", label: "Business" },
  { icon: <BsFillPersonFill className="text-lg" />, bg: "bg-white", label: "Profile" },
  { icon: <img src={assests} alt="Assets" className="w-3 h-3" />, bg: "bg-white", label: "Assets" },
  { icon: <img src={money} alt="Money Flow" className="w-3 h-3" />, bg: "bg-white", label: "Money Flow" },
  { icon: <img src={chart} alt="Chart" className="w-3 h-3" />, bg: "bg-white", label: "Chart" },
];

const MobileNav = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-screen h-[340px] rounded-3xl bg-white/20 backdrop-blur-2xl fixed top-16 left-0 z-50 shadow-lg p-4"
    >
      <ul className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }} 
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <div className={`w-10 h-10 flex items-center justify-center ${item.bg} rounded-full`}>
              <div className="text-2xl">{item.icon}</div>
            </div>
            <span className="text-black font-medium">{item.label}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;
