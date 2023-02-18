import Image from 'next/image';
import React from 'react';
import productPlus from "../../assets/images/productPlus.png";
import style from "../../styles/componentsStyles/box-shaddow.module.css";

const ProductCampaign = () => {
  return (
    <section className="bg-[#FFFFFF] py-7">
      <div className="px-10 mx-auto">
        <div className="Lg:w-9/12 md:w-9/12 w-full">
          <div>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Promotions</a>
                </li>
                <li>Product Campaign</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Product Campaign
              </h1>
            </div>
          </div>

          <div
            className={`rounded-lg mt-8 min-h-screen ${style.boxshaddow} bg-[#FFFFFF]`}
          >
            <div className="p-6">
              <div
                className={`w-[183px] h-[235px] flex justify-center items-center rounded-lg bg-[#FFFFFF] ${style.boxshaddow}`}
              >
                <div className="text-center w-full">
                  <div className="flex justify-center">
                    <Image width={50} src={productPlus} alt=""></Image>
                  </div>
                  <p className="font-medium text-[14px] pt-5 text-[#001E00]">
                    Add New Campaign
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCampaign;