import React, { useState } from "react";
import OrdersProduct from "../OrdersProduct/OrdersProduct";
import ToPay from "../ToPay/ToPay";
import ToShip from "../ToShip/ToShip";
import ToReceive from "../ToReceive/ToReceive";
import { useRouter } from 'next/router'
import { FaArrowLeft } from "react-icons/fa";

const MyOrder = () => {
  const router = useRouter()
  const datas = [
    {
      id: "1",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",

      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        },
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "2",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",

      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
        ,
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "3",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "4",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {

          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "5",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {

          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "6",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {

          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "7",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",

      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "8",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",

      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "9",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",

      status: "Processing",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
        {
          image: "/image 6.png",
          peoductName: "Tomato(Local) 500+30 gm",
          qty: "1",
        }
      ]
    },
    {
      id: "10",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
    
      status: "Processing",
      deliveredDate: "Delivered on 21 Dec 2022",
      againAddProduct: [
           {
            image: "/image 6.png",
            peoductName: "Tomato(Local) 500+30 gm",
            qty: "1",
           }
      ]
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
      againAddProduct: [

      ]
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
      againAddProduct: [

      ]
    },
  ];

  const [OrderNumber, setOrderNumber] = useState(5);
  const handleOrder = (e) => {
    const orderNumber = e.target.value;
    setOrderNumber(orderNumber);
  };

  const [isActive, setActive] = useState("all");
  const [shipingProduct, setShipingProduct] = useState();
  // const ToShip = () => {
  //   setActive("ToShip");
  //   const shipingData = datas.filter((data) => data.status === "Processing");
  //   setShipingProduct(shipingData);
  // };

  return (
    <div className=" md:px-[24px] px-[10px]">

      <div className="w-[100%]">
        <button onClick={() => router.back()} className='flex items-center  gap-[13px]'>
          <FaArrowLeft className='md:hidden'></FaArrowLeft>
          <h1 className='text-[20px] md:text-[24px] md:mb-[32px]  font-[500] text-[#001E00] md:text-[#FB641B]'>My Orders</h1>
        </button>
      </div>
      <div className="mt-[32px] md:w-[92%]">
        <div className="md:w-[70%]">
          <ul className="flex  justify-between   ">
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
              onClick={() => setActive("ToShip")}
              className={
                isActive === "ToShip"
                  ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px]"
                  : "  text-[16px]"
              }
            >
              To ship()
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
        <hr className="bg-[#686868] border-[1px] " />
      </div>
      {isActive === "all" && (
        <>
          <div className="mt-[16px] md:block hidden">
            <div className=" h-[80px] md:w-[92%] w-full rounded-[8px] bg-[#FFFFFF] shadow-lg">
              <div className=" w-full max-w-xs mt-4 gap-[16px] flex ">
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

              <ToPay></ToPay>

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
          <ToShip></ToShip>
        }
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