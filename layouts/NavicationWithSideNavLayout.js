import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SideNav from "../components/SideNav/SideNav";


import SideNavigationNavBar from "../components/SideNavigationNavBar/SideNavigationNavBar";


const NavicationWithSideNavLayout = ({ children }) => {
  const {
    category: { isActiveCategory },
  } = useSelector((state) => state || {});
  const dispatch = useDispatch();

  
  return (
    <main>
      <section
        className={`page-side-nav-wraper my-7 md:mx-5 xl:mx-12 sideNavTransition`}
      >
        <SideNavigationNavBar />
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
