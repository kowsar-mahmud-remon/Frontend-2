import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import img from '../../assets/images/image 7.png';
import styles from "../../styles/campaignManagementTwo.module.css";




const CampaignManagementOne = () => {

  const productsDetails =
    [
      {
        _id: 1,
        name: "Tomato (Local) 500 ±30 gm",
        img: img,
        impressions: 254,
        clicks: 54,
        Orders: 25,
        runningTime: "05:00:25",
        endTime: "72:00:00",
        actions: "Pending"
      },
      {
        _id: 2,
        name: "Tomato (Local) 500 ±30 gm",
        img: img,
        impressions: 254,
        clicks: 54,
        Orders: 25,
        runningTime: "05:00:25",
        endTime: "72:00:00",
        actions: ""
      },
      {
        _id: 3,
        name: "Tomato (Local) 500 ±30 gm",
        img: img,
        impressions: 254,
        clicks: 54,
        Orders: 25,
        runningTime: "05:00:25",
        endTime: "72:00:00",
        actions: ""
      },
    ];
  return (
    <div className='mt-7'>

      <div className="text-lg text-[#686868] mb-10">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <p className='mr-1'>{">"} Promotions</p>
          <p className='text-[#001E00] font-medium'> {">"} Campaign Management</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Campaign Management</p>
      </div>


      <div className={`overflow-x-auto ${styles.tableShadow} lg:max-w-[1426px] pb-20 px-2`}>
        <table className="table ">

          <thead className={``}>
            <tr className=''>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-8'><p className='border-r border-[#B7B7B7] mb-8 pr-2'>Product</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='border-r border-[#B7B7B7] mb-8 pr-2'>Title</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='border-r border-[#B7B7B7] mb-8 pr-2'>Product Impressions</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='border-r border-[#B7B7B7] mb-8 pr-2'>Total Clicks</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='border-r border-[#B7B7B7] mb-8 pr-2'>Campaign Orders</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='border-r border-[#B7B7B7] mb-8 pr-2'>Running time</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='border-r border-[#B7B7B7] mb-8 pr-2'>End time</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='border-r border-[#B7B7B7] mb-8'>Statas</p></th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF] p-0 pl-4'><p className='mb-8'>Actions</p></th>
            </tr>
          </thead>
          <tbody className=''>

            {
              productsDetails.map(details => <tr key={details._id} className=" ">
                <td className="py-6 border-b border-[#B7B7B7] pl-6">
                  <div className="">
                    <Image
                      className='w-[76px] h-[61px] mx-auto'
                      src={details.img}
                      alt="Picture of the author"
                      width={76}
                      height={61}
                    />
                  </div>

                </td>
                <td className="py-6 border-b border-[#B7B7B7] pl-1">
                  <p className='text-base text-[#001E00] font-medium'>{details.name}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className=' text-lg text-[#686868]'>{details.impressions}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className=' text-lg text-[#686868]'>{details.clicks}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className=' text-lg text-[#686868]'>{details.Orders}</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className=' text-lg text-[#686868]'>{details.runningTime} <br /> Hours</p>
                </td>
                <td className="py-6 border-b border-[#B7B7B7]">
                  <p className=' text-lg text-[#686868]'>{details.endTime}  <br /> Hours</p>
                </td>

                <td className="py-6 border-b border-[#B7B7B7] pr-6">
                  {
                    details?.actions === "Pending" ? <button className="normal-case font-medium text-[#001E00] border border-[#B7B7B7] rounded px-[21px] py-[10px]">{details.actions}</button>
                      :
                      <select className="select select-bordered w-[108px] h-[40px] border text-[#0BD838] border-[#B7B7B7] rounded">
                        <option className='text-base text-[#0BD838] rounded bg-[#F2F3F7]'>Active</option>
                        <option className='text-base text-[#686868] rounded bg-[#F2F3F7]'>Inactive</option>
                      </select>
                  }

                </td>
                <td className="py-6 border-b border-[#B7B7B7] text-xs">
                  <button className='text-[#287DF3] px-[39px] py-[5px] bg-[#EAF2FE] rounded'>Edit</button>
                  <br />
                  <button className='text-[#B7B7B7] px-[19px] py-[5px] mt-2 rounded border border-[#B7B7B7]'>View Detail</button>
                </td>

              </tr>)
            }

          </tbody>

        </table>
      </div>

    </div>

  );
};

export default CampaignManagementOne;