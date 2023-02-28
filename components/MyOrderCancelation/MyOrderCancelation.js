import img1 from "../../assets/images/myOrdersDetails/Vector (3).png";
import img2 from "../../assets/images/myOrdersDetails/Group 2417.png";
import Image from "next/image";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/router";
const MyOrderCancelation = () => {
  const router  = useRouter()
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
  const options = [
    {
      option: "Delivery time is too long",
      value: "Delivery time is too long",
    },
    {
      option: "Wrong Delivery Address",
      value: "Wrong Delivery Address",
    },
    {
      option: "Currently No need this Product",
      value: "Currently No need this Product",
    },
    {
      option: "Not Good This Product",
      value: "Not Good This Product",
    },
    {
      option: "Not Original Product",
      value: "Not Original Product",
    },
  ];
  // const cancel = 'canceled';
  const cancel = '';
  
  if (cancel === 'canceled') {
    return (
      // successfully canceled
      <div className="md:mx-0 mx-3">
        <div className="md:hidden ">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-[13px]"
          >
            <FaArrowLeft className=""></FaArrowLeft>
            <h1 className="text-[20px]  font-[500] text-[#001E00] my-4">
              Order Cancelation
            </h1>
          </button>
        </div>
        <h2 className="text-[24px] font-[500] text-[#FB641B] mb-4 md:block hidden">
          Order Cancellation
        </h2>
        <div className="md:mt-20 mt-5">
          <h2 className="text-[#0BD838] text-[24px] font-[500] flex md:flex-row flex-col justify-center items-center">
            <FaCheckCircle></FaCheckCircle>{" "}
            <span className="md:ml-2 text-center">
              Your Cancellation Was Successful!
            </span>
          </h2>
          <p className="text-center">Your order number was {data.orderId}</p>
        </div>
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
            <div className="md:block hidden">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <tbody>
                    {/* map er kaj hobe ekhane. just emni akhn show kora hoise */}
                    {data && (
                      <tr>
                        <td className="flex items-center">
                          <Image
                            width="57"
                            height="46"
                            src={data.image}
                            alt=""
                          />
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
            {/* mobile table */}
            <div>
              <div className="md:hidden">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr className="hidden">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* map er kaj hobe ekhane. just emni akhn show kora hoise */}
                      {data && (
                        <tr>
                          <td className="flex items-center px-0">
                            <Image
                              width="57"
                              height="46"
                              src={data.image}
                              alt=""
                            />
                            <div>
                              <p className="font-[500] text-[12px]">
                                {data.productName}
                              </p>
                              <p className=" text-[11px]">Tk {data.subtotal}</p>
                              <p className="text-[11px]">
                                Qty:{" "}
                                <span className="font-[500]"> {data.qty}</span>
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // cancellation page
    <div className="max-w-[924px] md:pl-5 mb-10 md:mx-0 mx-3">
      <div className="md:hidden ">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-[13px]"
        >
          <FaArrowLeft className=""></FaArrowLeft>
          <h1 className="text-[20px]  font-[500] text-[#001E00] my-4">
            Order Cancelation
          </h1>
        </button>
      </div>
      <h2 className="text-[24px] font-[500] text-[#FB641B] mb-4 md:block hidden">
        Order Cancellation
      </h2>
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
        <div className="">
          {/* table */}
          <div className="md:block hidden">
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
        {/* mobile table */}
        <div>
          <div className="md:hidden">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="hidden">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* map er kaj hobe ekhane. just emni akhn show kora hoise */}
                  {data && (
                    <tr>
                      <td className="flex items-center px-0">
                        <Image width="57" height="46" src={data.image} alt="" />
                        <div>
                          <p className="font-[500] text-[12px]">
                            {data.productName}
                          </p>
                          <p className=" text-[11px]">Tk {data.subtotal}</p>
                          <p className="text-[11px]">
                            Qty: <span className="font-[500]"> {data.qty}</span>
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <form action="">
        <div className="p-6 max-w-[500px] shadow-xl rounded-xl mb-10">
          <div className="form-control">
            <select name="slot" className="border-2 rounded p-3" required>
              <option className="selected disabled hidden">
                Select Your Reason
              </option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.option}
                </option>
              ))}
              {/*  */}
            </select>
          </div>
        </div>

        <div className="form-control">
          <textarea
            className="border-2 rounded p-3 h-[144px]"
            placeholder="Type your message..."
            required
          ></textarea>
        </div>

        <div className=" p-4">
          <h2 className="text-[18px] font-[500] mb-2">
            Policy For Cancellation
          </h2>
          <p className=" md:pl-9 mb-2 text-[#686868]">
            Policy For Cancellation Before Cancelling the Order, Kindly Read
            Thoroughly Our Following terms & Conditions:
          </p>
          <p className=" md:pl-9 mb-2 text-[#686868]">
            Once you submit this form you agree to cancel the selected Reason.
            We will be unable to retrieve your order once it is cancelled.
          </p>
          <p className=" md:pl-9 mb-2 text-[#686868]">
            Once you confirm your order cancellation, We will Process your
            refund within few minutes. I have read and accepted the Cancellation
            Policy of Banglar Big Bazar
          </p>
          <div className="form-control">
            <label className="label justify-start cursor-pointer">
              <input
                type="checkbox"
                className="checkbox border-black"
                required
              />
              <span className="ml-2 font-[500]">
                I have read and accepted the Cancellation Policy of Banglar Big
                Bazar
              </span>
            </label>
          </div>
        </div>
        <div className="from-control flex justify-end">
          <div>
            <input
              type="submit"
              value="Confirm"
              className="bg-[#FB641B] py-4 px-12 rounded-xl text-white font-bold cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyOrderCancelation;
