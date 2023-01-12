import React from "react";
import RightSideNavbar from "../../components/AdminDashboard/RightSideNavbar/RightSideNavbar";
// import logo from "../../assets/images/adminDashboard/Logo.png";
import Image from "next/image";

import message from "../../assets/images/adminDashboard/message.png";
import bell from "../../assets/images/adminDashboard/bell.png";
import setting from "../../assets/images/adminDashboard/settings.png";
import question from "../../assets/images/adminDashboard/question.png";

import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
// import { Line } from "@nivo/bar";
// import LineGraph from "../../components/LineGraph/LineGraph";

const adminId = () => {
  return (
    <div className="grid grid-cols-10 gap-4">
      {/*left side navbar  */}
      <div className="col-span-2 mx-3">
        <RightSideNavbar></RightSideNavbar>
      </div>
      {/* middle section */}
      <div className="col-span-7">
        <div className="border shadow py-7 px-10  ">
          <h3 className="text-[#FB641B] text-[24px] font-semibold">
            Dashboard
          </h3>
        </div>

        {/* progress card */}
        <div className="flex justify-around mt-4">
          <div>
            <div className="card w-96 bg-base-100 shadow-lg border p-4 rounded">
              <div className="card-body">
                <h2 className="card-title text-[24px] text-[#063852] font-semibold">
                  Today Orders
                </h2>
                <p className="text-[#686868]">Today Orders</p>
                <p className="text-[#063852] text-[24px]">
                  Tk 100000{" "}
                  <FaArrowUp className="inline text-[#0BD838] "></FaArrowUp>
                </p>
                <p className="font-[#686868] text-[12px]">60%</p>

                <div className="w-full bg-gray-200 h-2 mb-6 rounded">
                  <div className="bg-[#0BD838] h-2 w-[60%] rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-lg border p-4 rounded">
              <div className="card-body">
                <h2 className="card-title text-[24px] text-[#F4253F] font-semibold">
                  Cancel Orders
                </h2>
                <p className="text-[#686868]">Today Cancel Orders</p>
                <p className="text-[#063852] text-[24px]">
                  Tk 2000{" "}
                  <FaArrowDown className="inline text-[#F4253F]"></FaArrowDown>
                </p>
                <p className="font-[#686868] text-[12px]">20%</p>

                <div className="w-full bg-gray-200 h-2 mb-6 rounded">
                  <div className="bg-[#F4253F] h-2 w-[20%] rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-lg border p-4 rounded">
              <div className="card-body">
                <h2 className="card-title text-[24px] text-[#FB641B] font-semibold">
                  Monthly Total Sale
                </h2>
                <p className="text-[#686868]">Total Sale</p>
                <p className="text-[#063852] text-[24px]">
                  Tk 200000{" "}
                  <FaArrowUp className="inline text-[#FB641B] "></FaArrowUp>
                </p>
                <p className="font-[#686868] text-[12px]">70%</p>

                <div className="w-full bg-gray-200 h-2 mb-6 rounded">
                  <div className="bg-[#FB641B] h-2 w-[70%] rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* nibo bar */}
        {/* <LineGraph></LineGraph> */}
      </div>
      {/* right side navbar */}
      <div className="col-span-1 bg-white shadow-lg h-[1960px]">
        <div className="mt-10">
          <Image
            className="mx-auto py-5"
            src={message}
            width="50"
            height="50"
            alt="logo image"
          />
          <Image
            className="mx-auto py-5"
            src={bell}
            width="50"
            height="50"
            alt="logo image"
          />
          <Image
            className="mx-auto py-5"
            src={setting}
            width="50"
            height="50"
            alt="logo image"
          />
          <Image
            className="mx-auto py-5"
            src={question}
            width="50"
            height="50"
            alt="logo image"
          />
        </div>
      </div>
    </div>
  );
};

export default adminId;
