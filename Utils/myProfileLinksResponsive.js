import AddNewAddress from "../components/AddressBook/AddNewAddress"
import AddressBook from "../components/AddressBook/AddressBook"
import ManageAccount from "../components/ManageAccoutSideBar/ManageAccount"
import ManageAccountResponsive from "../components/ManageAccoutSideBar/ManageAccountResponsive"
import MyReviewsResponsive from "../components/ManageAccoutSideBar/MyReviewsResponsive"
import Profile from "../components/ManageAccoutSideBar/Profile"
import WriteReview from "../components/ManageAccoutSideBar/WriteReview"
import WriteReviewResponsive from "../components/ManageAccoutSideBar/WriteReviewResponsive"
import MyOrder from "../components/MyOrder/MyOrder"
import MyOrderCancelation from "../components/MyOrderCancelation/MyOrderCancelation"
import MyOrderDetails from "../components/myOrderDetails/myOrderDetails"

const profileLinksResponsiveObj = [
  {
    title: "Manage My Account",
    href: "manageAccount",
    element: <ManageAccountResponsive />,
  },
  {
    title: "My Profile",
    href: "myProfile",
    element: <Profile />,
  },
  {
    title: "Address book",
    href: "addressBook",
    element: <AddressBook />,
  },
  {
    title: "My Payment Options",
    href: "paymentOptions",
    element: <ManageAccountResponsive />,
  },
  {
    title: "My Orders",
    href: "myOrders",
    element: <MyOrder />,
  },
  {
    title: "My Returns",
    href: "myReturns",
    element: <ManageAccountResponsive />,
  },
  {
    title: "My Cancellations",
    href: "myCancellations",
    element: <ManageAccountResponsive />,
  },
  {
    title: "My Reviews",
    href: "myReviews",
    // element:<MyReviewsResponsive/>,
    element: <WriteReviewResponsive></WriteReviewResponsive>,
  },
  {
    title: "My Wishlist",
    href: "myWishlist",
    element: <ManageAccountResponsive />,
  },
  {
    title: "Followed Stores",
    href: "followedStores",
    element: <ManageAccountResponsive />,
  },
  {
    title: "Sell On Bangla Big Store",
    href: "sellStore",
    element: <ManageAccountResponsive />,
  },
  {
    title: "MyOrders",
    href: "myOrderDetails",
    element: <MyOrderDetails />,
  },
  {
    title: "OrderCancelation",
    href: "myOrderCancelation",
    element: <MyOrderCancelation />,
  },
  {
    title: "WriteReview",
    href: "writeReview",
    element: <WriteReview />,
  },
];

export default profileLinksResponsiveObj