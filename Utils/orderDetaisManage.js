import MyOrderCancelation from "../components/MyOrderCancelation/MyOrderCancelation";
import MyOrderDetails from "../components/myOrderDetails/myOrderDetails";

export const myOrderRelated = [
  {
    title: "MyOrders",
    href: "myOrderDetails",
    element: <MyOrderDetails />,
    }, {
        title: "OrderCancelation",
        href: "myOrderCancelation",
        element: <MyOrderCancelation/>
  }
];

