import Image from "next/image";
import React from "react";
import style from "../../styles/componentsStyles/box-shaddow.module.css";
import potol from "../../assets/images/image 88.png";
import tomato from "../../assets/images/image 66.png";
import user from "../../assets/images/image 346.png";
import { AiFillStar } from "react-icons/ai";

const ManageReview = () => {
  return (
    <section className="bg-[#FFFFFF] pb-10 mx-auto w-full mt-7 pr-[10px]">
      <div className=" mx-auto">
        <div className=" md:px-[16px]">
          <div>
            <div className="md:text-[18px] text-[14px] breadcrumbs font-semibold text-[#686868]">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li className="text-[#001E00]">Manage Reviews</li>
              </ul>
            </div>
            <div className="mb-8">
              <h1 className="text-[#FB641B] font-semibold text-2xl">
                Product Reviews
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
                      <p className="text-[#001E00] font-semibold md:text-[18px] text-[14px]">
                        Potol (Pointed Gourd) 500 ±30 gm
                      </p>
                    </div>
                    <div className="flex items-center mt-[16px]">
                      <p className="text-[#001E00] font-semibold text-[14px] md:text-[16px]">Order Number: <span className="font-normal">#12450</span></p>
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

                </div>
                <div className="mt-4 lg:pr-[173px] max-w-[1204px]">
                  <div className="flex mt-2 mb-[16px]  ">
                    <AiFillStar className="text-[#FB641B] w-[28px] h-[28px]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B] w-[28px] h-[28px]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B] w-[28px] h-[28px]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B] w-[28px] h-[28px]"></AiFillStar>
                    <AiFillStar className="text-[#FB641B] w-[28px] h-[28px]"></AiFillStar>
                  </div>
                  <p className="text-[16px] font-normal text-[#686868] text-justify ">
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

                <div>
                  <h1 className="text-[#001E00] text-[18px] my-[16px]">Review Reply</h1>
                  <div>
                    <textarea placeholder="Type review" className="textarea text-[#686868] text-[16px] textarea-bordered textarea-lg w-full max-w-[775px] border-[#B7B7B7]" ></textarea>
                  </div>
                </div>
                <div className="mt-8 flex justify-end gap-[16px]  text-[12px] md:text-[16px] pb-[35px]">
                  <button className="bg-[#FB641B] hover:bg-[#fc5907]  rounded-md  text-white w-[134px] h-[40px]">
                    Reply
                  </button>

                  <button className="text-[#686868]  rounded-md  border border-[#686868] w-[192px] h-[40px] mr-4">
                    Request Hide Review
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
