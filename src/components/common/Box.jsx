import React from "react";
import { motion } from "framer-motion";
import { SlArrowRightCircle } from "react-icons/sl";

const getRandomPosition = () => ({
  //to show it in random positon
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
});

const Box = ({ children, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, ...getRandomPosition() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/35 rounded-[10px] md:rounded-[30px] gap-6 p-6 flex flex-col justify-between 
        backdrop-blur-[45.6px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.1)]"
    >
      <div className="flex w-full justify-between">
        <h1 className="md:text-2xl font-bold text-[14px]">{title}</h1>
        <SlArrowRightCircle className="text-3xl -rotate-45 hidden md:block" />
      </div>
      <div>{children}</div>
    </motion.div>
  );
};

export default Box;