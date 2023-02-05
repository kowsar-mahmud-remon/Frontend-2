import React from "react";
import ProductInvoices from "../../components/ProductInvoices/ProductInvoices";
import NavicationWithSideNavLayout from "../../layouts/NavicationWithSideNavLayout";

const ProductInv = () => {
  return (
    <div>
      <NavicationWithSideNavLayout>
        <ProductInvoices></ProductInvoices>
      </NavicationWithSideNavLayout>
    </div>
  );
};

export default ProductInv;
