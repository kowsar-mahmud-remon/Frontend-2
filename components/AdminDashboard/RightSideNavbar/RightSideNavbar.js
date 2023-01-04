import Image from "next/image";
import React from "react";
import logo from "../../../assets/images/adminDashboard/Logo.png";
import user from "../../../assets/images/adminDashboard/user.png";
import { FaChevronDown } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const RightSideNavbar = () => {
  return (
    <div>
      <div
        className="w-[355px] h-full shadow-md bg-white absolute"
        id="sidenavSecExample"
      >
        <div className="pt-4 pb-2 px-6">
          {/* logo */}
          <Image
            className="mx-auto my-5"
            src={logo}
            width="244"
            height="170"
            alt="logo image"
          />
          {/* user */}
          <a href="some">
            <div className="flex items-center  shadow-lg border rounded w-[282px] h-[65px] ">
              <div className="shrink-0">
                <Image
                  className="mx-auto my-5 pl-[12px]"
                  src={user}
                  width="45"
                  height="45"
                  alt="user image"
                />
              </div>
              <div className="grow ml-3">
                <p className="text-sm font-bold text-[#FB641B]">Abdul Korim</p>
                <p className="text-[#686868] text-[12px]">Admin</p>
              </div>
            </div>
          </a>
        </div>
        {/* dash navbar */}
        <ul className="relative  border mt-4 shadow-lg pt-4 pb-2  w-[282px] mx-auto rounded">
          <li className="relative">
            <p className="px-6 py-4 bg-[#F2F2F2] w-[264px] mx-auto text-[#FB641B] font-semibold ">
              Dashboard
            </p>
          </li>
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <Menu>
              <Menu.Button className="py-4 px-6 h-12 flex justify-center items-center">
                <span className="mr-[172px]">Orders</span>
                <FaChevronDown className="w-3 h-3"></FaChevronDown>
              </Menu.Button>

              <Menu.Items>
                <Menu.Item className="py-4 px-6 h-12  block">
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Test 1
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="py-4 px-6 h-12">
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500 "}`}
                      href="/account-settings"
                    >
                      Test 2
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <Menu>
              <Menu.Button className="py-4 px-6 h-12 flex justify-center items-center">
                <span className="mr-[98px] whitespace-nowrap">
                  Products Delivery
                </span>
                <FaChevronDown className="w-3 h-3"></FaChevronDown>
              </Menu.Button>

              <Menu.Items>
                <Menu.Item className="py-4 px-6 h-12  block">
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Test 1
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <Menu>
              <Menu.Button className="py-4 px-6 h-12 flex justify-center items-center">
                <span className="mr-[85px] whitespace-nowrap">
                  Seller Management
                </span>
                <FaChevronDown className="w-3 h-3"></FaChevronDown>
              </Menu.Button>

              <Menu.Items>
                <Menu.Item className="py-4 px-6 h-12  block">
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Test 1
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <Menu>
              <Menu.Button className="py-4 px-6 h-12 flex justify-center items-center">
                <span className="mr-[48px] whitespace-nowrap">
                  Customers Management
                </span>
                <FaChevronDown className="w-3 h-3"></FaChevronDown>
              </Menu.Button>

              <Menu.Items>
                <Menu.Item className="py-4 px-6 h-12  block">
                  {({ active }) => (
                    <a
                      className={`${active && "bg-blue-500"}`}
                      href="/account-settings"
                    >
                      Test 1
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>

          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <a
              className="flex items-center py-4 px-6 h-12 overflow-hidden   whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <span>Live Chat</span>
            </a>
          </li>
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <a
              className="flex items-center py-4 px-6 h-12 overflow-hidden   whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <span>Mail Support</span>
            </a>
          </li>
        </ul>
        <p className="text-[16px] text-[#686868] pl-6 my-3">
          Profile & Settings
        </p>
        <ul className="relative  border mt-4 shadow-lg pt-4 pb-2  w-[282px] mx-auto rounded">
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <a
              className="flex items-center py-4 px-6 h-12 overflow-hidden   whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <span>Profile</span>
            </a>
          </li>
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <a
              className="flex items-center py-4 px-6 h-12 overflow-hidden   whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <span>Account & Settings</span>
            </a>
          </li>
          <li className="relative border-t-2 mt-1" id="sidenavSecEx2">
            <a
              className="flex items-center py-4 px-6 h-12 overflow-hidden   whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <span className="mr-[165px]">Logout</span>
              <FaSignOutAlt></FaSignOutAlt>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideNavbar;
