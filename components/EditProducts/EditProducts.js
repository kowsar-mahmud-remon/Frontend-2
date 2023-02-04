import React from 'react';
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 77.png';
import img3 from '../../assets/images/image 88.png';
import img4 from '../../assets/images/image 9.png';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import { HiDotsHorizontal } from 'react-icons/hi';



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
    <div className=''>

      <div className="lg:w-max-[1426px] mx-auto text-lg text-[#686868] flex items-center mb-2">
        <p className='mr-1'>Home</p>
        <FaAngleRight className='text-[#707070] text-xs mr-1'></FaAngleRight>
        <p className='mr-1'>Products</p>
        <FaAngleRight className='text-[#707070] text-xs'></FaAngleRight>
        <p className='text-[#001E00]'>Edit Product</p>
      </div>

      <div className="lg:w-max-[1426px] mx-auto">
        <p className=' text-2xl text-[#FB641B] mb-8'>Edit Products</p>
        <div className="flex justify-end">
          <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-[259px] text-sm ml-4 text-[#686868]" />
          <input type="text" placeholder="Product ID" className="input input-bordered w-full max-w-[235px] text-sm ml-4 text-[#686868]" />

          <select className="select select-bordered w-full max-w-[193px] text-sm ml-4 text-[#686868]">
            <option disabled selected>Category</option>
            <option>Category 01</option>
            <option>Category 02</option>
          </select>

          <button className="btn bg-[#FB641B] w-[133px] rounded-md text-white normal-case ml-4">Search</button>
        </div>
      </div>

      <div className="lg:w-max-[1426px] mx-auto mt-6">
        <p className='text-[#001E00] text-lg mb-3 font-medium'>Products</p>
        <div className="p-6 flex flex-wrap lg:justify-center">
          {
            productDetails.map(product => <div key={product._id} className="w-[183px] p-2">
              <div className=" flex justify-end mb-[-45px] mr-1">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="m-1">
                    <HiDotsHorizontal className='text-[#686868]'></HiDotsHorizontal>
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded border w-[121px] text-base text-[#686868]">
                    <li><a>View Detail</a></li>
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