import ManageAccount from "../components/ManageAccoutSideBar/ManageAccount"
import ManageAccountResponsive from "../components/ManageAccoutSideBar/ManageAccountResponsive"
import MyReviewsResponsive from "../components/ManageAccoutSideBar/MyReviewsResponsive"
import WriteReviewResponsive from "../components/ManageAccoutSideBar/WriteReviewResponsive"
import MyOrderDetails from "../components/myOrderDetails/myOrderDetails"

const profileLinksResponsiveObj = [
    {
        title: 'Manage My Account',
        href: "manageAccount",
        element:<ManageAccountResponsive/>,
    },
    {
        title: 'My Profile',
        href: "myProfile",
        element:<ManageAccountResponsive/>
    },
    {
        title: 'Address book',
        href: "addressBook",
        element:<ManageAccountResponsive/>,
    },
    {
        title: 'My Payment Options',
        href: "paymentOptions",
        element:<ManageAccountResponsive/>,
    },
    {
        title: 'My Orders',
        href: "myOrders",
        element:<MyOrderDetails/>,
    },
    {
        title: 'My Returns',
        href: "myReturns",
        element:<ManageAccountResponsive/>,
    },
    {
        title: 'My Cancellations',
        href: "myCancellations",
        element:<ManageAccountResponsive/>,
    },
    {
        title: 'My Reviews',
        href: "myReviews",
        // element:<MyReviewsResponsive/>,
        element:<WriteReviewResponsive></WriteReviewResponsive>
    },
    {
        title: 'My Wishlist',
        href: "myWishlist",
        element:<ManageAccountResponsive/>,
    },
    {
        title: 'Followed Stores',
        href: "followedStores",
        element:<ManageAccountResponsive/>,
    },
    {
        title: 'Sell On Bangla Big Store',
        href: "sellStore",
        element:<ManageAccountResponsive/>,
    }
]

export default profileLinksResponsiveObj