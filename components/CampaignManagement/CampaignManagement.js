import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 77.png';
import VectorPlus from '../../assets/images/Vector-plus.png';




const CampaignManagement = () => {
  const productDetails =
    [
      {
        _id: 1,
        img: img,
        name: "Tomato (Local) 500 ±30 gm",
        day: 7,
        status: "Active"
      },
      {
        _id: 2,
        img: img2,
        name: "Misti Kumra Fali (Sweet Fali)",
        day: 3,
        status: "Active"
      }
    ];
  return (
    <div className='mt-7'>

      <div className="lg:w-[1426px] mx-auto text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          <FaAngleRight className='text-[#707070] text-xs mr-1'></FaAngleRight>
          <p className='mr-1'>Promotions</p>
          <FaAngleRight className='text-[#707070] text-xs'></FaAngleRight>
          <p className='text-[#001E00] font-medium'>Campaign Management</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Campaign Management</p>
      </div>

      <div className="lg:w-[1426px] mx-auto mt-8">
        <div className="p-8 flex flex-wrap justify-center lg:justify-start">
          {
            productDetails.map(product => <div key={product._id} className="w-[183px] p-2">
              <div className=" flex justify-end mb-[-25px] mr-1">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="">
                    <HiDotsHorizontal className='text-[#686868]'></HiDotsHorizontal>
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded border border-[#B7B7B7] w-[121px] text-base text-[#686868]">
                    <li><a>View Detail</a></li>
                    <li><a>Edit</a></li>
                  </ul>
                </div>
              </div>
              <Image
                className='w-[167px] h-[126px] p-2'
                src={product.img}
                alt="Picture of the author"
                width={167}
                height={126}
              />
              <div className="mb-[18px] mt-4 font-medium text-center p-2">
                <p className=' text-base text-[#001E00]'>{product.name}</p>
              </div>
              <div className=" justify-between px-3 flex items-center">
                <p className=' text-sm text-[#B7B7B7]'>{product.day} Days</p>
                <p className=' text-base text-[#0BD838]'>{product.status}</p>
              </div>
            </div>)
          }

          <div className="w-[183px]">

            <Image
              className='w-[68px] h-[68px] mx-auto mt-[65px]'
              src={VectorPlus}
              alt="Picture of the author"
              width={68}
              height={68}
            />
            <div className=" mt-[22px] font-medium text-center">
              <p className=' text-base text-[#001E00]'>Add New Campaign</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CampaignManagement;