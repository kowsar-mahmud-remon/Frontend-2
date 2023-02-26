import Image from "next/image";
import React from "react";
import pro from "../../../assets/images/tomato.png";
import QR from "../../../assets/images/ProductInv/frame 1.png";
import QR2 from "../../../assets/images/ProductInv/Group 4715.png";
const ProductInvoicesDetails = () => {
  return (
    <div className="mt-7">
      <div className="lg:max:w-[1426px] mx-auto text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className="mr-1">Home</p>
          <p className="mr-1">{">"} Products</p>
          <p className="text-[#001E00] font-medium">{">"} Product Invoices</p>
        </div>
        <p className=" text-2xl text-[#FB641B] font-medium">Orders Invoice</p>
      </div>

      <div className="max-w-[727px] p-4 shadow-lg rounded mt-8">
        <h2 className="bg-[#FB641B] py-2 text-2xl text-center rounded text-white font-[500]">
          {" "}
          Congratulations on Your Sale!
        </h2>
        <div className="mt-5">
          <p className="text-center text-base">
            You have received an order from owes alarm. The order is as follows.
          </p>
          <p className="text-center font-[500] text-[24px]">Order Details</p>
        </div>
        <div className="my-7 flex md:flex-row flex-col justify-center items-center">
          <div className="w-3/4 p-4">
            <p className="text-[16px] mb-3">
              <span className="font-[500] ">Order Number: </span> #123456
            </p>
            <p className="text-[16px] mb-3">
              <span className="font-[500] ">Date: </span> 21/02/2023
            </p>
            <p className="text-[16px] mb-3">
              <span className="font-[500] ">Customer Name: </span> Abdul Korim
            </p>
            <p className="text-base mb-3">
              <span className="font-[500] ">Shipping Address: </span>
              Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362
            </p>
            <p className="text-[16px] font-[500]">+88 012 342 450 45</p>
          </div>
          <div className=" p-6  rounded md:ml-6 md:mt-0 mt-5">
            <Image src={QR2} alt="" />
          </div>
        </div>

        {/* table */}
        <div className="flex  my-10 border-2 rounded">
          <div className=" w-[88px]">
            <p className="text-center py-1">Product</p>
            <hr className="border-t-2" />
            <Image src={pro} alt="" className="p-3" />
          </div>
          <div className=" w-[180px]">
            <p className="text-center py-1">Local Title</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-2">
                Potol (Pointed Gourd ) 500 ±30 gm
              </p>
            </div>
          </div>
          <div className="w-[16%] ">
            <p className="text-center py-1">Product SKU</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-3">KS5488UKO</p>
            </div>
          </div>
          <div className="w-[16%] ">
            <p className="text-center py-1">Quantity</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-3">1000 gm</p>
            </div>
          </div>
          <div className=" w-[16%]">
            <p className="text-center py-1">Deleted Date</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-3">01 Feb 2023 </p>
            </div>
          </div>
          <div className="w-[16%]">
            <p className="text-center py-1">Price</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-3">Tk. 60</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 md:mb-0 mb-5">
            <h2 className="text-2xl font-[500]">Total Quantity: 1000gm</h2>
            <h2 className="text-2xl font-[500]">Delivery: Banglar Big Bazar</h2>
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-end items-center mb-2">
              <p>Sub Total: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                Tk. 80.00
              </div>
            </div>
            <div className="flex justify-end items-center mb-2">
              <p>Delivery Charges: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                Tk. 80.00
              </div>
            </div>
            <div className="flex justify-end items-center mb-2">
              <p>Discount: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                Tk. 80.00
              </div>
            </div>
            <div className="flex justify-end items-center mb-2">
              <p>Amount Paid: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                Tk. 80.00
              </div>
            </div>
            <div className="flex justify-end items-center mb-2">
              <p>Balance Due: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                Tk. 80.00
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 my-5" />
        <div className="text-[16px]">
          <div>
            <p className="mb-4">
              Pack and ship the order: Be sure to double-check the shipping
              address and include any necessary packing slips or documentation.
            </p>
            <p className="mb-4">
              Update the order status: Let your customer know when their order
              has been shipped and provide a tracking number if available.
            </p>
            <p className="mb-4">
              Collect payment: If you have not already, be sure to collect
              payment for the order.
            </p>
            <p className="mb-4">
              Provide excellent customer service: Respond promptly to any
              questions or concerns from your customer, and follow up after
              delivery to ensure satisfaction. <br />
            </p>
          </div>
          <div>
            <p>
              <span className="text-[#F4253F]">Notes:</span>
              This is just a sample and can be tailored to meet the specific
              needs and preferences of the ecommerce vendor.z
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInvoicesDetails;
