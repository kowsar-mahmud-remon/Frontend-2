import React from 'react';
import ManageAccountResponsive from './ManageAccountResponsive';
import ManageAccoutSideBar from './manageAccoutSideBar';
import ProfileResponsive from './ProfileResponsive';

const ManageAccountLayout = ({ children, slug }) => {
    console.log(slug)
    return (
        <div className='flex my-8 mx-5 gap-[40px] xl:mx-4'>

            <div className='hidden lg:block'>
           
                <ManageAccoutSideBar />

            </div>
            <div className='lg:hidden '>
                {
                    !slug?.length> 0 && <ProfileResponsive></ProfileResponsive> 
                }
                
           
            </div>
            <div>
                {
                    children
                }
            </div>
        </div>
    );
};

export default ManageAccountLayout;

