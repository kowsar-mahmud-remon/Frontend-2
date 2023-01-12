import Image from 'next/image';
import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import reviewer from '../../assets/images/product_page/Ellipse 38.png'
import moment from "moment";

const ProductReview = ({ rev }) => {

    const { productImg, review, rating, createdAt, reviewOwnerId: { firstName, lastName, profilePicture } } = rev || {}

    return (
        <div>
            <div className="">
                <div className='mb-4'>
                    <div className="mt-[24px] flex gap-3">
                        <Image
                            src={profilePicture?.img ? profilePicture?.img : reviewer}
                            width="26"
                            height="26"
                            alt="reviewer"
                        ></Image>
                        <p className="text-[18px] text-[#001E00]">{firstName} {lastName}</p>
                        {/* <div className="flex items-center">
                        <BsFillStarFill className="text-[#FB641B]" />
                        <BsFillStarFill className="text-[#FB641B]" />
                        <BsFillStarFill className="text-[#FB641B]" />
                        <BsFillStarFill className="text-[#FB641B]" />
                        <BsFillStarFill className="text-[#FB641B]" />
                    </div> */}
                        <div className="flex items-center">
                            {
                                [...Array(Number(rating))].map((star, index) => {
                                    return <>
                                        <BsFillStarFill
                                            key={index}
                                            className='text-[#FB641B]'
                                        />

                                    </>

                                })



                            }
                            {
                                [...Array(5 - Number(rating))].map((star, index) => <BsFillStarFill
                                    key={index}
                                    className="text-[#F2F3F7]" />)
                            }
                        </div>
                        {/* <p>{rating}</p> */}
                    </div>
                    <small className="text-[#686868] ">{moment(createdAt).fromNow()}</small>
                </div>
                <div>
                    <p className="text-[16px] text-[#001E00] leading-[168%]">{review}</p>
                </div>
                <div className="flex gap-5 mt-3">

                    {
                        productImg?.img?.map((img, i) => <div
                            key={i}
                            className=""
                        >
                            <Image
                                loader={() => img}
                                src={img}
                                className=" rounded-md"
                                width="80"
                                height="80"
                                alt="tomato_img"
                            ></Image>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductReview;