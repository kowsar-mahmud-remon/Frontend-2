import CampaignManagement from "../components/CampaignManagement/CampaignManagement";
import CampaignManagementOne from "../components/CampaignManagement/CampaignManagementOne";
import CampaignManagementThree from "../components/CampaignManagement/CampaignManagementThree";
import CampaignManagementTwo from "../components/CampaignManagement/CampaignManagementTwo";
import AvailableCoupon from "../components/CoupoManagement/AvailableCoupon";
import CoupoManagement from "../components/CoupoManagement/CoupoManagement";
import CouponManagement02 from "../components/CouponManagement02/CouponManagement02";
import EditProducts from "../components/EditProducts/EditProducts";
import EditProductsTwo from "../components/EditProducts/EditProductsTwo";
import ReportManagement from "../components/FeedbackManagement/ReportManagement";
import ReportManagementOne from "../components/FeedbackManagement/ReportManagementOne";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import ManageProductUpdated from "../components/ManageProduct/ManageProductUpdated";
import ManageReview from "../components/ManageReview/ManageReview";
import ManageReviewList from "../components/ManageReviewList/ManageReviewList";

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
import SellerVerificationPage1 from "../components/SellerVerificationPage1/SellerVerificationPage1";
import SellerVerificationPage2 from "../components/SellerVerificationPage2/SellerVerificationPage2";
import SellerVerificationPage3 from "../components/SellerVerificationPage3/SellerVerificationPage3";
import SellerVerificationPage5 from "../components/SellerVerificationPage5/SellerVerificationPage5";
import ProductShipping from "../components/ShippingManagement/ProductShipping";
import UploadProduct from "../components/UploadProduct/UploadProduct";
import ManageOrders from "../pages/manageOrders/ManageOrders";

import RetrunsProductMain from "../components/RetrunsProductMain/RetrunsProductMain";
import CommissionManagement from "../components/Tax&Offers/CommissionManagement";
import LiveChat from "../components/SellerSupport/LiveChat";
import LiveChatOne from "../components/SellerSupport/LiveChatOne";
import SalesOverviewItems from "../components/SalesOverviewItems/SalesOverviewItems";
import SalesOverview from "../components/SalesOverview/SalesOverview";
import CouponManagement03 from "../components/CouponManagement03/CouponManagement03";
import CouponPayNow from "../components/CouponPayNow/CouponPayNow";
import AccountStatement from "../components/AccountStatement/AccountStatement";
import TotalEarning from "../components/TotalEarning/TotalEarning";
import WithdrawBalance from "../components/WithdrawBalance/WithdrawBalance";
import TransactionPending from "../components/WithdrawBalance/TransactionPending";

import UpdateBankStatement from "../components/AccountStatement/UpdateBankStatement";
import Subscription from "../components/AccountSetting/Subscription";
import UpdateStatement from "../components/AccountStatement/UpdateStatement";
import NidCard from "../components/AccountStatement/NidCard";
import BankStatement from "../components/AccountStatement/BankStatement";
import OrderNotification from "../components/OrderNotification/OrderNotification";
import OrderHistory from "../components/OrderHistory/OrderHistory";
import PhoneSupport from "../components/SellerSupport/PhoneSupport";
import PerformanceReport from "../components/PerformanceReport/PerformanceReport";
import Chart from '../components/PerformanceReport/Chart/Chart.js'
import TaxManagement from "../components/Tax&Offers/TaxManagement";
import SubscriptionOne from "../components/AccountSetting/SubscriptionOne";
import SubscriptionTwo from "../components/AccountSetting/SubscriptionTwo";
import SubscriptionThree from "../components/AccountSetting/SubscriptionThree";
import AccountType from "../components/AccountType/AccountType";
import SubscriptionPage from "../components/SubscriptionPage/SubscriptionPage";
import ProductCampaign from "../components/ProductCampaignMain/ProductCampaign";
import OrdersTracking from "../components/ShippingManagement/OrdersTracking";
import AccountSetting from "../components/AccountSetting/AccountSetting";
import SellerProductUpload from "../components/SellerProductUpload/SellerProductUpload";

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
    // element: <ManageProduct></ManageProduct>,
    element: <ManageProductUpdated></ManageProductUpdated>,
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
    title: "Feedback",
    href: "feedback",
    element: <ManageReview></ManageReview>,
  },
  {
    title: "AllProduct",
    href: "allProduct",
    element: <AllProduct></AllProduct>,
  },
  {
    title: "ProductCampaign",
    href: "productCampaign",
    element: <ProductCampaign></ProductCampaign>,
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
    element: <ManageReviewList></ManageReviewList>,
    // element: <QuestionAndAnswer></QuestionAndAnswer>
  },
  {
    title: "Question and Answer",
    href: "questionanswer",
    element: <QuestionAndAnswer></QuestionAndAnswer>,
  },
  {
    title: "OrderHistory",
    href: "orderHistory",
    element: <OrderHistory></OrderHistory>,
  },
  {
    title: "returnProducts",
    href: "returnProduct",
    element: <RetrunsProductMain></RetrunsProductMain>,
  },
  {
    title: "returnProducts",
    href: "returnProductId",
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
    href: "couponmanagement",
    element: <CoupoManagement></CoupoManagement>,
    // element: <CouponManagement02></CouponManagement02>,
  },
  {
    title: "Available Coupon",
    href: "availablecoupon",
    element: <AvailableCoupon></AvailableCoupon>,
    // element: <CouponManagement02></CouponManagement02>,
  },
  {
    title: "Coupon Management02",
    href: "couponmanagement02",
    element: <CouponManagement02></CouponManagement02>,
  },
  {
    title: "ProductShipping",
    href: "productShipping",
    element: <ProductShipping></ProductShipping>,
  },
  {
    title: "CommissionManagement",
    href: "commissionManagement",
    element: <CommissionManagement></CommissionManagement>,
  },
  {
    title: "LiveChat",
    href: "liveChat",
    element: <LiveChat></LiveChat>,
  },
  {
    title: "LiveChatOne",
    href: "liveChatOne",
    element: <LiveChatOne></LiveChatOne>,
  },
  {
    title: "SalesOverview",
    href: "salesOverview",
    element: <SalesOverview></SalesOverview>,
  },
  {
    title: "SalesOverviewItems",
    href: "salesOverviewItems",
    element: <SalesOverviewItems></SalesOverviewItems>,
  },
  {
    title: "Coupon Management03",
    href: "couponmanagement03",
    element: <CouponManagement03></CouponManagement03>,
  },
  {
    title: "Coupon Pay",
    href: "couponpay",
    element: <CouponPayNow></CouponPayNow>,
  },
  {
    title: "Product Invoices Details",
    href: "productInvoicesDetails",
    element: <ProductInvoicesDetails></ProductInvoicesDetails>,
  },
  {
    title: "Account Statement",
    href: "accountStatement",
    element: <AccountStatement></AccountStatement>
  },
  {
    title: "Update Statement",
    href: "UpdateStatement",
    element: <UpdateStatement></UpdateStatement>
  },
  {
    title: "PhoneSupport",
    href: "phoneSupport",
    element: <PhoneSupport></PhoneSupport>
  },
  {
    title: "Total Earning",
    href: "totalearning",
    element: <TotalEarning></TotalEarning>
  },
  {
    title: "NID Card",
    href: "nidCard",
    element: <NidCard></NidCard>
  },
  {

    title: "Bank Statement",
    href: "BankStatement",
    element: <BankStatement></BankStatement>
  },
  {
    title: "Performance Report",
    href: "performancereport",
    element: <PerformanceReport></PerformanceReport>
  },

];
