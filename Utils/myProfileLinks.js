import ManageAccount from "../components/ManageAccoutSideBar/ManageAccount";

import MyOrder from "../components/MyOrder/MyOrder";
import Profile from "../components/ManageAccoutSideBar/Profile";
import WriteReview from "../components/ManageAccoutSideBar/WriteReview";
import MyReviews from "../components/ManageAccoutSideBar/MyReviews";
import Wishlist from "../pages/wishlist/myWishlist";
import FollowedStore from "../pages/wishlist/followedStore";
import MyWishList from "../components/ManageAccoutSideBar/MyWishList";

const profileLinksObj = [
    {
        title: 'Manage My Account',
        href: "manageAccount",
        element:<ManageAccount/>,
        links: [
            {
                title: 'My Profile',
                href: "myProfile",
                element: <MyOrder/>
            },
            {
                title: 'Address Book',
                href: "addressBook",
                element: <Profile/>
            },
            {
                title: 'My Payment Options',
                href: "myPaymentOptions",
                element: <Profile/>
            },
            {
                title: 'Vouchers',
                href: "vouchers",
                element: <Profile/>
            },
        ]
    },
    {
        title: 'My Orders',
        href: "myOrders",
        element:<MyOrder></MyOrder>,
        links: [
            {
                title: 'My Returns',
                href: "myReturns",
                element: <Profile/>
            },
            {
                title: 'My Cancellations',
                href: "myCancellations",
                element: <Profile/>
            },
            {
                title: 'My Payment Options',
                href: "myPaymentOptions",
                element: <Profile/>
            },
            {
                title: 'Vouchers',
                href: "vouchers",
                element: <Profile/>
            },
        ]
    },

    {
        title: 'My Reviews',
        href: "myReviews",
        element: <MyReviews/>
    },
    {
        title: 'My Wishlists',
        href: "myWishlists",
        element: <MyWishList />
    },
    {
        title: 'Followed stores',
        href: "followedStores",
        element: <FollowedStore />
    },
    {
        title: 'Sell On Banglar Big Store',
        href: "sell",
        element: <Profile />
    }
]

export default profileLinksObj