import React from "react";
import Header from "../header/header";
import Box from "./box";
import GraphComponent from "./graph";
import SalesTableComponent from "./salesTable";

function Dashboard() {
  return (
    <div className="bg-portalBackground w-full">
      <Header />
      <div className="bg-portalBackground px-6 lg:px-[50px] py-16">
        <div className="flex flex-col md:flex-row md:flex md:items-center justify-center items-center mb-10">
          <div className="font-openSansSemiBold text-ft12 text-portalColor5 font-semibold md:flex-1 mb-6 md:mb-0">
            Dashboard
          </div>
          <div className="flex-col md:flex-row md:flex md:items-center">
            <div className="xss:w-36 md:h-9 lg:w-[171px] lg:h-[45px] bg-white rounded-md border border-[#949CAE33] px-[20px] py-[13px] flex items-center mb-4 md:mb-0 md:mr-[15px] cursor-pointer">
              <span className="flex-1 font-openSansRegular text-ft11 text-portalColor5">
                Event Type
              </span>
              <img src="/images/downArrow.svg" alt="" className="w-6 h-3" />
            </div>
            <div className="xss:w-36 md:h-9 lg:w-[171px] lg:h-[45px] bg-white rounded-md border border-[#949CAE33] px-[20px] py-[13px] flex items-center mb-4 md:mb-0 md:mr-[15px] cursor-pointer">
              <span className="flex-1 font-openSansRegular text-ft11 text-portalColor5">
                Published
              </span>
              <img src="/images/downArrow.svg" alt="" className="w-6 h-3" />
            </div>
            <div className="xss:w-36 md:h-9 lg:w-[171px] lg:h-[45px] bg-white rounded-md border border-[#949CAE33] px-[20px] py-[13px] flex items-center cursor-pointer">
              <span className="flex-1 font-openSansRegular text-ft11 text-portalColor5">
                All Time
              </span>
              <img src="/images/downArrow.svg" alt="" className="w-6 h-3" />
            </div>
          </div>
        </div>

        {/* Revenue comonents */}
        <div className="w-full">
          <div className="w-full flex justify-between flex-col md:flex-row">
            <Box
              image="/images/dashboardRevenue.png"
              heading="Revenue"
              value="$400,642"
              isAmount={true}
            />
            <Box
              image="/images/dashboardTotalAttendees.png"
              heading="Total Attendees"
              value="2,000"
              isAmount={false}
            />
            <Box
              image="/images/dashboardTicketSold.png"
              heading="Ticket Sold"
              value="2,023"
              isAmount={false}
            />
          </div>
        </div>

        {/* Graph and sales table component */}
        <div className="flex flex-col lg:flex-row w-full">
          <GraphComponent />
          <SalesTableComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
