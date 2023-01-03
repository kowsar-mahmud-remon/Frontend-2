import Link from "next/link";
import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import Navication from "../../components/Navication/Navication";

const index = () => {
  return (
    <div>
      <Navication></Navication>
      <div className="w-[742px] mx-auto mt-10">
        <p>
          <span className="text-[#686868]">Home</span>/
          <span className="text-[#287DF3]">Create an Account</span>
        </p>
        <div className="flex justify-between my-3">
          <p className="text-[#FB641B] text-[24px]">Create an Account</p>
          <p>
            Already have an account?{" "}
            <Link className="text-[#287DF3]" href="/login">
              Login
            </Link>
          </p>
        </div>
        <p className="text-[#686868]">
          Welcome! Our Banglar Big Store, Users are waiting <br></br> to buy
          your product.
        </p>
        <div>
          <form className="p-10  bg-white  mt-10 rounded-xl shadow-xl w-[742px]">
            <label
              className="font-medium block mb-1 mt-6 text-gray-700 mt-10"
              htmlFor="username"
            >
              Phone Number*
            </label>
            <input
              className=" border-2 rounded w-full py-3 px-3  border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16"
              id="username"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Please Provide your phone number"
            />

            <label
              className="font-medium block mb-1 mt-6 text-gray-700"
              htmlFor="password"
            >
              Password*
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <input
                  className="hidden js-password-toggle"
                  id="toggle"
                  type="checkbox"
                />
                <label
                  className=" px-2 py-1 text-sm text-gray-600 cursor-pointer js-password-label"
                  htmlFor="toggle"
                >
                  <FaEyeSlash></FaEyeSlash>
                </label>
              </div>
              <input
                className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 js-password"
                id="password"
                type="password"
                autoComplete="off"
                placeholder="Minimum 6 Characters with a number And a letter"
              />
            </div>
            <label
              className="font-medium block mb-1 mt-6 text-gray-700"
              htmlFor="password"
            >
              Confirm Password*
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <input
                  className="hidden js-password-toggle"
                  id="toggle"
                  type="checkbox"
                />
                <label
                  className=" px-2 py-1 text-sm text-gray-600 cursor-pointer js-password-label"
                  htmlFor="toggle"
                >
                  <FaEyeSlash></FaEyeSlash>
                </label>
              </div>
              <input
                className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 js-password"
                id="password"
                type="password"
                autoComplete="off"
                placeholder="Minimum 6 Characters with a number And a letter"
              />
            </div>

            <button
              className="w-full bg-[#FB641B]  text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create an Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
