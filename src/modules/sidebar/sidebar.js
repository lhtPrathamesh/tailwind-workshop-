import React from "react";
import { history } from "../../managers/history";

function Sidebar() {
  return (
    <div className="w-24 lg:w-[250px] h-screen  bg-portalBackground border-r-4 border-white">
      <div className="flex items-center justify-center pt-[23px] mb-[51px]">
        <img
          src="/images/nftTicketingLogo.svg"
          alt=""
          className="h-[21px] hidden lg:block"
        />
        <img src="/images/logoSmall.png" alt="" className="h-8 w-8 lg:hidden" />
      </div>
      <div
        className={`flex items-center justify-center lg:justify-start px-2 lg:px-[25px] py-[17px] cursor-pointer ${
          window.location.pathname === "/dashboard" ? "bg-portalColor6" : ""
        } mb-[10px]`}
        onClick={() => history.push("/dashboard")}
      >
        <img
          src="/images/statisticsSidebar.svg"
          alt=""
          className="w-5 h-6 lg:w-4 lg:h-4 lg:mr-5"
        />
        <span className="hidden lg:block">Dashboard</span>
      </div>
      <div
        className={`flex items-center justify-center lg:justify-start px-2 lg:px-[25px] py-[17px] cursor-pointer ${
          window.location.pathname === "/events" ? "bg-portalColor6" : ""
        } mb-[10px]`}
      >
        <img
          src="/images/events.svg"
          alt=""
          className="w-5 h-6 lg:w-4 lg:h-4 lg:mr-5"
        />
        <span className="hidden lg:block">Events</span>
      </div>
      <div
        className={`flex items-center justify-center lg:justify-start px-2 lg:px-[25px] py-[17px] cursor-pointer ${
          window.location.pathname === "/whitelist" ? "bg-portalColor6" : ""
        } mb-[10px]`}
        onClick={() => history.push("/whitelist")}
      >
        <img
          src="/images/whitelistSidebar.png"
          alt=""
          className="w-5 h-6 lg:w-4 lg:h-4 lg:mr-5"
        />
        <span className="hidden lg:block">Whitelist</span>
      </div>
    </div>
  );
}

export default Sidebar;
