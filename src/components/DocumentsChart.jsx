import Chart from "./Chart";
import Box from "./common/Box";

const DocumentsChart = () => {
  return (
   <Box title={"Documents Expiring"}>
      <div className="mt-9">
        <div className="flex items-center w-full text-lg font-semibold">
          <div className="flex-grow border-t-2 border-dashed mt-4 border-[#4B66E3]"></div>
          <span className="text-[#4b67e384] mt-4 p-2 text-[10px] font-bold hidden md:flex">30</span>
        </div>
        <Chart />
      </div>
   </Box>
  );
};

export default DocumentsChart;
