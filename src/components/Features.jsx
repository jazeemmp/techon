import React from "react";
import FeaturesCard from "./FeaturesCard";
import officer from "../assets/officer.jpg";
import money from "../assets/money.png";
import file from "../assets/file.png";
import { motion } from "framer-motion";

const featuresData = [
  { img: officer, title: "Total Employees", count: "3" },
  { img: money, title: "Total Projects", count: "5" },
  { img: file, title: "Active Clients", count: "0" },
  { img: file, title: "Completed Tasks", count: "0" },
];

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/31 rounded-[10px] md:rounded-[30px] gap-16 py-2 mb-10 md:py-4 flex flex-col justify-between backdrop-blur-[45.6px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.1)]"
    >
      <div className="flex justify-around">
        {featuresData.map((feature, index) => (
          <FeaturesCard
            key={index}
            img={feature.img}
            title={feature.title}
            count={feature.count}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
