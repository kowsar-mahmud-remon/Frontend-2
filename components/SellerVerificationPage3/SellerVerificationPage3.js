import Image from "next/image";
import Link from "next/link";
import React from "react";
import SecondImage from "../sellerverification/SecondImage";
import Sellerverification from "../sellerverification/Sellerverification";
import SellerVerificationPageSideNav from "../SellerVerificationPageSideNav/SellerVerificationPageSideNav";
import logo from "../../assets/images/logo/logo.png";

function SellerVerificationPage3(props) {
  return (
    <div className="mt-[45px] flex">

      <div className="w-full  pb-40 px-5">
        <div className="">
          <h4 className="text-[24px] text-[#001E00] font-semibold">
            New Seller Verification
          </h4>
          <p className="text-[10px] md:text-md text-[#686868]">
            YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW
          </p>
          <div className="grid lg:grid-cols-4 lg:gap-0 mobile:grid-cols-2 mobile:gap-4 items-center my-8 whitespace-nowrap  lg:text-[12px] text-[10px]">
            <div className="flex ">
              <div className="bg-[#FB641B] text-white border border-white rounded-3xl px-2  ">
                1
              </div>
              <div className="bg-[#FB641B] text-white  px-3 rounded-xl w-full text-center">
                Add Shop Name
              </div>
            </div>
            <div className="flex ">
              <div className="bg-[#FB641B] text-white  border border-white px-2 rounded-lg">
                2
              </div>
              <div className="bg-[#FB641B] text-white  px-3 rounded-xl w-full text-center ">
                Add Shop Address
              </div>
            </div>
            <div className="flex ">
              <div className="bg-[#FB641B]  px-2 text-white rounded-lg border-2 border-white">
                3
              </div>
              <div className="bg-[#FB641B]  px-3 rounded-xl w-full text-center text-white ">
                Verify ID & Bank
              </div>
            </div>
            <div className="flex">
              <div className="  px-2 rounded-lg border border-[#F2F3F7]">
                4
              </div>
              <div className="  border border-whiet px-3 rounded-xl w-full text-center ">
                Add Product
              </div>
              <div className="  px-2 rounded-xl border border-[#F2F3F7]">

              </div>
            </div>
          </div>
          <h4 className="text-[24px] font-semibold text-[#001E00] my-3">
            Account Type.
          </h4>
          <div className="grid grid-cols-2 gap-5">
            {/* <div className=""> */}
            <div className="w-full shadow-lg items-center border bg-[#FB641B] text-white rounded-md p-5">
              <p className="lg:text-[18px] mobile:text-[14px] font-semibold">I’m an individual</p>
              <p className="lg:text-[14px] mobile:text-[12px]">Most sellers on Banglar Big Store fall into this category</p>
            </div>
            {/* </div> */}
            {/* <div className=""> */}
            <div className="w-full items-center border text-[#FB641B] bg-white rounded-md p-5 shadow-lg">
              <p className="lg:text-[18px] mobile:text-[14px] font-semibold">
                I’m a Sole Trader or Incorporated Business
              </p>
              <p className="lg:text-[14px] mobile:text-[12px]">A registered legal entity</p>
            </div>
            {/* </div> */}
          </div>
        </div>
        <h4 className="text-[24px] mt-4font-semibold text-[#001E00] mt-[40px]">
          Please give your ID & Bank Information
        </h4>

        <Sellerverification />


        <div className="my-4 shadow-lg  p-[16px] rounded-xl border-t">
          <h4 className="text-[24px] mt-12 font-semibold text-[#001E00]">
            Please give your Bank Information
          </h4>
          <div className="">
            <p className="text-sm md:text-md font-semibold my-2  text-[#707070]">
              Verify Your Bank Account
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <SecondImage />
            </div>
          </div>
          {/* for user info */}
          <div className="grid lg:grid-cols-2 mobile:grid-cols-1 gap-4 my-2">
            <div className="">
              <p className="text-sm md:text-md font-semibold my-2">
                Account Holder Name
              </p>
              <input
                type="text"
                placeholder="Account Holder"
                className="input input-bordered shadow-xl w-full "
              />
            </div>
            <div className="">
              <p className="text-sm md:text-md font-semibold my-2">
                Bank Name
              </p>
              <input
                type="text"
                placeholder="Bank Name"
                className="input input-bordered  shadow-xl w-full"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 mobile:grid-cols-1 gap-4 my-2">
            <div className="">
              <p className="text-sm md:text-md font-semibold my-2">
                Account Number
              </p>
              <input
                type="text"
                placeholder="Account Number"
                className="input input-bordered shadow-xl w-full"
              />
            </div>
            <div className="">
              <p className="text-sm md:text-md font-semibold my-2">
                Branch Name
              </p>
              <input
                type="text"
                placeholder="Branch Name"
                className="input input-bordered shadow-xl w-full"
              />
            </div>
          </div>
          <div className="">
            <p className="text-sm md:text-md font-semibold my-2">
              Routing Number
            </p>
            <input
              type="text"
              placeholder="Routing Number"
              className="input input-bordered  shadow-xl lg:w-1/2 mobile:w-full"
            />
          </div>

          <div className="flex justify-end  my-5">
            <Link href="sellerVerificationPage5">
              <button className="w-[369px] h-[72px] btn text-md bg-[#FB641B] text-white ">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerVerificationPage3;
