import CampaignManagement from "../components/CampaignManagement/CampaignManagement";
import CampaignManagementOne from "../components/CampaignManagement/CampaignManagementOne";
import CampaignManagementThree from "../components/CampaignManagement/CampaignManagementThree";
import CampaignManagementTwo from "../components/CampaignManagement/CampaignManagementTwo";
import CouponManagement02 from "../components/CouponManagement02/CouponManagement02";
import EditProducts from "../components/EditProducts/EditProducts";
import EditProductsTwo from "../components/EditProducts/EditProductsTwo";
import ReportManagement from "../components/FeedbackManagement/ReportManagement";
import ReportManagementOne from "../components/FeedbackManagement/ReportManagementOne";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import ManageReview from "../components/ManageReview/ManageReview";
import ManageReviewList from "../components/ManageReviewList/ManageReviewList";
import OrderHistory from "../components/orderHistory.js/OrderHistory";
import OrderNotificationTable from "../components/OrderNotification/OrderNotificationTable";
import OrderOverview from "../components/OrderOverview";
import OrderTrackingPage01 from "../components/OrderTrackingPage01/OrderTrackingPage01";
import AllProduct from "../components/ProductCampaignMain/AllProduct";
import ProductCampaignFive from "../components/ProductCampaignMain/ProductCampaignFive";
import ProductCampaignFour from "../components/ProductCampaignMain/ProductCampaignFour";
import ProductCampaignSix from "../components/ProductCampaignMain/ProductCampaignSix";
import ProductCampaignThree from "../components/ProductCampaignMain/ProductCampaignThree";
import ProductInvoices from "../components/ProductInvoices/ProductInvoices";
import ProductInvoicesDetails from "../components/ProductInvoices/ProductInvoicesDetails/ProductInvoicesDetails";
import QuestionAndAnswer from "../components/QuestionAndAnswer/QuestionAndAnswer";
import ReturnProducts from "../components/ReturnProducts/ReturnProducts";
import ContactUs from "../components/SellerSupport/ContactUs";
import ContactUsOne from "../components/SellerSupport/ContactUsOne";
import HelpCenter from "../components/SellerSupport/HelpCenter";
import LiveChatTwo from "../components/SellerSupport/LiveChatTwo";
import Sellerverification from "../components/sellerverification/Sellerverification";
import SellerVerificationPage1 from "../components/SellerVerificationPage1/SellerVerificationPage1";
import SellerVerificationPage2 from "../components/SellerVerificationPage2/SellerVerificationPage2";
import SellerVerificationPage3 from "../components/SellerVerificationPage3/SellerVerificationPage3";
import SellerVerificationPage5 from "../components/SellerVerificationPage5/SellerVerificationPage5";
import ProductShipping from "../components/ShippingManagement/ProductShipping";
import UploadProduct from "../components/UploadProduct/UploadProduct";
import ManageOrders from "../pages/manageOrders/ManageOrders";
import OrderNotification from "../pages/OrderNotification/OrderNotification";

export const manageProductsArray = [
  {
    title: "EditProducts",
    href: "editProduct",
    element: <EditProducts />,
  },
  {
    title: "Orders Tracking",
    href: "orderTrackingPage01",
    element: <OrderTrackingPage01 />,
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
    title: 'Feedback',
    href: 'feedback',
    element: <ManageReview></ManageReview>
  },
  {
    title: "AllProduct",
    href: "allProduct",
    element: <AllProduct></AllProduct>,
  },
  {
    title: "ProductCampaignThree",
    href: "productCampaignThree",
    element: <ProductCampaignThree></ProductCampaignThree>,
  },
  {
    title: "ProductCampaignFour",
    href: "productCampaignFour",
    element: <ProductCampaignFour></ProductCampaignFour>,
  },
  {
    title: "ProductCampaignFive",
    href: "productCampaignFive",
    element: <ProductCampaignFive></ProductCampaignFive>,
  },
  {
    title: "ProductCampaignSix",
    href: "productCampaignSix",
    element: <ProductCampaignSix></ProductCampaignSix>,
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
    element: <ManageOrders></ManageOrders>,
  },
  {
    title: "ManageReview",
    href: "manageReview",
    element: <ManageReviewList></ManageReviewList>
    // element: <QuestionAndAnswer></QuestionAndAnswer>
  },
  {
    title: "Question and Answer",
    href: "questionanswer",
    element: <QuestionAndAnswer></QuestionAndAnswer>
  },
  {
    title: "OrderHistory",
    href: "orderHistory",
    element: <OrderHistory></OrderHistory>,
  },
  {
    title: "returnProducts",
    href: "returnProduct",
    element: <ReturnProducts></ReturnProducts>,
  },
  {
    title: "CampaignManagementThree",
    href: "campaignManagementThree",
    element: <CampaignManagementThree></CampaignManagementThree>,
  },
  {
    title: "HelpCenter",
    href: "helpCenter",
    element: <HelpCenter></HelpCenter>,
  },
  {
    title: "ContactUs",
    href: "contactUs",
    element: <ContactUs></ContactUs>,
  },
  {
    title: "ContactUsOne",
    href: "contactUsOne",
    element: <ContactUsOne></ContactUsOne>,
  },
  {
    title: "LiveChatTwo",
    href: "liveChatTwo",
    element: <LiveChatTwo></LiveChatTwo>,
  },
  {
    title: "OrderOverview",
    href: "orderOverview",
    element: <OrderOverview></OrderOverview>,
  },
  {
    title: "ReportManagement",
    href: "reportManagement",
    element: <ReportManagement></ReportManagement>,
  },
  {
    title: "ReportManagementOne",
    href: "reportManagementOne",
    element: <ReportManagementOne></ReportManagementOne>,
  },
  {
    title: "OrderNotification",
    href: "orderNotification",
    element: <OrderNotification></OrderNotification>,
  },
  {
    title: "Coupon Management",
    href: "couponmanagement02",
    element: <CouponManagement02></CouponManagement02>,
  },
];
