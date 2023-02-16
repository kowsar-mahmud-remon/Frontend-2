import CampaignManagement from "../components/CampaignManagement/CampaignManagement";
import CampaignManagementOne from "../components/CampaignManagement/CampaignManagementOne";
import CampaignManagementThree from "../components/CampaignManagement/CampaignManagementThree";
import CampaignManagementTwo from "../components/CampaignManagement/CampaignManagementTwo";
import EditProducts from "../components/EditProducts/EditProducts";
import EditProductsTwo from "../components/EditProducts/EditProductsTwo";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import ManageReview from "../components/ManageReview/ManageReview";
import OrderHistory from "../components/orderHistory.js/OrderHistory";
import AllProduct from "../components/ProductCampaignMain/AllProduct";
import ProductCampaignFive from "../components/ProductCampaignMain/ProductCampaignFive";
import ProductCampaignFour from "../components/ProductCampaignMain/ProductCampaignFour";
import ProductCampaignThree from "../components/ProductCampaignMain/ProductCampaignThree";
import ProductInvoices from "../components/ProductInvoices/ProductInvoices";
import ProductInvoicesDetails from "../components/ProductInvoices/ProductInvoicesDetails/ProductInvoicesDetails";
import Sellerverification from "../components/sellerverification/Sellerverification";
import SellerVerificationPage1 from "../components/SellerVerificationPage1/SellerVerificationPage1";
import SellerVerificationPage2 from "../components/SellerVerificationPage2/SellerVerificationPage2";
import SellerVerificationPage3 from "../components/SellerVerificationPage3/SellerVerificationPage3";
import SellerVerificationPage5 from "../components/SellerVerificationPage5/SellerVerificationPage5";
import UploadProduct from "../components/UploadProduct/UploadProduct";
import ManageOrders from "../pages/manageOrders/ManageOrders";

export const manageProductsArray = [
  {
    title: "EditProducts",
    href: "editProduct",
    element: <EditProducts />,
  },
  {
    title: "EditProductsTwo",
    href: "editProductsTwo",
    element: <EditProductsTwo />,
  },
  {
    title: "CampaignManagement",
    href: "campaignManagement",
    element: <CampaignManagement></CampaignManagement>,
  },
  {
    title: "CampaignManagementOne",
    href: "campaignManagementOne",
    element: <CampaignManagementOne></CampaignManagementOne>,
  },
  {
    title: "CampaignManagementTwo",
    href: "campaignManagementTwo",
    element: <CampaignManagementTwo></CampaignManagementTwo>,
  },
  {
    title: "ManageProducts",
    href: "manageproducts",
    element: <ManageProduct></ManageProduct>,
  },
  {
    title: "ProductInvoices",
    href: "productInvoices",
    element: <ProductInvoices></ProductInvoices>,
  },
  {
    title: "uploadProducts",
    href: "uploadProducts",
    element: <UploadProduct></UploadProduct>,
  },
  {
    title: "ProductInvoiceDetails",
    href: "productInvoiceDetails",
    element: <ProductInvoicesDetails></ProductInvoicesDetails>,
  },
  {
    title: "AllProduct",
    href: "allProduct",
    element: <AllProduct></AllProduct>,
  },
  {
    title: "SellerVerificationPage1",
    href: "sellerVerificationPage1",
    element: <SellerVerificationPage1></SellerVerificationPage1>,
  },
  {
    title: "SellerVerificationPage2",
    href: "sellerVerificationPage2",
    element: <SellerVerificationPage2></SellerVerificationPage2>,
  },
  {
    title: "SellerVerificationPage3",
    href: "sellerVerificationPage3",
    element: <SellerVerificationPage3></SellerVerificationPage3>,
  },
  {
    title: "SellerVerificationPage5",
    href: "sellerVerificationPage5",
    element: <SellerVerificationPage5></SellerVerificationPage5>,
  },
  {
    title: "ManageOrders",
    href: "manageOrders",
    element: <ManageOrders></ManageOrders>
  },
  {
    title: 'CampaignManagementThree',
    href: 'campaignManagementThree',
    element: <CampaignManagementThree></CampaignManagementThree>
  }

];
