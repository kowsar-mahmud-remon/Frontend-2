import React from "react";
import ManageAccoutSideBar from "./manageAccoutSideBar";
import ProfileResponsive from "./ProfileResponsive";

const ManageAccountLayout = ({ children, slug }) => {

    return (
        <div className="">
            <div className='flex my-8  justify-center  xl:w-[100%] xl:gap-[40px] '>


                <div className='hidden  lg:block'>
                    <ManageAccoutSideBar />
                </div>
                <div className='lg:hidden block'>
                    {
                        !slug?.length > 0 && <ProfileResponsive></ProfileResponsive>
                    }


                </div>
                <div className="lg:w-[70%]  ">
                    {
                        children
                    }
                </div>
            </div>
        </div>

    );
};

export default ManageAccountLayout;
