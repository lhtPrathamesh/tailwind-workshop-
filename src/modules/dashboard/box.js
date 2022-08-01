import React from "react";

function Box({ image, heading, value, isAmount }) {
  return (
    <div className="w-full md:w-48 h-40 lg:w-64 lg:h-40 2xl:w-80 bg-white rounded-[10px] shadow-lg shadow-[949CAE1A] mb-12 md:mb-[50px] px-5 py-[45px]">
      <div className="flex">
        <div className="mr-[30px]">
          <img
            src={image}
            alt=""
            className="w-[70px] h-[70px] md:w-10 md:h-10"
          />
        </div>
        <div className="flex flex-col">
          <span className="mb-[5px] font-openSansRegular text-ft13 text-portalColor5 font-normal">
            {heading}
          </span>
          {isAmount ? (
            <span className="font-openSansSemiBold text-ft14 text-[#395FF1] font-semibold">
              {value}
            </span>
          ) : (
            <span className="font-openSansSemiBold text-ft14 text-[#0D0F37] font-semibold">
              {value}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Box;
