import Image from "next/image";
import { useState } from "react";
import tomato from "../../assets/images/image 66.png";
import mistykumra from "../../assets/images/image 77.png";
import potol from "../../assets/images/image 88.png";
import derosh from "../../assets/images/image 9.png";
import ProductCampaignModal from "../../components/ProductCampaign/ProductCampaignModal";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import AllProductCard from "./AllProductCard";

const AllProduct = () => {
  const [modal, setModal] = useState({});
  const products = [
    {
      id: 1,
      brand: "No Brand",
      color: "red color",
      price: 60,
      disprice: 70,
      name: "Tomato (Local) 500 ±30 gm",
      image: tomato,
    },
    {
      id: 2,
      brand: "No Brand",
      color: "yellow color",
      price: 80,
      disprice: 90,
      name: "Misti Kumra Fali (Sweet Pumpkin Fali)",
      image: mistykumra,
    },
    {
      id: 3,
      brand: "No Brand",
      color: "green color",
      price: 30,
      disprice: 50,
      name: "Potol (Pointed Gourd ) 500 ±30 gm",
      image: potol,
    },
    {
      id: 4,
      brand: "No Brand",
      color: "green color",
      price: 20,
      disprice: 30,
      name: "Dherosh (Lady’s Finger) 500±30 gm",
      image: derosh,
    },
    {
      id: 5,
      brand: "No Brand",
      color: "red color",
      price: 40,
      disprice: 50,
      name: "Tomato (Local) 500 ±30 gm",
      image: tomato,
    },
    {
      id: 6,
      brand: "No Brand",
      color: "green color",
      price: 60,
      disprice: 70,
      name: "Potol (Pointed Gourd ) 500 ±30 gm",
      image: potol,
    },
    {
      id: 7,
      brand: "No Brand",
      color: "green color",
      price: 50,
      disprice: 60,
      name: "Dherosh (Lady’s Finger) 500±30 gm",
      image: derosh,
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-10 mx-auto w-full">
      <ProductCampaignModal modal={modal}></ProductCampaignModal>
      <div className="px-10 mx-auto">
        <div className="lg:max-w-[1426px] w-full">
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
            <div className="">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Product Campaign
              </h1>
            </div>
          </div>

          <div
            className={`rounded-lg mt-8 min-h-screen ${style.boxshaddow} bg-[#FFFFFF]`}
          >
            <div className="p-6">
              <div className="mb-4">
                <p className="text-base font-medium text-[#001E00]">
                  All Products
                </p>
              </div>
              <div className="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 gap-3 justify-center">
                {products.map((product) => (
                  <AllProductCard
                    product={product}
                    setModal={setModal}
                    modal={modal}
                    key={product.id}
                  ></AllProductCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
