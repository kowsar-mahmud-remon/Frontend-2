import React from "react";
import ManageAccoutSideBar from "./manageAccoutSideBar";
import ProfileResponsive from "./ProfileResponsive";
import UpdatedSideBar from "./updatedSideBar";

const ManageAccountLayout = ({ children, slug }) => {

    return (

        <div className="flex justify-center">
            <div className='md:flex gap-5 my-8 w-full'>
                <div className='hidden  md:block w-[30%]'>
                    {/* <ManageAccoutSideBar /> */}
                    <UpdatedSideBar/>
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
