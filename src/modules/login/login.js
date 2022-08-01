import React from "react";
import { history } from "../../managers/history";

function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center md:grid md:place-content-center">
      <div className="w-[90%] h-[50%] md:w-[500px] md:h-[534px] bg-white rounded-[10px] shadow-md shadow-[#949CAE1A] px-5">
        <div className="flex items-center justify-center mt-[50px] mb-[30px]">
          <img
            src="/images/nftTicketingLogo.svg"
            alt=""
            className="w-[167px] h-[30px]"
          />
        </div>
        <div className="flex items-center justify-center mb-10">
          <span className="font-openSansSemiBold font-semibold text-ft7 text-portalColor5">
            Login with nft ticketing
          </span>
        </div>
        {/* Input Field 1 */}
        <div className="flex justify-center mb-[15px]">
          <div className="w-full h-[60px] bg-portalColor2 rounded-[10px]">
            <input
              type="text"
              className="bg-transparent w-full h-full outline-none p-5 font-openSansRegular text-ft5 text-portalColor3 font-normal"
              placeholder="Email Address"
            />
          </div>
        </div>
        {/* Input Field 2 */}
        <div className="flex justify-center mb-8">
          <div className="w-full h-[60px] bg-portalColor2 rounded-[10px]">
            <input
              type="text"
              className="bg-transparent w-full h-full outline-none p-5 font-openSansRegular text-ft5 text-portalColor3 font-normal"
              placeholder="Password"
            />
          </div>
        </div>
        {/* Checkbox Container*/}
        <div className="flex items-center mb-[50px]">
          <input
            type="checkbox"
            className="w-5 h-5 mr-[10px] rounded-md border-portalColor4 cursor-pointer"
          />
          <span className="font-openSansRegular text-ft5 text-portalColor3 font-normal">
            Remember me
          </span>
        </div>
        {/* Sign in button */}
        <div className="flex justify-center">
          <div
            onClick={() => history.push("/dashboard")}
            className="w-full h-[70px] rounded-full bg-portalColor4 hover:bg-[#395FF1] cursor-pointer flex items-center justify-center"
          >
            <span className="font-openSansSemiBold text-ft5 text-white">
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
