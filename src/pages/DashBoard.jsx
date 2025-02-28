import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import DocumentsChart from "../components/DocumentsChart";
import MonthExpiry from "../components/MonthExpiry";
import Features from "../components/Features";
import ThisMonthExpiringDoc from "../components/ThisMonthExpiry";

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <div className="flex p-5 md:px-10 items-center justify-center gap-10 ">
        <SideBar />
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 w-full">
          <div className="md:col-span-1">
            <DocumentsChart />
          </div>
          <div className="md:col-span-2">
            <ThisMonthExpiringDoc />
          </div>
          <div className="md:col-span-1">
            <MonthExpiry />
          </div>
          <div className="md:col-span-2">
            <Features />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
