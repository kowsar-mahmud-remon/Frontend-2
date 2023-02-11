import React from 'react';
import DontSelectProductCheckout from '../../components/DontSelectProductCheckout/DontSelectProductCheckout';
import PrivateRoute from '../../Utils/PrivateRoute';

const index = () => {
    return (
        <div>
            <PrivateRoute>
                <DontSelectProductCheckout />
            </PrivateRoute>
        </div>
    );
};

export default index;