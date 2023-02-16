import ManageAccount from "../components/ManageAccoutSideBar/ManageAccount";

import MyOrder from "../components/MyOrder/MyOrder";
import Profile from "../components/ManageAccoutSideBar/Profile";
import WriteReview from "../components/ManageAccoutSideBar/WriteReview";
import MyReviews from "../components/ManageAccoutSideBar/MyReviews";
import Wishlist from "../pages/wishlist/myWishlist";
import FollowedStore from "../pages/wishlist/followedStore";
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
    href: "sell",
    element: <Profile />,
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
  {
    title: "editProfile",
    href: "editProfile",
    element: <EditProfile></EditProfile>
  },
  {
    title: "changesPassword",
    href: "changesPassword",
    element: <ChangesPassword></ChangesPassword>
  }
];


const profileLinksResponsiveObj = [
  {
    title: "Manage My Account",
    href: "manageAccount",
    element: <ManageAccount />,
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
    element: <MyPaymentOption />,
  },
  {
    title: "My Orders",
    href: "myOrders",
    element: <MyOrder />,
  },
  {
    title: "My Returns",
    href: "myReturns",
    element: <MyReturnsResponsive />,
  },
  {
    title: "My Cancellations",
    href: "myCancellations",
    element: <MyCancelation />,
  },
  {
    title: "My Reviews",
    href: "myReviews",
    element: <MyReviews></MyReviews>,
  },
  {
    title: "My Wishlist",
    href: "myWishlist",
    element: <MyWishList />,
  },
  {
    title: "Followed Stores",
    href: "followedStores",
    element: <ManageAccount />,
  },
  {
    title: "Sell On Bangla Big Store",
    href: "sellStore",
    element: <ManageAccount />,
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
  {
    title:"EditProfile",
    href:"editProfile",
    element:<EditProfile></EditProfile>
  },
  {
    title:"changesPassword",
    href:"changesPassword",
    element:<ChangesPassword></ChangesPassword>
  }
];

export { profileLinksObj, profileLinksResponsiveObj }