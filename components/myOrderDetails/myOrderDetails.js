import Image from "next/image";
import img1 from "../../assets/images/myOrdersDetails/Vector (3).png";
import img2 from "../../assets/images/myOrdersDetails/Group 2417.png";
import Timeline from "./Timeline/Timeline";

const MyOrderDetails = () => {
  const data = {
    id: "1",
    orderId: "121312323213432",
    orderDate: "Placed On 21 Dec 2022 10:21:00",
    image: "/image 8.png",
    productName: "Tomato(Local) 500+30 gm",
    qty: "1",
    status: "Delivered",
    deliveredDate: "Delivered on 21 Dec 2022",
    total: "120",
    subtotal: "100",
    deliveryFee: "20",
  };
  const shippingAdd = {
    name: "Abdul Korim",
    address: "Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362",
    phone: "+88 012 342 450 45",
  };
  const billingAddress = {
    name: "Abdul Korim",
    address: "Bashundhara City Shopping Complex, 3 No Tejturi Bazar West",
    phone: "+88 012 342 450 45",
  };

  return (
    <div className="w-full pl-5">
      <div className="flex justify-between items-center px-4 py-5 shadow-lg rounded-lg">
        <div className="">
          <h3 className="font-[500]">
            Order{" "}
            <span className="text-[#287DF3] font-[400]">#{data.orderId}</span>
          </h3>
          <p className="text-[14px]">{data.orderDate}</p>
        </div>
        <div className="">
          <h3>
            Total: <span className="font-[500]">Tk {data.total}</span>
          </h3>
        </div>
      </div>

      {/* mid part */}
      <div className="shadow-lg rounded-lg mb-4 mt-5">
        <div className=" p-4">
          <div className="flex items-center">
            <div>
              <Image src={img1} alt="" />
            </div>
            <h2 className="text-[18px] font-[500] ml-2">Package</h2>
          </div>
          <p>
            Sold by <span className=" text-[#287DF3]">Banglar Big Store</span>
          </p>
        </div>
        <hr className="border-t-2" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <p className="text-[#026C51] text-base font-[500]">
              {" "}
              {data.deliveredDate}
            </p>
            <div className="flex items-center">
              <div>
                <Image src={img2} alt="" />
              </div>
              <p className="text-base ml-2">{data.status}</p>
            </div>
          </div>
          <div className="mt-10">
            <Timeline status={data.status}></Timeline>
          </div>
          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  {/* map er kaj hobe ekhane. just emni akhn show kora hoise */}
                  {data && (
                    <tr>
                      <td className="flex items-center">
                        <Image width="57" height="46" src={data.image} alt="" />
                        <p>{data.productName}</p>
                      </td>
                      <td>Tk{data.subtotal}</td>
                      <td>Qty: {data.qty}</td>
                      <td>
                        <button className="text-[#287DF3]">Cancel</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 my-10">
        <div>
          <div className="p-4 shadow-lg rounded-lg mb-4">
            <div>
              <h1 className="text-[18px] mb-2 font-[500]">Shipping Address</h1>
              <p>{shippingAdd.name}</p>
              <div className="flex mt-2">
                <div>
                  <p className="px-2 bg-[#F2F3F7] text-[#287DF3] rounded text-[12px]">
                    Work
                  </p>
                </div>
                <div className="text-base ml-2">
                  <p>{shippingAdd.address}</p>
                  <p>{shippingAdd.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 shadow-lg rounded-lg">
            <div>
              <h1 className="text-[18px] mb-2 font-[500]">Billing Address</h1>
              <p>{billingAddress.name}</p>
              <div className="flex mt-2">
                <div>
                  <p className="px-2 bg-[#F2F3F7] text-[#287DF3] rounded text-[12px]">
                    Home
                  </p>
                </div>
                <div className="text-base ml-2">
                  <p>{billingAddress.address}</p>
                  <p>{billingAddress.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-4 shadow-lg rounded-lg lg:mt-0 mt-4">
            <div>
              <h1 className="text-lg font-[500] mb-1">Total Summery</h1>
              <div className="flex justify-between items-center">
                <p>Subtotal</p>
                <p>Tk {data.subtotal}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Delivery Fee</p>
                <p>Tk {data.deliveryFee}</p>
              </div>
            </div>
            <hr className="my-1 border-t-2" />
            <div className="flex justify-between items-center">
              <p>Total</p>
              <p>Tk {data.total}</p>
            </div>
            <p>Paid by Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDetails;
