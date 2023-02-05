import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaArrowLeft, FaRegSmile } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";


const MyReviewsResponsive = () => {
    const datas = [
        {
            id: '1', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '2', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Payment',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '3', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Payment',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '4', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Payment',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '5', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '6', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }
        ,
        {
            id: '7', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '8', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Delivered',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '9', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Processing',
            deliveredDate: 'Delivered on 21 Dec 2022'
        },
        {
            id: '10', orderId: '121312323213432', orderDate: 'Placed On 21 Dec 2022 10:21:00',
            image: '/image 8.png', peoductName: 'Tomato(Local) 500+30 gm', qty: '1', status: 'Processing',
            deliveredDate: 'Delivered on 21 Dec 2022'
        }

    ]
    const [isActive, setActive] = useState('review')
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const router = useRouter()
    return (
        <div className="mt-[66px] ml-[20px]">
            <div >
                <button  onClick={() => router.back()} className='flex items-center gap-[13px]'>
                    <FaArrowLeft className=''></FaArrowLeft>
                    <h1 className='text-[20px]  font-[500] text-[#001E00]'>My Reviews</h1>
                </button>
            </div>
            <div >
                <div className=" flex justify-evenly">
                    <button onClick={() => setActive('review')} className={isActive === 'review' ? "font-[500] text-[#FB641B] border-b-[2px] h-[45px] border-[#FB641B] text-[16px]" : "font-[500] text-[16px]"}>To Be Reviewed (3)</button>


                    <button onClick={() => setActive('history')} className={isActive === 'history' ? "font-[500] text-[#FB641B] border-b-[2px] h-[45px] border-[#FB641B] text-[16px]" : "font-[500] text-[16px]"}>History (11)</button>
                </div>
                <p className=" h-[0px]   border-[1px] border-solid  border-[#F2F2F2] w-[376px] "></p>
            </div>
            <div className="mt-[16px]">
                {
                    isActive === 'review' && datas.slice(0, 3).map((data) => <>

                        <div className="reviewResponsive mt-[28px]">
                            <div className="flex gap-[120px]">
                                <div>
                                    <p className="font-normal ml-[12px] pt-[12px] text-[#001E00] text-[12px]">Banglar Big Store</p>
                                    <p className="text-[#686868] mt-[4px] ml-[12px] font-normal text-[12px]">Placed On 21 Dce 2022 10:21:00</p>
                                </div>
                                <Link className="text-[14px] mt-[16px] text-[#FB641B] font-normal  italic" href="">REVIEW</Link>
                            </div>
                            <div className="flex mt-[16px] gap-[12px]">
                                <Image src='/image 8.png' width={44} height={36} className='rounded-[4px]' alt=""></Image>
                                <p className="text-[#001E00] text-[14px] font-[400]">Tomato (Local) 500 ±30 gm</p>
                            </div>

                        </div>
                    </>)
                }
                {
                    isActive === 'history' && datas.slice(0, 2).map((data) => <>
                        <div className="historyResponsive mt-[16px]">
                            <div>
                                <p className="font-normal ml-[12px] pt-[12px] text-[#001E00] text-[16px]">Banglar Big Store</p>
                                <p className="text-[#686868] mt-[4px] ml-[12px] font-normal text-[12px]">Placed On 21 Dce 2022 10:21:00</p>
                            </div>
                            <div className="historyInside mt-[8px] ml-[12px]">
                                <div className="flex pt-[12px] ml-[24px] gap-[8px] items-center">
                                    <Image src='/image 8.png' width={44} height={36} className='rounded-[4px]' alt=""></Image>
                                    <p className="text-[#001E00] text-[14px] font-[400]">Tomato (Local) 500 ±30 gm</p>
                                </div>

                                <div className="ml-[116px]">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#FB641B"
                                    />
                                </div>
                            </div>

                            <div className="ml-[12px] mt-[8px]">
                                <p className="text-[#686868] text-[14px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                            <div className="mt-[8px] flex gap-[8px]">
                                {
                                    datas.slice(0, 3).map((data) => <><Image src='/image 8.png' width={68} height={56} alt=""></Image></>)
                                }
                            </div>
                            <div className="mt-[24px] ml-[12px]">
                                <p className="text-[#001E00] font-[500] text-[16px]">Your seller review:</p>
                                <div className="flex gap-[16px] mt-[16px]">
                                    <FaRegSmile className="w-[24px] h-[24px]  text-[#FB641B]"></FaRegSmile>
                                    <p className="font-[400] text-[16px] text-[#686868]">Positive</p>
                                </div>
                            </div>
                            <div className="mt-[24px]">
                                <p className="font-[500] text-[16px] ml-[12px] text-[#001E00]">Rate your Rider:</p>
                                <div className="ml-[12px]">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#FB641B"
                                    />
                                </div>
                            </div>

                        </div>

                    </>)

                }
            </div>
        </div>
    );
};

export default MyReviewsResponsive;