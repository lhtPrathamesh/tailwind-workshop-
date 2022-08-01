import React from "react";

function Graph() {
  return (
    <div className="mr-[26px] mb-10 lg:mb-0 w-full lg:w-[50%]">
      <div className="mb-10 font-openSansSemiBold text-ft13 text-portalColor5 font-semibold">
        Splits per contributors
      </div>
      <div className="w-full h-[401px] bg-white rounded-[10px] shadow-md px-4 xl:px-10 2xl:px-[79px] py-[90px] flex mobile:items-center justify-center flex-col md:flex-row">
        <div className="mobile:mr-0 mr-[49px] lg:mr-7 xl:mr-[49px] mobile:mb-6 mobile:w-full mobile:flex mobile:justify-center">
          <img
            src="/images/pieChart.png"
            alt=""
            className="h-[220px] w-[220px]"
          />
        </div>
        <div className="flex md:flex-col">
          <div className="mb-5 mobile:mr-6">
            <div className="flex items-center mb-[10px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#395FF1] mr-[5px]"></div>
              <span className="font-openSansRegular text-ft15 text-portalColor4">
                Organizer
              </span>
            </div>
            <span className="font-openSansSemiBold text-ft5 text-portalColor5 font-semibold">
              $200,321
            </span>
          </div>
          <div className="mb-5 mobile:mr-6">
            <div className="flex items-center mb-[10px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#949CAE] mr-[5px]"></div>
              <span className="font-openSansRegular text-ft15 text-portalColor4">
                Artist
              </span>
            </div>
            <span className="font-openSansSemiBold text-ft5 text-portalColor5 font-semibold">
              $120,192
            </span>
          </div>
          <div className="">
            <div className="flex items-center mb-[10px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#525272] mr-[5px]"></div>
              <span className="font-openSansRegular text-ft15 text-portalColor4">
                Promoter
              </span>
            </div>
            <span className="font-openSansSemiBold text-ft5 text-portalColor5 font-semibold">
              $80,092
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
