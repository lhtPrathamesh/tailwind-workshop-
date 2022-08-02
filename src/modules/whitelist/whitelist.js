import React, { useState } from "react";
import Header from "../header/header";
import AddIcon from "@mui/icons-material/Add";
import WhitelistTable from "./whitelistTable";

function Whitelist() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="bg-portalBackground w-full">
      <Header />
      <div className="px-6 lg:px-[50px] py-16">
        <div className="font-openSansSemiBold text-ft12 text-portalColor5 font-semibold mb-[45px]">
          Whitelist
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row mb-[30px]">
          <div className="w-[300px] h-[45px] bg-white rounded-full shadow border border-[#949CAE33] flex items-center px-5 py-[13px] mobile:mb-5">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none flex-1"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <img src="/images/search.svg" alt="" />
          </div>
          <div className="w-[150px] h-[50px] rounded-full bg-[#395FF1] flex items-center justify-center">
            <AddIcon className="text-white mr-2" />
            <span className="font-openSansSemiBold text-ft11 text-white">
              Add User
            </span>
          </div>
        </div>

        {/* Whitelist Table Component */}

        <div className="w-full">
          <WhitelistTable searchValue={searchValue} />
        </div>
      </div>
    </div>
  );
}

export default Whitelist;
