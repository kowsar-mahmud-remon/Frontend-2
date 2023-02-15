import Image from "next/image";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import potol from "../../assets/images/image 88.png";
import tomato from "../../assets/images/image 66.png";
import user from "../../assets/images/image 346.png";
import { AiFillStar } from "react-icons/ai";

const ManageReview = () => {
  return (
    <section className="bg-[#FFFFFF] pb-10 mx-auto w-full">
      <div className="px-10 mx-auto">
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
            <div className="mb-8">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Edit Products
              </h1>
            </div>
            <div className={`rounded-lg ${style.boxshaddow} bg-[#FFFFFF]`}>
              <div className="px-6 pt-6">
                <div className="flex">
                  <div className="pt-1">
                    <Image
                      className="w-24 h-[77px]"
                      src={potol}
                      width={96}
                      height={77}
                      alt=""
                    ></Image>
                  </div>
                  <div className="pl-4">
                    <div>
                      <p className="text-[#001E00] font-semibold text-base">
                        Potol (Pointed Gourd) 500 ±30 gm
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[#001E00] font-semibold mr-4">
                        Brand:{" "}
                        <span className="text-[#686868] text-sm">No Brand</span>
                      </p>
                      <p className="text-[#001E00] font-semibold">
                        Color:{" "}
                        <span className="text-[#686868] text-sm">
                          Red Color
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center py-1">
                      <p className="text-[#FB641B] text-base mr-4 font-semibold">
                        Tk 60
                      </p>
                      <p className="mr-4 text-sm line-through text-[#707070] font-medium">
                        Tk 80
                      </p>
                      <p className="text-[#707070] text-sm">(20% off)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <Image
                    className="w-8 h-8 mt-2"
                    src={user}
                    width={32}
                    alt=""
                  ></Image>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium">Jakariya Sick</h2>
                    <span className="text-[#686868] text-sm">8 day ago</span>
                  </div>
                  <div className="flex mt-2 lg:ml-3 md:ml-3">
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                  </div>
                </div>
                <div className="mt-4 lg:pr-[173px]">
                  <p className="text-base font-semibold text-[#001E00] text-justify">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here, content here, making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow}`}
                    width={76}
                    src={potol}
                    alt=""
                  ></Image>
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow} lg:ml-3 md:ml-3`}
                    width={76}
                    src={potol}
                    alt=""
                  ></Image>
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow} lg:ml-3 md:ml-3`}
                    width={76}
                    src={potol}
                    alt=""
                  ></Image>
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow} lg:ml-3 md:ml-3`}
                    width={76}
                    src={potol}
                    alt=""
                  ></Image>
                </div>
                <div className="mt-8 flex justify-end">
                  <button className="text-[#686868]  rounded-lg  border border-[#686868] w-[192px] h-[40px] mr-4">
                    Request Hide Review
                  </button>
                  <button className="bg-[#FB641B] hover:bg-[#fc5907]  rounded-lg  text-white w-[61px] h-[40px]">
                    Ok
                  </button>
                </div>
              </div>
              <div className="divider mt-4 mb-0"></div>

              <div className="px-6 pt-5 pb-8">
                <div className="flex">
                  <div className="pt-1">
                    <Image
                      className="w-24 h-[77px]"
                      src={tomato}
                      width={96}
                      alt=""
                    ></Image>
                  </div>
                  <div className="pl-4">
                    <div>
                      <p className="text-[#001E00] font-semibold text-base">
                        Potol (Pointed Gourd) 500 ±30 gm
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[#001E00] font-semibold mr-4">
                        Brand:{" "}
                        <span className="text-[#686868] text-sm">No Brand</span>
                      </p>
                      <p className="text-[#001E00] font-semibold">
                        Color:{" "}
                        <span className="text-[#686868] text-sm">
                          Red Color
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center py-1">
                      <p className="text-[#FB641B] text-base mr-4 font-semibold">
                        Tk 50
                      </p>
                      <p className="mr-4 text-sm line-through text-[#707070] font-medium">
                        Tk 70
                      </p>
                      <p className="text-[#707070] text-sm">(20% off)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <Image
                    className="w-8 h-8 mt-2"
                    src={user}
                    width={32}
                    alt=""
                  ></Image>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium">Jakariya Sick</h2>
                    <span className="text-[#686868] text-sm">8 day ago</span>
                  </div>
                  <div className="flex mt-2 lg:ml-3 md:ml-3">
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B]"></AiFillStar>
                  </div>
                </div>
                <div className="mt-4 lg:pr-[173px]">
                  <p className="text-base font-semibold text-[#001E00] text-justify">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here, content here, making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow}`}
                    width={76}
                    src={tomato}
                    alt=""
                  ></Image>
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow} lg:ml-3 md:ml-3`}
                    width={76}
                    src={tomato}
                    alt=""
                  ></Image>
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow} lg:ml-3 md:ml-3`}
                    width={76}
                    src={tomato}
                    alt=""
                  ></Image>
                  <Image
                    className={`w-[76px] h-[61px] rounded ${style.boxbuttonshadow} lg:ml-3 md:ml-3`}
                    width={76}
                    src={tomato}
                    alt=""
                  ></Image>
                </div>
                <div className="mt-8 flex justify-end">
                  <button className="text-[#686868]  rounded-lg  border border-[#686868] w-[192px] h-[40px] mr-4">
                    Request Hide Review
                  </button>
                  <button className="bg-[#FB641B] hover:bg-[#fc5907]  rounded-lg  text-white w-[61px] h-[40px]">
                    Ok
                  </button>
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
