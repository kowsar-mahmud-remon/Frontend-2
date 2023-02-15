import Image from "next/image";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import potol from "../../assets/images/image 88.png";

const ManageReview = () => {
  return (
    <section className="bg-[#FFFFFF] pb-10 mx-auto w-full">
      <div className="px-10 mx-auto">
        <div className="lg:max-w-[1426px] w-full">
          <div>
            <div className="text-sm breadcrumbs font-semibold text-[#686868]">
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
            <div className="mb-8">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Edit Products
              </h1>
            </div>
            <div className={`rounded-lg ${style.boxshaddow} bg-[#FFFFFF] p-8`}>
              <div className="flex">
                <div className="pt-1">
                  <Image className="w-24 h-[77px]" src={potol} width={96} height={77} alt=""></Image>
                </div>
                <div className="pl-4">
                  <div>
                    <p className="text-[#001E00] font-semibold text-base">Potol (Pointed Gourd) 500 ±30 gm</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#001E00] font-semibold mr-4">
                      Brand:{" "}
                      <span className="text-[#686868] text-sm">No Brand</span>
                    </p>
                    <p className="text-[#001E00] font-semibold">
                      Color:{" "}
                      <span className="text-[#686868] text-sm">Red Color</span>
                    </p>
                  </div>
                  <div className="flex items-center py-1">
                    <p className="text-[#FB641B] text-base mr-4 font-semibold">
                      Tk 80
                    </p>
                    <p className="mr-4 text-sm line-through text-[#707070] font-medium">
                      Tk 60
                    </p>
                    <p className="text-[#707070] text-sm">(20% off)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageReview;
