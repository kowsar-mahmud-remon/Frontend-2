import ManageAccount from "../components/ManageAccoutSideBar/ManageAccount";
import Profile from "../components/manageAccoutSideBar/Profile";

const profileLinksObj = [
    {
        title: 'Manage My Account',
        href: "manageAccount",
        element:<ManageAccount></ManageAccount>,
        links: [
            {
                title: 'My Profile',
                href: "myProfile",
                element: <Profile />
            },
            {
                title: 'Address Book',
                href: "addressBook",
                element: <Profile />
            },
            {
                title: 'My Payment Options',
                href: "myPaymentOptions",
                element: <Profile />
            },
            {
                title: 'Vouchers',
                href: "vouchers",
                element: <Profile />
            },
        ]
    },
    {
        title: 'My Orders',
        href: "myOrders",
        element:<Profile/>,
        links: [
            {
                title: 'My Returns',
                href: "myReturns",
                element: <Profile />
            },
            {
                title: 'My Cancellations',
                href: "myCancellations",
                element: <Profile />
            },
            {
                title: 'My Payment Options',
                href: "myPaymentOptions",
                element: <Profile />
            },
            {
                title: 'Vouchers',
                href: "vouchers",
                element: <Profile />
            },
        ]
    },

    {
        title: 'My Reviews',
        href: "myReviews",
        element: <Profile />
    },
    {
        title: 'My Wishlists',
        href: "myWishlists",
        element: <Profile />
    },
    {
        title: 'Followed stores',
        href: "followedStores",
        element: <Profile />
    },
    {
        title: 'Sell On Banglar Big Store',
        href: "sell",
        element: <Profile />
    }
]

export default profileLinksObj