import Image from "next/image";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import money from "../../assets/images/money-growth.png";
import TotalEarningTable from "./TotalEarningTable";
import item from "./fakedb.json"


const TotalEarning = () => {
  return (
    <section className="bg-[#FFFFFF] max-w-[1426px] pt-7">
      <div className="">
        <div className="">
          <div>
            <div className="text-lg breadcrumbs text-[#686868]">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Finance</a>
                </li>
                <li className="font-medium text-[#001E00]">Total Earning</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FB641B] font-semibold text-2xl">
              Total Earning
              </h1>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded mt-[36px] text-[#001E00]">
            <div className={`${style.boxshaddow} p-6 rounded-lg `}>
              <div className=" flex flex-wrap gap-3">
                <div
                  className={`w-[449px] h-[250px] ${style.boxbuttonshadow} rounded-lg p-6`}
                >
                  <h1 className="text-2xl font-semibold ">Today Earning</h1>
                  <p className="mt-8 text-2xl font-medium">
                    Total:{" "}
                    <span className="font-semibold text-[44px]">15,420 Tk</span>
                  </p>
                  <div className="flex items-center mt-8">
                    <Image src={money} className='w-5' width={20} height={20} alt=""></Image>
                    <p className="ml-4 font-medium">Today so far</p>
                  </div>
                </div>
                <div
                  className={`w-[449px] h-[250px] ${style.boxbuttonshadow} rounded-lg p-6`}
                >
                  <h1 className="text-2xl font-semibold ">Earning This Month</h1>
                  <p className="mt-8 text-2xl font-medium">
                    Total:{" "}
                    <span className="font-semibold text-[44px]">1,05,420 Tk</span>
                  </p>
                  <div className="flex items-center mt-8">
                    <Image src={money} className='w-5' width={20} height={20} alt=""></Image>
                    <p className="ml-4 font-medium">This month so far vs. same day last month</p>
                  </div>
                </div>
                <div
                  className={`w-[449px] h-[250px] ${style.boxbuttonshadow} rounded-lg p-6`}
                >
                  <h1 className="text-2xl font-semibold ">Today Earning</h1>
                  <p className="mt-8 text-2xl font-medium">
                    Total:{" "}
                    <span className="font-semibold text-[44px]">1,05,420 Tk</span>
                  </p>
                  <div className="flex justify-center mt-8">
                    <button className="w-[183px] text-white text-base h-[48px] bg-[#FB641B] rounded text-center">Withdraw Balance</button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h1 className="text-2xl font-bold">Withdraw Report</h1>
              </div>

              <div className="mt-[28px] pb-[150px]">
                <div className={`relative overflow-x-auto rounded border-t border-l border-r border-[#B7B7B7] `}>
                  <table className="w-full text-base text-left text-[#001E00]">
                    <thead className="text-base text-[#001E00] font-normal bg-[#F2F3F7] h-[48px]">
                      <tr>
                      
                        <th
                          scope="col"
                          className=" py-3 text-[#001E00] text-base"
                        >
                          <p className=" px-6 font-semibold whitespace-nowrap border-[#B7B7B7]">
                          Withdraw Date
                          </p>
                        </th>
                        <th
                          scope="col"
                          className=" py-3 text-[#001E00] text-base"
                        >
                          <p className=" px-6 font-semibold whitespace-nowrap border-[#B7B7B7]">
                          Instrument No
                          </p>
                        </th>
                        <th
                          scope="col"
                          className=" py-3 text-[#001E00] text-base"
                        >
                          <p className=" px-6 font-semibold whitespace-nowrap border-[#B7B7B7]">
                          Bank Name
                          </p>
                        </th>
                        <th
                          scope="col"
                          className=" py-3 text-[#001E00] text-base"
                        >
                          <p className=" px-6 font-semibold whitespace-nowrap border-[#B7B7B7]">
                          Amount
                          </p>
                        </th>
                        <th
                          scope="col"
                          className=" py-3 text-[#001E00] text-base"
                        >
                          <p className=" px-6 font-semibold whitespace-nowrap border-[#B7B7B7]">
                          Payment Status
                          </p>
                        </th>
    
                      </tr>
                    </thead>
                    <tbody className="">
                      {item.map((product) => {
                        return (
                          <TotalEarningTable
                            key={product.id}
                            product={product}
                            item={item}
                          ></TotalEarningTable>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalEarning;
