import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navication from "../components/Navication/Navication";
import SideNav from "../components/SideNav/SideNav";
import { handleCategorySideNav } from "../features/category/categorySlice";
// import styles from '../styles/Home.module.css'
import CatIcon from "../assets/images/Group 2399.png";
import Image from "next/image";

const NavicationWithSideNavLayout = ({ children }) => {
  const {
    category: { isActiveCategory },
  } = useSelector((state) => state || {});
  const dispatch = useDispatch();

  const options = [
    {
      title: "Just For You",
      total: "",
    },
    {
      title: "FlashSale",
      total: "",
    },
    {
      title: "Top Offer",
      total: "300",
    },
    {
      title: "Daily Deals",
      total: "20",
    },
    {
      title: "Recently Viewed",
      total: "300",
    },
    {
      title: "Top ranking",
      total: "",
    },
    {
      title: "New arrivals",
      total: "",
    },
  ];
  return (
    <main>
      <section
        className={`page-side-nav-wraper my-7 mx-5 xl:mx-12 sideNavTransition`}
      >
        <div className="mb-6 flex items-center">
          <div className="w-72">
            <button
              className="cursor-pointer flex justify-center items-center py-3 mr-32 px-6 rounded-full border border-[#FB641B]"
              onClick={() => dispatch(handleCategorySideNav())}
            >
              <Image src={CatIcon} alt="icon" />
              <p className="ml-3 text-[18px] font-semibold">Categories</p>
            </button>
          </div>
          <div className="ml-5 w-full flex flex-wrap ">
            {options.map((option, index) => (
              <div key={index} className="mr-8 mb-3">
                <button className="px-8 py-3 rounded-full shadow-lg ">
                  <div className="flex justify-center items-center">
                    <p className="font-[500] text-[18px]">{option.title}</p>
                    <p className="text-sm text-[#FB641B] ml-1">{option.total}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <SideNav />
        <div
          className={`${
            isActiveCategory ? "deactive-page-body" : "active-page-body"
          } w-[100%-300px]`}
          id="page-body"
        >
          {children}
        </div>
      </section>
    </main>
  );
};

export default NavicationWithSideNavLayout;
