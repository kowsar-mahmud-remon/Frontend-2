import React from "react";
import ManageProductsSideNav from "../components/ManageProductsSideNav/ManageProductsSideNav";
import SellerRightNav from "../components/SellerRightNav/SellerRightNav";

const ManageProductsLayout = ({ children, slug }) => {
  return (
    <div className="md:flex w-full">
      <SellerRightNav />
      <div className="hidden lg:block ">
        <ManageProductsSideNav />
      </div>

      <div className="md:mr-[120px] w-full ml-6">{children}</div>
    </div>
  );
};

export default ManageProductsLayout;
