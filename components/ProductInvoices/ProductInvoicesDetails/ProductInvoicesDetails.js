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
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Products</p>
          <p className='text-[#001E00] font-medium'>{">"} Product Invoices</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Product Invoices</p>
      </div>


      <div className="max-w-[727px] p-4 shadow-lg rounded mt-8">
        <h2 className="bg-[#FB641B] py-2 text-2xl text-center rounded text-white font-[500]">
          {" "}
          PRODUCT INVOICE
        </h2>

        <div className="my-7 flex md:flex-row flex-col justify-center items-center">
          <div className="w-3/4 border-2 rounded p-4">
            <h3 className="text-lg font-[500]">Abdul Korim</h3>
            <p className="text-base my-3">
              Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362
            </p>
            <p className="text-lg font-[500]">+88 012 342 450 45</p>
          </div>
          <div className=" p-6 border-2 rounded md:ml-6 md:mt-0 mt-5">
            <Image src={QR} alt="" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col">
          <div className="md:w-3/5 md:block flex justify-center md:mb-0 mb-5">
            <Image src={QR2} alt="" />
          </div>
          <div className="md:w-2/5 ">
            <div className="flex justify-end items-center mb-2">
              <p>Invoice No: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                #12345512
              </div>
            </div>
            <div className="flex justify-end items-center mb-2">
              <p>Date: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                02 Feb,2023
              </div>
            </div>
            <div className="flex justify-end items-center mb-2">
              <p>Shop No: </p>
              <div className="w-[158px] border-2 rounded pl-4 py-2 ml-3">
                02 Feb,2023
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 my-10">
          <div className="border-2 rounded-lg w-[88px]">
            <p className="text-center py-1">Product</p>
            <hr className="border-t-2" />
            <Image src={pro} alt="" className="p-3" />
          </div>
          <div className="border-2 rounded-lg w-[160px]">
            <p className="text-center py-1">Local Title</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-2">Potol (Pointed Gourd ) 500 ±30 gm</p>
            </div>
          </div>
          <div className="border-2 rounded-lg ">
            <p className="text-center py-1">Product SKU</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-3">KS5488UKO</p>
            </div>
          </div>
          <div className="border-2 rounded-lg ">
            <p className="text-center py-1">Quantity</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-3">1000 gm</p>
            </div>
          </div>
          <div className="border-2 rounded-lg ">
            <p className="text-center py-1">Deleted Date</p>
            <hr className="border-t-2" />
            <div>
              <p className="text-center p-3">01 Feb 2023 </p>
            </div>
          </div>
          <div className="border-2 rounded-lg">
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

        <h2 className="text-[#F4253F] text-2xl font-[500] text-center">
          Additional Notes
        </h2>
        <hr className="border-t-2 my-2" />
        <div>
          <div className="flex justify-center text-[15px]">
            <p className="text-[#F4253F]">Notes:</p>
            <p className="ml-2">
              It is a long established fact that a reader will be distracted by
              the <br /> readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInvoicesDetails;
