import React from "react";
import nodata from "../assets/nodata.png";
import Box from "./common/Box";

const MonthExpiry = () => {
  return (
    <Box title={"Documents Expiry"}>
      <div>
        <div className="w-[90%] flex items-center justify-between">
          <p className="text-[8px] md:text-sm font-[600]">Document Type</p>
          <p className="text-[8px] md:text-sm font-[600]">Document Name</p>
          <p className="text-[8px] md:text-sm font-[600]">Status</p>
          <p className="text-[8px] md:text-sm font-[600]">Detail</p>
        </div>
        <div className="w-[90%] h-[0.5px] mt-2 bg-black"></div>
        <div>
          <img
            src={nodata}
            alt=""
            className="mx-auto md:w-[130px] w-[60px] my-2 opacity-30 "
          />
        </div>
      </div>
    </Box>
  );
};

export default MonthExpiry;
