import React from 'react';
import ManageAccountResponsive from './ManageAccountResponsive';
import ManageAccoutSideBar from './manageAccoutSideBar';
import ProfileResponsive from './ProfileResponsive';

const ManageAccountLayout = ({ children, slug }) => {
  
    return (
        <div className='lg:flex lg:my-8 lg:justify-center lg:mx-5 lg:gap-[40px] xl:mx-4'>

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

