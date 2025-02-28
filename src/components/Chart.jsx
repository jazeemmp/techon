import React from "react";

const Chart = () => {
  const data = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 25 },
    { month: "Mar", value: 18 },
    { month: "Apr", value: 30 },
    { month: "May", value: 22 },
    { month: "Jun", value: 40, show: true },
    { month: "Jul", value: 35 },
    { month: "Aug", value: 15 },
    { month: "Sep", value: 28 },
    { month: "Oct", value: 33 },
    { month: "Nov", value: 20 },
    { month: "Dec", value: 27 },
  ];

  return (
    <div className="w-full  mx-auto text-center ">
      <div className="flex items-end justify-between h-46">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col  items-center">
            <div
              className={`md:w-6 w-3 ${
                item.show ? " bg-[#C8E764]" : " bg-white"
              }  rounded-md transition-all`}
              style={{ height: `${item.value * 4}px` }}
            ></div>
            <span className="mt-2 text-[10px] md:text-[12px] text-[#A3AED0]">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
