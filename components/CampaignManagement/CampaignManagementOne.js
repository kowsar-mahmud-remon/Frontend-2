import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import img from '../../assets/images/image 7.png';



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

      <div className="lg:w-[1426px] mx-auto text-lg text-[#686868] mb-8">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <FaAngleRight className='text-[#707070] text-xs mr-1'></FaAngleRight>
          <p className='mr-1'>Promotions</p>
          <FaAngleRight className='text-[#707070] text-xs'></FaAngleRight>
          <p className='text-[#001E00] font-medium'>Campaign Management</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Campaign Management</p>
      </div>


      <div className="overflow-x-auto w-full ">
        <table className="table lg:w-[1426px] mx-auto">

          <thead className=''>
            <tr className=''>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF]'>Product</th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF]'>Product Impressions</th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF]'>Total Clicks</th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF]'>Campaign Orders</th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF]'>Running time </th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF]'>End time</th>
              <th className='normal-case text-base text-[#001E00] font-medium bg-[#FFFFFF]'>Actions</th>
            </tr>
          </thead>
          <tbody className=''>

            {
              productsDetails.map(details => <tr key={details._id} className=" ">
                <td className="py-6 border-b border-[#B7B7B7] pl-6">
                  <div className="flex items-center">
                    <div className="mr-[13px]">
                      <Image
                        className='w-[76px] h-[61px] mx-auto'
                        src={details.img}
                        alt="Picture of the author"
                        width={76}
                        height={61}
                      />
                    </div>

                    <p className='text-base text-[#001E00] font-medium'>{details.name}</p>

                  </div>
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
                      <select className="select select-bordered w-[108px] h-[40px] border text-[#0BD838] border-[#B7B7B7]">
                        <option className='text-base text-[#0BD838] rounded'>Active</option>
                        <option className='text-base text-[#686868] rounded'>Inactive</option>
                      </select>
                  }

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