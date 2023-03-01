import Link from "next/link";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";

const WithdrawBalance = () => {

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

          <div className="bg-[#FFFFFF] rounded mt-[36px] text-[#001E00] mx-auto w-[812px]">
            <div className={`${style.boxshaddow} p-6 rounded-lg `}>
              <h1 className="text-[32px] font-bold text-center my-[78px]">
                Withdrawal Balance
              </h1>
              <p className="text-center text-2xl font-semibold">Taka:</p>
              <div
                className={`${style.boxshaddow} w-[452px] h-[80px] mx-auto flex justify-center items-center mt-4 rounded-lg`}
              >
                <p className="text-center text-[34px] font-medium ">90,000</p>
              </div>
              <p className="mt-8 text-center font-semibold text-2xl">
                Bank Details
              </p>
              <div className="flex justify-center mt-8">
                <div>
                  <div className="flex items-center mb-8">
                    <div className="w-[252px]">
                    <p className="text-end text-2xl font-medium">Account Holder Name:</p>
                    </div>
                    <input
                      className="border border-[#B7B7B7] ml-4 w-[358px] h-[56px] text-[#686868] px-4 text-2xl font-medium rounded"
                      type="text"
                      name=""
                      defaultValue="Roy Ang"
                      disabled
                      id=""
                    />
                  </div>
                  <div className="flex items-center mb-8">
                    <div className="w-[252px]">
                    <p className="text-end text-2xl font-medium">Account Number:</p>
                    </div>
                    <input
                      className="border border-[#B7B7B7] ml-4 w-[358px] h-[56px] text-[#686868] px-4 text-2xl font-medium rounded"
                      type="text"
                      name=""
                      defaultValue="2154 2316 5487 2144"
                      value="2154 2316 5487 2144"
                      disabled
                      id=""
                    />
                  </div>
                  <div className="flex items-center mb-8">
                    <div className="w-[252px]">
                    <p className="text-end text-2xl font-medium">Routing Number:</p>
                    </div>
                    <input
                      className="border border-[#B7B7B7] ml-4 w-[358px] h-[56px] text-[#686868] px-4 text-2xl font-medium rounded"
                      type="text"
                      name=""
                      defaultValue=""
                      value="001457201"
                      disabled
                      id=""
                    />
                  </div>
                  <div className="flex items-center mb-8">
                    <div className="w-[252px]">
                    <p className="text-end text-2xl font-medium">Bank Name:</p>
                    </div>
                    <input
                      className="border border-[#B7B7B7] ml-4 w-[358px] h-[56px] text-[#686868] px-4 text-2xl font-medium rounded"
                      type="text"
                      name=""
                      defaultValue=""
                      value="Meghna Bank Ltd."
                      disabled
                      id=""
                    />
                  </div>
                  <div className="flex items-center mb-[80px]">
                    <div className="w-[252px]">
                    <p className="text-end text-2xl font-medium">Branch Name:</p>
                    </div>
                    <input
                      className="border border-[#B7B7B7] ml-4 w-[358px] h-[56px] text-[#686868] px-4 text-2xl font-medium rounded"
                      type="text"
                      name=""
                      defaultValue=""
                      value="Dhaka"
                      disabled
                      id=""
                    />
                  </div>
                  
                  <div className="flex justify-center items-center mb-11">
                    <button className="w-[114px] mr-2 h-[40px] border border-[#686868] rounded text-[#686868]">Cancel</button>
                    <button className="w-[134px] ml-2 h-[40px] bg-[#FB641B] text-white rounded"><Link href="transactionPending">Submit</Link> </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithdrawBalance;
