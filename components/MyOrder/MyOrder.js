import React, { useState } from "react";
import OrdersProduct from "../OrdersProduct/OrdersProduct";
import ToReceive from "../ToReceive/ToReceive";

const MyOrder = () => {
  const datas = [
    {
      id: "1",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "2",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "3",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "4",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "5",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "6",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "7",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "8",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "9",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Processing",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "10",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Processing",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
  ];
  const receiveDatas = [
    {
      id: "1",
      orderId: "PFL-12345678998745",
      Delivered: "Banglar Big Store Rider",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      status: "Delivered",
    },
    {
      id: "1",
      orderId: "PFL-12345678998745",
      Delivered: "Banglar Big Store Rider",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      status: "Delivered",
    },
    {
      id: "1",
      orderId: "PFL-12345678998745",
      Delivered: "Banglar Big Store Rider",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      status: "Delivered",
    },
  ];

  const [OrderNumber, setOrderNumber] = useState(5);
  const handleOrder = (e) => {
    const orderNumber = e.target.value;
    setOrderNumber(orderNumber);
  };

  const [isActive, setActive] = useState("all");
  const [shipingProduct, setShipingProduct] = useState();
  const ToShip = () => {
    setActive("ToShip");
    const shipingData = datas.filter((data) => data.status === "Processing");
    setShipingProduct(shipingData);
  };

  return (
    <div className="">
      <div>
        <h1 className="text-[#FB641B] text-[24px] font-semibold">My Orders</h1>
      </div>
      <div className="mt-[32px]">
        <div>
          <ul className="flex gap-[90px]  ">
            <button
              onClick={() => setActive("all")}
              className={
                isActive === "all"
                  ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px]"
                  : "  text-[16px]"
              }
            >
              All
            </button>
            <button
              onClick={() => setActive("ToPay")}
              className={
                isActive === "ToPay"
                  ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px]"
                  : "  text-[16px]"
              }
            >
              To Pay
            </button>
            <button
              onClick={() => ToShip()}
              className={
                isActive === "ToShip"
                  ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px]"
                  : "  text-[16px]"
              }
            >
              To Ship ()
            </button>
            <button
              onClick={() => setActive("ToReceive")}
              className={
                isActive === "ToReceive"
                  ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px]"
                  : "  text-[16px]"
              }
            >
              To Receive ({receiveDatas.length})
            </button>
          </ul>
        </div>
        <hr className="bg-[#686868] border-[1px] w-[924px]" />
      </div>
      {isActive === "all" && (
        <>
          <div className="mt-[16px]">
            <div className="w-full h-[80px] rounded-[8px] bg-[#FFFFFF] shadow-lg">
              <div className=" w-full mt-4 gap-[16px] flex ">
                <p className="label mt-[25px] ml-[24px] mb-[30px] text-[16px]">
                  {" "}
                  <span className="label-text">Show:</span>
                </p>
                <select
                  onClick={(e) => handleOrder(e)}
                  className="h-[48px] select input-bordered mt-[16px] w-[169px] font-normal text-[16px] rounded-[4px] border-[#707070] "
                >
                  <option className="text-[16px] text-[#686868]" value={5}>
                    Last 5 Orders
                  </option>
                  <option value={10}>Last 10 Orders</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
      <div>
        {isActive === "all" &&
          datas
            .slice(0, parseInt(OrderNumber))
            .map((data) => (
              <OrdersProduct key={data.id} data={data}></OrdersProduct>
            ))}

        {isActive === "ToPay" &&
          (datas.length !== 0 ? (
            <>
              {datas
                .filter((data) => data.status === "Payment")
                .map((data) => (
                  <OrdersProduct key={data.id} data={data}></OrdersProduct>
                ))}
            </>
          ) : (
            <>
              <div className="mt-[106px] ml-[400px]">
                <p>There are no orders placed yet</p>
                <button className="continueButton mt-[32px] text-[#FB641B]">
                  Continue Shopping
                </button>
              </div>
            </>
          ))}
        {isActive === "ToShip" &&
          shipingProduct.map((data) => (
            <OrdersProduct key={data.id} data={data}></OrdersProduct>
          ))}
      </div>
      <div>
        {isActive === "ToReceive" && (
          <>
            <div className="mt-[16px]">
              <div className="flex gap-[16px]">
                <p className="text-[#001E00] font-bold text-[16px]">
                  Group by Order Number
                </p>
                <input
                  type="checkbox"
                  className="toggle w-[42px] h-[24px] bg-[#F2F3F7] border-[#B7B7B7] border-[1px]"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        {isActive === "ToReceive" &&
          receiveDatas.map((data) => (
            <ToReceive key={data.id} data={data}></ToReceive>
          ))}
      </div>
    </div>
  );
};

export default MyOrder;
