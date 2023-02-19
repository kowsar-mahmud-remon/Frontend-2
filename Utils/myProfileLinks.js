import ManageAccount from "../components/ManageAccoutSideBar/ManageAccount";

import MyOrder from "../components/MyOrder/MyOrder";
import Profile from "../components/ManageAccoutSideBar/Profile";
import WriteReview from "../components/ManageAccoutSideBar/WriteReview";
import MyReviews from "../components/ManageAccoutSideBar/MyReviews";
import MyWishList from "../components/ManageAccoutSideBar/MyWishList";
import FollowedStores from "../components/ManageAccoutSideBar/FollowedStores";
import MyOrderDetails from "../components/myOrderDetails/myOrderDetails";
import MyOrderCancelation from "../components/MyOrderCancelation/MyOrderCancelation";
import AddNewAddress from "../components/AddressBook/AddNewAddress";
import AddressBook from "../components/AddressBook/AddressBook";
import EditProfile from "../components/ManageAccoutSideBar/EditProfile";
import ChangesPassword from "../components/ManageAccoutSideBar/ChangesPassword";
import MyPaymentOption from "../components/ManageAccoutSideBar/myPaymentOption";
import MyReturns from "../components/ManageAccoutSideBar/MyReturns";
import MyCancelation from "../components/ManageAccoutSideBar/MyCancelation";
import MyReturnsResponsive from "../components/ManageAccoutSideBar/MyReturnsResponsive";


const profileLinksObj = [
  {
    title: "Manage My Account",
    href: "manageAccount",
    element: <ManageAccount />,
    links: [
      {
        title: "My Profile",
        href: "myProfile",
        element: <Profile />,
      },
      {
        title: "Address Book",
        href: "addressBook",
        element: <AddressBook />,
      },
      {
        title: "My Payment Options",
        href: "myPaymentOptions",
        element: <MyPaymentOption />,
      }

    ],
  },
  {
    title: "My Orders",
    href: "myOrders",
    element: <MyOrder></MyOrder>,
    links: [
      {
        title: "My Returns",
        href: "myReturns",
        element: <MyReturns></MyReturns>,
      },
      {
        title: "My Cancellations",
        href: "myCancellations",
        element: <MyCancelation />,
      }

    ]
  },

  {
    title: "My Reviews",
    href: "myReviews",
    element: <MyReviews />,
  },
  {
    title: "My Wishlists",
    href: "myWishlists",
    element: <MyWishList />,
  },
  {
    title: "Followed stores",
    href: "followedStores",
    element: <FollowedStores />,
  },
  {
    title: "Sell On Banglar Big Store",
    href: "sellStore",
    element: <Profile />,
  },
  // sub link
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
  {
    title: "EditProfile",
    href: "editProfile",
    element: <EditProfile></EditProfile>
  },
  {
    title: "changesPassword",
    href: "changesPassword",
    element: <ChangesPassword></ChangesPassword>
  }

];





export { profileLinksObj}