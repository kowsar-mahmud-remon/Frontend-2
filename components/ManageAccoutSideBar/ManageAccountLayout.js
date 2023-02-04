import React from 'react';
import ManageAccoutSideBar from './manageAccoutSideBar';

const ManageAccountLayout = ({ children }) => {
    return (
        <div className='flex my-8 mx-5 gap-[40px] xl:mx-4'>
            <div>
                <ManageAccoutSideBar />
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

