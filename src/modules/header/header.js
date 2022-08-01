import React from "react";

function Header() {
  return (
    <div className="w-full h-[65px] bg-white shadow-md shadow-[#949CAE1A] px-[50px] py-[26px] flex items-center">
      <div className="flex-1 cursor-pointer">
        <img src="/images/menu.svg" alt="" />
      </div>
      <div className="hidden md:flex items-center">
        <div className="flex items-center mr-[30px]">
          <img
            src="/images/profile.png"
            alt=""
            className="mr-[18px] w-[35px] h-[35px]"
          />
          <span className="mr-[10px] font-openSansSemiBold text-ft11 text-portalColor3 font-semibold cursor-pointer">
            John Doe
          </span>
          <img
            src="/images/downArrow.svg"
            alt=""
            className="w-6 h-3 cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-[30px] h-[20px] border border-portalColor4 opacity-30"></div>
          <img
            src="/images/notification.svg"
            alt=""
            className="cursor-pointer w-[20px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
