import img1 from "../../assets/images/myOrdersDetails/Vector (3).png";
import img2 from "../../assets/images/myOrdersDetails/Group 2417.png";
import Image from "next/image";
const MyOrderCancelation = () => {
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
  return (
    <div className="w-full pl-5">
      <div className="shadow-lg rounded-lg mb-4 mt-5 w-full">
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
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className=" p-4">
          <h2 className="text-[18px] font-[500] mb-2">
            Policy For Cancellation
          </h2>
          <p className=" pl-6 mb-2">
            Policy For Cancellation Before Cancelling the Order, Kindly Read
            Thoroughly Our Following terms & Conditions:
          </p>
          <p className=" pl-6 mb-2">
            Once you submit this form you agree to cancel the selected Reason.
            We will be unable to retrieve your order once it is cancelled.
          </p>
          <p className=" pl-6 mb-2">
            Once you confirm your order cancellation, We will Process your
            refund within few minutes. I have read and accepted the Cancellation
            Policy of Banglar Big Bazar
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCancelation;
