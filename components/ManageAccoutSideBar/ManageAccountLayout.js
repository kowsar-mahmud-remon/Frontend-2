import React from "react";
import ManageAccoutSideBar from "./manageAccoutSideBar";
import ProfileResponsive from "./ProfileResponsive";

const ManageAccountLayout = ({ children, slug }) => {

    return (
        <div className='lg:flex lg:my-8 lg:justify-center md:px-4 w-full lg:mx-5 lg:gap-[40px] xl:mx-4'>

            <div className='hidden lg:block'>

                <ManageAccoutSideBar />

            </div>
            <div className='lg:hidden block'>
                {
                    !slug?.length > 0 && <ProfileResponsive></ProfileResponsive>
                }


            </div>
            <div className="md:w-[70%]">
                {
                    children
                }
            </div>
        </div>
    );
};

export default ManageAccountLayout;
