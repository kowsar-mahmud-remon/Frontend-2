import React from "react";
import ManageAccoutSideBar from "./manageAccoutSideBar";
import ProfileResponsive from "./ProfileResponsive";

const ManageAccountLayout = ({ children, slug }) => {

    return (

        <div className="flex justify-center">
            <div className='flex gap-5 my-8 w-full'>
                <div className='hidden  md:block w-[30%]'>
                    <ManageAccoutSideBar />
                </div>
                <div className='md:hidden block'>
                    {
                        !slug?.length > 0 && <ProfileResponsive></ProfileResponsive>
                    }
                </div>
                <div className="md:w-[70%] w-full">
                    {
                        children
                    }
                </div>

            </div>

        </div>

    );
};

export default ManageAccountLayout;
