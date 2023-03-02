import Image from 'next/image';

import React, { PureComponent } from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import elipse1 from "../../assets/images/Ellipse 92.png";
import elipse2 from "../../assets/images/Ellipse 94.png";
import potol from "../../assets/images/image 88.png";
import clock from "../../assets/images/image 9.png";
import lebu from "../../assets/images/image 4.png";
import tomato from "../../assets/images/image 66.png";
import styles from "../../styles/campaignManagementTwo.module.css";



const TaxManagement = () => {
  const percentage = 84.587;
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Tax & Offers</p>
          <p className='text-[#001E00] font-medium'>{">"} Tax Management</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Tax Management</p>
      </div>

      <div className={`lg:max-w-[1426px] px-[23px] pt-[25px] pb-20 mt-8 flex flex-wrap items-center ${styles.campaignManagement}`}>
        <div className="w-[444px] border-2 border-[#B7B7B7] p-4 rounded-lg mr-6 mb-6">
          <div>
            <div className=" flex justify-between">
              <p className="text-base text-[#001E00] mb-4 font-bold">Yearly Profit</p>
              <p className="text-base text-[#001E00] mb-4 font-bold">January - December</p>
            </div>
            <div className="mt-6">
              <div className="flex justify-center">
                <div className="w-[275px] flex justify-center">
                  <div className=" text-lg text-[#001E00] font-medium absolute mt-[75px]">Taka</div>
                  <CircularProgressbar
                    className="font-semibold flex justify-center w-full"
                    value={percentage}
                    text={`Tk ${percentage}`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.5,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",

                      // Text size
                      textSize: "14px",
                      fontWeight: "bold",

                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(40, 125, 243, 1), ${percentage / 100
                        })`,
                      stroke: "#287DF3",
                      textColor: "#FB641B",
                      trailColor: "#F2F3F7",
                      backgroundColor: "#287DF3",
                    })}
                  />
                </div>
              </div>
              <div className=" mt-[46px] mb-0">
                <div className="flex items-center">
                  <Image
                    className="w-[11px]"
                    src={elipse1}
                    width={11}
                    alt=""
                  ></Image>{" "}
                  <p className="text-base text-[#001E00] ml-3 font-medium">
                    Total Profit:
                  </p>{" "}
                  <p className="ml-2 text-[#287DF3] text-lg font-semibold">
                    Tk 84,587
                  </p>
                </div>
                {/* <div className="flex items-center">
                <Image
                  className="w-[11px]"
                  src={elipse2}
                  width={11}
                  alt=""
                ></Image>{" "}
                <p className="text-base text-[#001E00] ml-3 font-medium">
                  Cancellation:
                </p>{" "}
                <p className="ml-2 text-[#F4253F] text-lg font-semibold">
                  Tk 4,587
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[444px] border-2 border-[#B7B7B7] p-4 rounded-lg mb-6">
          <div>
            <div className=" flex justify-between">
              <p className="text-base text-[#001E00] mb-4 font-bold">Yearly Profit</p>
              <p className="text-base text-[#001E00] mb-4 font-bold">January - December</p>
            </div>
            <div className="">

              <div className="flex items-center mt-[36px]">
                <p className='text-base text-[#707070] mr-4'>Profit</p>
                <div className="w-[357px] h-[53px] bg-[#287DF3] rounded-md"></div>
              </div>

              <div className="mt-6">
                <div className="flex items-center mt-[36px]">
                  <p className='text-base text-[#707070] mr-[32px]'>Tax</p>
                  <div className="w-[357px]">
                    <div className="w-[295px] h-[53px] z-10 bg-[#287DF3] rounded-md absolute"></div>
                    <div className="w-[357px] h-[53px] z-0 bg-[#FB641B] rounded-md "></div>

                  </div>
                </div>
              </div>

              <div className="flex mt-[165px]">
                <div className="flex items-center mr-10">
                  <Image
                    className="w-[11px]"
                    src={elipse1}
                    width={11}
                    alt=""
                  ></Image>{" "}
                  <p className="text-base text-[#001E00] ml-3 font-medium">
                    Profit:
                  </p>{" "}
                  <p className="ml-2 text-[#287DF3] text-lg font-semibold">
                    Tk 84,587
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-[11px]"
                    src={elipse2}
                    width={11}
                    alt=""
                  ></Image>{" "}
                  <p className="text-base text-[#001E00] ml-3 font-medium">
                    Tax:
                  </p>{" "}
                  <p className="ml-2 text-[#FB641B] text-lg font-semibold">
                    Tk 7,250
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[444px] h-[200px] text-center pt-5">
          <p className=' text-[32px] text-[#001E00] font-bold'>Pay Your Tax</p>
          <button className="mt-[54px] btn bg-[#FB641B] w-[295px] h-[53px] rounded-md text-white normal-case lg:ml-4 mb-2">
            Pay Now
          </button>
        </div>


      </div>

    </div>
  );
};

export default TaxManagement;