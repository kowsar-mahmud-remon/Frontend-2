import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/images/image 7.png';
import styles from "../../styles/campaignManagementTwo.module.css";



const OrdersTracking = () => {
  const productsDetails =
    [
      {
        _id: 1,
        localTitle: "Tomato (Local) 500 ±30 gm",
        img: img,
        orderNumber: "#54872",
        Category: "Kacha Bazar",
        Price: 60,
        Quantity: 1,
        paymentStatus: "Cash on Delivery",
        deliveryDate: "3 Feb 2023",
        Details: "Invoice",
        Status: "Tracking"
      },
      {
        _id: 2,
        localTitle: "Tomato (Local) 500 ±30 gm",
        img: img,
        orderNumber: "#54872",
        Category: "Kacha Bazar",
        Price: 60,
        Quantity: 1,
        paymentStatus: "Cash on Delivery",
        deliveryDate: "3 Feb 2023",
        Details: "Invoice",
        Status: "Tracking"
      },
      {
        _id: 3,
        localTitle: "Tomato (Local) 500 ±30 gm",
        img: img,
        orderNumber: "#54872",
        Category: "Kacha Bazar",
        Price: 60,
        Quantity: 1,
        paymentStatus: "Cash on Delivery",
        deliveryDate: "3 Feb 2023",
        Details: "Invoice",
        Status: "Tracking"
      },
    ];
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'>{">"} Orders Tracking</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Orders Tracking</p>
      </div>

      <div className="mt-8 lg:max-w-[1426px]">
        <div className="flex justify-end flex-wrap lg:gap-0">
          <input
            type="text"
            placeholder="Order Number"
            className="input input-bordered border border-[#686868] w-[235px] text-sm text-[#686868] lg:mr-4 "
            mb-2
          />

          <button className="btn bg-[#FB641B] w-[133px] rounded-md text-white normal-case lg:ml-4 mb-2">
            Search
          </button>
        </div>
      </div>


      <div className={`overflow-x-auto mt-4 px-6 pt-6 pb-20 lg:max-w-[1426px] ${styles.campaignManagement}`}>
        <table className="table w-full mx-auto">

          <thead className='bg-[#F2F3F7]'>
            <tr className=''>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-8'><p className='border-r border-[#B7B7B7] mb-2 pr-2'>Product</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Local Title</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Order Number</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Category</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Price</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Quantity</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Payment Status</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Delivery Date</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className='border-r border-[#B7B7B7] pr-2 mb-2'>Details</p></th>
              <th className='normal-case text-base pb-1 pt-2 text-[#001E00] font-medium p-0 pl-4'><p className=' pr-2 mb-2'>Status</p></th>
            </tr>
          </thead>
          <tbody className=''>

            {
              productsDetails.map(details => <tr key={details._id} className=" ">
                <td className="py-6 border-b border-[#B7B7B7] pl-6">
                  <div className="flex items-center">
                    <div className="">
                      <Image
                        className='w-[76px] h-[61px] mx-auto'
                        src={details.img}
                        alt="Picture of the author"
                        width={76}
                        height={61}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className='text-base text-[#001E00] font-medium'>{details.localTitle}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className='text-base text-[#001E00] font-medium'>{details.orderNumber}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className='text-base text-[#001E00] font-medium'>{details.Category}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className='text-base text-[#001E00] font-medium'>Tk {details.Price}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className='text-base text-[#001E00] font-medium'>{details.Quantity} kg</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className='text-base text-[#001E00] font-medium'>{details.paymentStatus}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className='text-base text-[#001E00] font-medium'>{details.deliveryDate}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <Link href="productInvoicesDetails">
                    <p className='text-base text-[#287DF3] font-medium'>{details.Details}</p>
                  </Link>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <Link href="orderTrackingPage01">
                    <p className='text-base text-[#287DF3] font-medium'>{details.Status}</p>
                  </Link>

                </td>

              </tr>)
            }

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default OrdersTracking;