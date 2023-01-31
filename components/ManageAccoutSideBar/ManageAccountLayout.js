import React from 'react';
import ManageAccoutSideBar from './manageAccoutSideBar';
import ProfileResponsive from './ProfileResponsive';

const ManageAccountLayout = ({ children }) => {
    return (
        <div className='flex my-8 mx-5 gap-[40px] xl:mx-4'>
            <div className='hidden lg:block'>
                <ManageAccoutSideBar />

            </div>
            <div className='lg:hidden '>
                <ProfileResponsive></ProfileResponsive>
            </div>
            <div className='hidden lg:block'>
                {
                    children
                }
            </div>
        </div>
    );
};

export default ManageAccountLayout;

