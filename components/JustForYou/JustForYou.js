import Image from "next/image";
import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { FaAngleRight, FaHeart } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import img from "../../assets/images/image 7.png";
import Vectorimg from "../../assets/images/Vectorimg.png";
import Vectorimg2 from "../../assets/images/Vector2.png";
import img2 from "../../assets/images/image 77.png";
import img3 from "../../assets/images/image 4.png";
import img4 from "../../assets/images/image 7.png";
import img5 from "../../assets/images/image 88.png";
import img6 from "../../assets/images/image 9.png";
import sellerImg from "../../assets/images/seller.png";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const JustForYou = () => {
    const [purchased, setPurchased] = useState(false);
    const productDetails = [
        {
            id: 1,
            img: img4,
            price: 124,
            title: "Misti Kumra Fali (Sweet Pumpkin Fali)",
            rating: 4.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
        {
            id: 2,
            img: img2,
            price: 18,
            title: "Kacha Morich (Green Chili) 250 ±15 gm",
            rating: 3.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
        {
            id: 3,
            img: img5,
            price: 160,
            title: "Tomato (Local) 500 ±30 gm",
            rating: 1.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
        {
            id: 4,
            img: img6,
            price: 10018,
            title: "Potol (Pointed Gourd ) 500 ±30 gm",
            rating: 4.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
        {
            id: 5,
            img: img4,
            price: 124,
            title: "Misti Kumra Fali (Sweet Pumpkin Fali)",
            rating: 4.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
        {
            id: 6,
            img: img2,
            price: 18,
            title: "Kacha Morich (Green Chili) 250 ±15 gm",
            rating: 3.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
        {
            id: 7,
            img: img5,
            price: 160,
            title: "Tomato (Local) 500 ±30 gm",
            rating: 1.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
        {
            id: 8,
            img: img6,
            price: 10018,
            title: "Potol (Pointed Gourd ) 500 ±30 gm",
            rating: 4.9,
            ratingDetails: "24 Ratings & 5 Reviews",
            seller: sellerImg,
        },
    ];
    return (
        <div>
            <div className="max-w-[960px] mx-auto mt-6 ">
                <p className="mb-4 text-2xl font-medium">Just For You</p>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {productDetails?.map((details) => (
                        <div key={details.id} className="card pb-10 shadow-small">
                            <figure>
                                <Image
                                    className="w-[220px] h-[154px] mb-3 object-contain relative"
                                    src={details.img.src}
                                    alt=""
                                    width={220}
                                    height={154}
                                />
                                {/* love  */}
                                <div className="sellerloveButton absolute  right-[8px] top-[6px] mt-[10px] w-[28px] h-[28px] flex items-center justify-center rounded-full">
                                    <FaHeart className=" text-[#F2F2F2]  w-[16px] h-[16px] hover:fill-[#FB641B]  "></FaHeart>
                                </div>
                            </figure>
                            <div className="card-body p-4">
                                <p className=" text-xl text-[#FB641B] font-medium mb-[10px]">
                                    Tk {details.price}
                                </p>
                                <p className=" text-base font-medium mb-[10px]">
                                    {details.title}
                                </p>
                                <div className="flex mb-[10px]">
                                    <div className="">
                                        <p className="bg-[#026C51] w-10px p-[2px]  items-center rounded-sm flex text-white pl-1 text-xs">
                                            {details.rating}{" "}
                                            <FaStar className="ml-2 bg-[#026C51] text-white"></FaStar>
                                        </p>
                                    </div>
                                    <p className="text-[#686868] ml-2">{details.ratingDetails}</p>
                                </div>
                                <div className="flex mb-[10px]">
                                    <span className=" text-sm text-[#686868] mr-2">Seller: </span>
                                    <Image
                                        className="w-[80px] object-fill"
                                        src={details.seller.src}
                                        alt="Picture of the author"
                                        width={90}
                                        height={10}
                                    />
                                </div>
                                <button className="btn bg-[#FB641B] h-[38px] text-white normal-case text-xl pt-2">
                                    Add to Cart
                                    <Image
                                        className="w-[24px]"
                                        src={Vectorimg2}
                                        alt="Picture of the author"
                                        width={24}
                                        height={20}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JustForYou;