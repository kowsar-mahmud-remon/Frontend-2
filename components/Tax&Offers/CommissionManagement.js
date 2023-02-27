import Image from 'next/image';
import React from 'react';
import img from '../../assets/images/image 7.png';
import styles from "../../styles/campaignManagementTwo.module.css";



const CommissionManagement = () => {
  const productsDetails =
    [
      {
        _id: 1,
        category: "Large Appliances",
        subCategory: "Refrigerators & Freezers",
        commission: "5%",
      },
      {
        _id: 2,
        category: "Washers & Dryers",
        subCategory: "Washers & Dryers",
        commission: "5%",
      },
      {
        _id: 3,
        category: "Generators & Power Suppliers",
        subCategory: "Generators",
        commission: "5%",
      },
      {
        _id: 4,
        category: "Generators & Power Suppliers",
        subCategory: "Other Power Accessories",
        commission: "13%",
      },
      {
        _id: 5,
        category: "Generators & Power Suppliers",
        subCategory: "Travel Accessories",
        commission: "13%",
      },
      {
        _id: 6,
        category: "Large Appliances",
        subCategory: "Refrigerators & Freezers",
        commission: "5%",
      },
      {
        _id: 7,
        category: "Washers & Dryers",
        subCategory: "Washers & Dryers",
        commission: "5%",
      },
      {
        _id: 8,
        category: "Generators & Power Suppliers",
        subCategory: "Generators",
        commission: "5%",
      },
      {
        _id: 9,
        category: "Generators & Power Suppliers",
        subCategory: "Other Power Accessories",
        commission: "13%",
      },
      {
        _id: 10,
        category: "Generators & Power Suppliers",
        subCategory: "Travel Accessories",
        commission: "13%",
      },
      {
        _id: 11,
        category: "Large Appliances",
        subCategory: "Refrigerators & Freezers",
        commission: "5%",
      },
      {
        _id: 12,
        category: "Washers & Dryers",
        subCategory: "Washers & Dryers",
        commission: "5%",
      },
      {
        _id: 13,
        category: "Generators & Power Suppliers",
        subCategory: "Generators",
        commission: "5%",
      },
      {
        _id: 14,
        category: "Generators & Power Suppliers",
        subCategory: "Other Power Accessories",
        commission: "13%",
      },
      {
        _id: 15,
        category: "Generators & Power Suppliers",
        subCategory: "Travel Accessories",
        commission: "13%",
      },
    ];
  return (
    <div className='mt-7 lg:p-0 mb-10'>

      <div className="text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Tax & Offers</p>
          <p className='text-[#001E00] font-medium'>{">"} Commission Management</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Market Place Commission Structure</p>
      </div>


      <div className={`overflow-x-auto mt-8 lg:px-10 xl:px-[113px] py-6 lg:max-w-[1426px] ${styles.campaignManagement}`}>
        <table className="table w-full mx-auto">

          <thead className=''>
            <tr className=''>
              <th className='normal-case bg-white text-[26px] pb-7 text-[#001E00] font-medium p-0'><p className='pl-[106px]'>Category</p></th>
              <th className='normal-case bg-white text-[26px] pb-7 text-[#001E00] font-medium p-0'><p className=''>Sub-Category</p></th>
              <th className='normal-case bg-white text-[26px] pb-7 text-[#001E00] font-medium p-0'><p className=''>Commission %</p></th>
            </tr>
          </thead>
          <tbody className=''>

            {
              productsDetails.map(details => <tr key={details._id} className=" ">

                <td className="py-4 border-t border-[#B7B7B7]">
                  <p className='pl-[95px] text-base text-[#686868] '>{details.category}</p>
                </td>
                <td className="py-4 border-t border-[#B7B7B7]">
                  <p className='text-base text-[#686868] '>{details.subCategory}</p>
                </td>
                <td className="py-4 border-t border-[#B7B7B7]">
                  <p className='text-base text-[#686868] '>{details.commission}</p>
                </td>

              </tr>)
            }

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default CommissionManagement;