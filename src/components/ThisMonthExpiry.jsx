import nodata from "../assets/nodata.png";
import Box from "./common/Box";

const headers = ["Entity", "Email", "Document Name", "Document Type","Document Type","Document Type","Document Type"];

const ThisMonthExpiringDoc = () => {
  return (
    <Box title="This Month Expiring Documents">
      <div>
        {/* Headers */}
        <div className="w-[90%] flex items-center justify-between">
          {headers.map((header, index) => (
            <p key={index} className="text-[7px] md:text-sm font-[400]">
              {header}
            </p>
          ))}
        </div>
        
        {/* Divider */}
        <div className="w-[90%] h-[0.5px] mt-2 bg-black"></div>
        
        {/* No Data Image */}
        <div>
          <img
            src={nodata}
            alt="No Data"
            className="mx-auto md:w-[150px] w-[60px] my-10 opacity-30"
          />
        </div>
      </div>
    </Box>
  );
};

export default ThisMonthExpiringDoc;
