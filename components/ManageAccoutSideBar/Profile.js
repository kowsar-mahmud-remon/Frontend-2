import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import Link from "next/link";
const Profile = () => {
  const router = useRouter();
  return (
    <div>
      <div className="lg:block hidden">
        <div>
          <h1 className="text-[24px] text-[#FB641B]">My Profile</h1>
        </div>
        <div className="profile mt-[32px]">
          <div className="flex pt-[32px] ml-[24px] gap-[200px]">
            <div>
              <h1 className="text-[14px] text-[#001E00] font-[500]">
                Full Name
              </h1>
              <h2 className="text-[16px] text-[#686868] mt-[16px]">
                Abdul Korim
              </h2>
            </div>
            <div>
              {/* <label  className="btn">open modal</label> */}

              <h1 className="text-[14px] text-[#001E00] font-[500]">
                Email Address <span className="text-[#707070]"> | </span>
                <label
                  htmlFor="Email-modal-3"
                  className="text-[14px] text-[#287DF3]"
                >
                  Change
                </label>
              </h1>
              <h2 className="text-[#686868] text-[16px] mt-[16px]">
                abdulkorim@gmail.com
              </h2>
            </div>
            <div>
              <h1 className="text-[14px] text-[#001E00] font-[500]">
                Mobile <span className="text-[#707070]"> | </span>
                <label
                  htmlFor="Mobile-modal-3"
                  className="text-[14px] text-[#287DF3]"
                >
                  Change
                </label>
              </h1>
              <h2 className="text-[#686868] text-[16px] mt-[16px]">
                +880124 ******* 514
              </h2>
            </div>
          </div>
          <div className="mt-[56px] ml-[24px] flex gap-[210px]">
            <div>
              <h1 className="text-[#001E00] font-[500] text-[14px]">
                Birthday
              </h1>
              <h2 className="text-[#686868] text-[16px] mt-[16px]">
                2000-02-21
              </h2>
            </div>
            <div>
              <h1 className="text-[#001E00] font-[500] text-[14px]">Genter</h1>
              <h1 className="text-[#686868] text-[16px] mt-[16px]">Male</h1>
            </div>
          </div>
          <div className="ml-[24px] mt-[150px] flex flex-col gap-[16px]">
            <label htmlFor="Newsletter-modal-3">
              <h1 className="text-[#287DF3] text-[16px] cursor-pointer">
                Subscribe to our Newsletter
              </h1>
            </label>
            <Link href="/profile/editProfile">
              <button className="w-[273px] h-[48px] bg-[#FB641B] text-[white] rounded-[8px]">
                <span className="text-[16px] text-[500] text-[#FFFFFF]">
                  Edit Profile
                </span>
              </button>
            </Link>
            <Link href="/profile/changesPassword">
              <button className="w-[273px] h-[48px] bg-[#FB641B] text-[white] rounded-[8px]">
                <span className="text-[16px] text-[500] text-[#FFFFFF]">
                  Change Password
                </span>
              </button>
            </Link>
          </div>
        </div>
        <input type="checkbox" id="Email-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="bg-[#FFFFFF] w-[751px] h-[363px] rounded-[8px] relative">
            <label htmlFor="Email-modal-3" className="absolute right-5 top-3">
              ✕
            </label>
            <div className=" mt-[24px] ml-[24px]">
              <h3 className="text-[#001E00] text-[24px] font-[500]">
                Email Address
              </h3>
              <div className="mt-[72px]">
                <h1 className="text-[#001E00] text-[16px]">Email</h1>
                <form className="mt-[8px]">
                  <input
                    type="text"
                    placeholder="Enter your new mail"
                    className="EmailChangeInput focus:border-[#B7B7B7] pl-[24px] placeholder:pl-[1px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none"
                  ></input>
                  <div className="modal-action mt-[60px] mr-[24px]">
                    <button className="EmailChangeButton">
                      <span className="text-white">Save</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <input type="checkbox" id="Mobile-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="bg-[#FFFFFF] w-[751px] h-[363px] rounded-[8px] relative">
            <label htmlFor="Mobile-modal-3" className="absolute right-5 top-3">
              ✕
            </label>
            <div className=" mt-[24px] ml-[24px]">
              <h3 className="text-[#001E00] text-[24px] font-[500]">
                Mobile Number
              </h3>
              <div className="mt-[72px]">
                <h1 className="text-[#001E00] text-[16px]">Number</h1>
                <form className="mt-[8px]">
                  <input
                    type="number"
                    placeholder="Enter your new Number"
                    className="EmailChangeInput focus:border-[#B7B7B7] pl-[24px] placeholder:pl-[1px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none"
                  ></input>
                  <div className="modal-action mt-[60px] mr-[24px]">
                    <button className="EmailChangeButton">
                      <span className="text-white">Save</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <input
          type="checkbox"
          id="Newsletter-modal-3"
          className="modal-toggle"
        />
        <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60 ">
          <div className="bg-[#FFFFFF] w-[751px] h-[363px] rounded-[8px] relative">
            <label
              htmlFor="Newsletter-modal-3"
              className="absolute right-5 top-3"
            >
              ✕
            </label>
            <div className=" mt-[24px] ml-[24px]">
              <h3 className="text-[#001E00] text-[24px] font-[500]">
                Newsletter Subscription
              </h3>
              <div className="mt-[72px]">
                <h1 className="text-[#001E00] text-[16px]">Email</h1>
                <form className="mt-[8px]">
                  <input
                    type="text"
                    placeholder="Enter your  mail"
                    className="EmailChangeInput focus:border-[#B7B7B7] pl-[24px] placeholder:pl-[1px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none"
                  ></input>
                  <div className="modal-action mt-[60px] mr-[24px]">
                    <button className="EmailChangeButton">
                      <span className="text-white">Subcribe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <div className="mt-[34px] px-[24px] w-full">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-[13px]"
            >
              <FaArrowLeft className=""></FaArrowLeft>
              <h1 className="text-[20px]  font-[500] text-[#001E00]">
                My Profile
              </h1>
            </button>
          </div>
          <div>
            <div className="mt-[16px] w-full">
              <h1 className="text-[#686868] text-[14px] font-normal">
                Full Name
              </h1>
              <div className="">
                <input
                  placeholder="Abdul Korim"
                  className="text-[#686868]  pl-[16px] text-[16px] font-[400] w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox placeholder:text-[#686868]"
                ></input>
              </div>
            </div>
            <div className="mt-[20px] w-full">
              <h1 className="text-[#686868] text-[14px] font-normal">
                Email Address
              </h1>
              <div className="w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox">
                <div className="flex full items-center justify-between mx-[16px] pt-[13px]">
                  <h1 className="text-[#686868]   text-[16px] font-[400]">
                    abdulkorim@gmail.com
                  </h1>

                  <label htmlFor="Email-responsive-modal-3">
                    <div className="flex items-center gap-[5.5px]">
                      <h1 className="text-[#287DF3] text-[14px]">Change</h1>
                      <FaEdit></FaEdit>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-[20px] w-full">
              <h1 className="text-[#686868] text-[14px] font-normal">Mobile</h1>
              <div className="w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox">
                <div className="flex items-center justify-between mx-[16px] pt-[13px] ">
                  <h1 className="text-[#686868]   text-[16px] font-[400]">
                    +880 123******154
                  </h1>
                  <label htmlFor="Mobile-responsive-modal-3">
                    <div className="flex items-center gap-[5.5px]">
                      <h1 className="text-[#287DF3] text-[14px]">Change</h1>
                      <FaEdit></FaEdit>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-[20px] w-full">
              <h1 className="text-[#686868] text-[14px] font-normal">
                Birthday
              </h1>
              <input
                placeholder="2000-02-21"
                className="text-[#686868]  w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox  pl-[16px] text-[16px] font-[400]"
              ></input>
            </div>
            <div className="mt-[20px] w-full">
              <h1 className="text-[#686868] text-[14px] font-normal">gender</h1>
              <div className="">
                <input
                  placeholder="Male"
                  className="text-[#686868]  w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox  pl-[16px] text-[16px] font-[400]"
                ></input>
              </div>
            </div>
            <div className="mt-[24px]">
              <label htmlFor="Newsletter-responsive-modal-3">
                <h1 className="text-[#287DF3] text-[16px]">
                  Subscribe to our Newsletter
                </h1>
              </label>
            </div>
            <div className="flex justify-between gap-[20px] mt-[200px] w-full">
              <Link
                className="text-[#FFFFFF] bg-[#FB641B] w-full h-[48px] rounded-[8px] font-[500]text-[16px]"
                href="/profile/editProfile"
              >
                {" "}
                <button className="text-[#FFFFFF] bg-[#FB641B] w-full h-[48px] rounded-[8px] font-[500]text-[16px]">
                  Edit Profile{" "}
                </button>
              </Link>

              <Link
                className="text-[#FFFFFF] bg-[#FB641B] w-full h-[48px] rounded-[8px] font-[500]text-[16px]"
                href="/profile/changesPassword"
              >
                {" "}
                <button className="text-[#FFFFFF] bg-[#FB641B] w-full h-[48px] rounded-[8px] font-[500]text-[16px]">
                  Change Password
                </button>
              </Link>
            </div>
          </div>
        </div>
        <input
          type="checkbox"
          id="Email-responsive-modal-3"
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="bg-[#FFFFFF] w-full mx-[30px] h-[211px] rounded-[8px] relative">
            <label
              htmlFor="Email-responsive-modal-3"
              className="absolute right-5 top-3"
            >
              ✕
            </label>
            <div className=" mt-[16px]">
              <h3 className="text-[#001E00] text-[20px] font-[400] ml-[16px]">
                Email Address
              </h3>
              <div className="mt-[16px]">
                <h1 className="text-[#001E00] text-[14px] ml-[16px]">Email</h1>
                <form className="mt-[12px] mx-[16px]">
                  <input
                    type="text"
                    placeholder="Enter your new mail"
                    className="EmailChangeInputRes w-full h-[40px]  focus:border-[#B7B7B7] pl-[13px] placeholder:pl-[1px] placeholder:text-[14px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none"
                  ></input>
                  <div className=" flex justify-center mt-[18px] mb-[16px]">
                    <button className="w-[172px] h-[48px] bg-[#FB641B] rounded-[4px]">
                      <span className="text-white">Save</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <input
          type="checkbox"
          id="Mobile-responsive-modal-3"
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="bg-[#FFFFFF] w-full mx-[24px] h-[211px] rounded-[8px] relative">
            <label
              htmlFor="Mobile-responsive-modal-3"
              className="absolute right-5 top-3"
            >
              ✕
            </label>
            <div className=" mt-[16px] ">
              <h3 className="text-[#001E00] text-[20px] font-[400] ml-[16px]">
                Mobile Number
              </h3>
              <div className="mt-[16px]">
                <h1 className="text-[#001E00] text-[14px] ml-[16px]">Number</h1>
                <form className="mt-[12px] mx-[16px]">
                  <input
                    type="text"
                    placeholder="Enter your new Number"
                    className="EmailChangeInputRes w-full h-[40px]  focus:border-[#B7B7B7] pl-[13px] placeholder:pl-[1px] placeholder:text-[14px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none"
                  ></input>
                  <div className=" flex justify-center mt-[18px] mb-[16px]">
                    <button className="w-[172px] h-[48px] bg-[#FB641B] rounded-[4px]">
                      <span className="text-white">Save</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <input
          type="checkbox"
          id="Newsletter-responsive-modal-3"
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="bg-[#FFFFFF] w-full mx-[24px] h-[211px] rounded-[8px] relative">
            <label
              htmlFor="Newsletter-responsive-modal-3"
              className="absolute right-5 top-3"
            >
              ✕
            </label>
            <div className=" mt-[16px] ">
              <h3 className="text-[#001E00] text-[20px] font-[400] ml-[16px]">
                Newsletter Subscription
              </h3>
              <div className="mt-[16px]">
                <h1 className="text-[#001E00] text-[14px] ml-[16px]">Email</h1>
                <form className="mt-[12px] mx-[16px]">
                  <input
                    type="text"
                    placeholder="Enter your new mail"
                    className="EmailChangeInputRes w-full h-[40px]  focus:border-[#B7B7B7] pl-[13px] placeholder:pl-[1px] placeholder:text-[14px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none"
                  ></input>
                  <div className=" flex justify-center  mt-[18px] mb-[16px]">
                    <button className="w-[172px] h-[48px] bg-[#FB641B] rounded-[4px]">
                      <span className="text-white">Subcribe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
