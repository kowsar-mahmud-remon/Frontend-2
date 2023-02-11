import CampaignManagement from "../components/CampaignManagement/CampaignManagement";
import EditProducts from "../components/EditProducts/EditProducts";
import EditProductsTwo from "../components/EditProducts/EditProductsTwo";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import ProductInvoices from "../components/ProductInvoices/ProductInvoices";
import ProductInvoicesDetails from "../components/ProductInvoices/ProductInvoicesDetails/ProductInvoicesDetails";
import UploadProduct from "../components/UploadProduct/UploadProduct";

export const manageProductsArray = [
  {
    title: "EditProducts",
    href: "editProduct",
    element: <EditProducts />,
  },
  {
    title: "EditProductsTwo",
    href: "editProductsTwo",
    element: <EditProductsTwo />
  },
  {
    title: "CampaignManagement",
    href: "campaignManagement",
    element: <CampaignManagement></CampaignManagement>
  },
  {
    title: "ManageProducts",
    href: "manageproducts",
    element: <ManageProduct></ManageProduct>
  },
  {
    title: "ProductInvoices",
    href: "productInvoices",
    element: <ProductInvoices></ProductInvoices>
  },
  {
    title: 'uploadProducts',
    href: 'uploadProducts',
    element: <UploadProduct></UploadProduct>

  },
  {
    title: 'ProductInvoiceDetails',
    href: 'ProductInvoiceDetails',
    element: <ProductInvoicesDetails></ProductInvoicesDetails>

  }

];

