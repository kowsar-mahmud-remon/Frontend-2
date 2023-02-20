import React from "react";
import ProfileResponsive from "../components/ManageAccoutSideBar/ProfileResponsive";
import ManageProductsSideNav from "../components/manageproductsSideNav/manageproductsSideNav";
import SellerRightNav from "../components/SellerRightNav/SellerRightNav";
// import ManageAccountResponsive from './ManageAccountResponsive';
// import ManageAccoutSideBar from './manageAccoutSideBar';

const ManageProductsLayout = ({ children, slug }) => {
  return (
    <div
      className="md:flex w-full"
      // className='flex my-8 justify-center mx-5 gap-[40px] xl:mx-4'
    >
      <SellerRightNav />
      <div className="hidden lg:block ">
        <ManageProductsSideNav />
      </div>

      {/* <div className='lg:hidden '>
        {
          !slug?.length > 0 && <ProfileResponsive></ProfileResponsive>
        }
      </div> */}

      <div className="md:mr-[120px] w-full ml-6">{children}</div>
    </div>
  );
};

export default ManageProductsLayout;
