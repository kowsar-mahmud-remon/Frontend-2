import React from 'react';
import CheckoutPageOrderPageTwoProductInOneShop from '../../components/CheckoutPageOrderPageTwoProductInOneShop/CheckoutPageOrderPageTwoProductInOneShop';
import CheckPickUpPointsSelectPickUpPointsPage from '../../components/CheckPickUpPointsSelectPickUpPointsPage/CheckPickUpPointsSelectPickUpPointsPage';
import DontSelectProductCheckout from '../../components/DontSelectProductCheckout/DontSelectProductCheckout';
import PrivateRoute from '../../Utils/PrivateRoute';

const index = () => {
    return (
        <div>
            <PrivateRoute>
                {/* <DontSelectProductCheckout /> */}
                {/* <CheckPickUpPointsSelectPickUpPointsPage></CheckPickUpPointsSelectPickUpPointsPage> */}
                <CheckoutPageOrderPageTwoProductInOneShop></CheckoutPageOrderPageTwoProductInOneShop>
            </PrivateRoute>
        </div>
    );
};

export default index;