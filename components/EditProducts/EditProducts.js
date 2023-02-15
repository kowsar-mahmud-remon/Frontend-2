import React from "react";
import img from "../../assets/images/image 7.png";
import img2 from "../../assets/images/image 77.png";
import img3 from "../../assets/images/image 88.png";
import img4 from "../../assets/images/image 9.png";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import EditProductCard from "./EditProductCard";

const EditProducts = () => {
  const products = [
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
    <section className="bg-[#FFFFFF] pb-10 mt-7 mx-auto w-full">
      <div className=" mx-auto">
        <div className="lg:max-w-[1426px] w-full">
          <div>
            <div className="text-lg breadcrumbs font-semibold text-[#686868]">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li className="text-[#001E00]">Edit Product</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-[#FB641B] font-bold text-2xl">
                Edit Products
              </h1>
            </div>
            <div className="mt-8">
              <div className="flex justify-end flex-wrap lg:gap-0 gap-2">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered max-w-[259px] text-sm text-[#686868] lg:mr-4 "
                  mb-2
                />
                <input
                  type="text"
                  placeholder="Product ID"
                  className="input input-bordered max-w-[235px] text-sm text-[#686868] lg:mr-4 "
                  mb-2
                />

                <select className="select select-bordered max-w-[193px] text-sm text-[#686868] mb-2">
                  <option disabled selected>
                    Category
                  </option>
                  <option>Category 01</option>
                  <option>Category 02</option>
                </select>

                <button className="btn bg-[#FB641B] w-[133px] rounded-md text-white normal-case lg:ml-4 mb-2">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2 ">
            <p className="text-lg font-semibold text-[#001E00]">Products</p>
          </div>
          <div
            className={` rounded-lg mt-2 lg:pb-96 md:pb-72 pb-10 ${style.boxshaddow} bg-[#FFFFFF]`}
          >
            <div className="p-6">
              <div className="flex flex-wrap gap-4">
                {products.map((product) => (
                  <EditProductCard
                    product={product}
                    key={product._id}
                  ></EditProductCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProducts;