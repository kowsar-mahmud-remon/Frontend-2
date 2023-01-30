import React from 'react';
import ManageAccoutSideBar from './manageAccoutSideBar';

const ManageAccountLayout = ({ children }) => {
    return (
        <div className='flex'>
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

