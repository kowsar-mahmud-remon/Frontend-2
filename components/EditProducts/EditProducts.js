import React from 'react';
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 77.png';
import img3 from '../../assets/images/image 88.png';
import img4 from '../../assets/images/image 9.png';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import { HiDotsHorizontal } from 'react-icons/hi';
import Link from 'next/link';
import styles from "../../styles/campaignManagementTwo.module.css";




const EditProducts = () => {
  const productDetails =
    [
      {
        _id: 1,
        img: img,
        name: "Tomato (Local) 500 ±30 gm",
      },
      {
        _id: 2,
        img: img2,
        name: "Misti Kumra Fali (Sweet Pumpkin Fali)",
      },
      {
        _id: 3,
        img: img3,
        name: "Potol (Pointed Gourd ) 500 ±30 gm",
      },
      {
        _id: 4,
        img: img4,
        name: "Dherosh (Lady’s Finger) 500±30 gm",
      },
      {
        _id: 5,
        img: img,
        name: "Tomato (Local) 500 ±30 gm",
      },
      {
        _id: 6,
        img: img2,
        name: "Misti Kumra Fali (Sweet Pumpkin Fali)",
      },
      {
        _id: 7,
        img: img3,
        name: "Potol (Pointed Gourd ) 500 ±30 gm",
      },

    ];
  return (
    <div className='my-7'>

      <div className="lg:max:w-[1426px] mx-auto text-lg text-[#686868]">
        <div className=" flex items-center mb-2">
          <p className='mr-1'>Home</p>
          {/* <FaAngleRight className='text-[#707070] text-xs mr-1'></FaAngleRight> */}
          <p className='mr-1'>{">"} Products</p>
          {/* <FaAngleRight className='text-[#707070] text-xs'></FaAngleRight> */}
          <p className='text-[#001E00] font-medium'>{">"} Edit Product</p>
        </div>
        <p className=' text-2xl text-[#FB641B] font-medium'>Edit Products</p>
      </div>

      <div className="lg:max:w-[1426px] mx-auto mt-8">
        <div className="lg:flex justify-end">
          <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-[259px] text-sm lg:ml-4 text-[#686868]" mb-2 />
          <input type="text" placeholder="Product ID" className="input input-bordered w-full max-w-[235px] text-sm lg:ml-4 text-[#686868]" mb-2 />

          <select className="select select-bordered w-full max-w-[193px] text-sm lg:ml-4 text-[#686868] mb-2">
            <option disabled selected>Category</option>
            <option>Category 01</option>
            <option>Category 02</option>
          </select>

          <button className="btn bg-[#FB641B] w-[133px] rounded-md text-white normal-case lg:ml-4 mb-2">Search</button>
        </div>
      </div>

      <div className="lg:max:w-[1426px] mx-auto mt-6">
        <p className='text-[#001E00] text-lg mb-3 font-medium'>Products</p>
        <div className={`p-6 flex flex-wrap justify-center lg:justify-start ${styles.campaignManagementWithoutBorder}`}>
          {
            productDetails.map(product => <div key={product._id} className="w-[183px] p-2">
              <div className=" flex justify-end mb-[-45px] mr-1">
                <div className="dropdown">
                  <label tabIndex={0} className="">
                    <HiDotsHorizontal className='text-[#686868] cursor-pointer'></HiDotsHorizontal>
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded border border-[#B7B7B7] w-[125px] text-base text-[#686868]">
                    <li><Link href="editProductsTwo">View Detail</Link></li>
                    <li><a>Edit</a></li>
                    <li><a>Delete</a></li>
                    <li><a>Copy Link</a></li>
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
              <div className="mb-2 mt-4 font-medium text-center p-2">
                <p className=' text-base text-[#001E00]'>{product.name}</p>
              </div>
            </div>)
          }
        </div>
      </div>

    </div>
  );
};

export default EditProducts;