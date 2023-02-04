import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const MyReviews = () => {

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
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(3)
    const count = datas.length
    const pages = Math.ceil(count /size)
    console.log(pages)
    console.log(count)

    return (
        <div>
            <div>
                <h1 className="font-[400] text-[24px] text-[#FB641B]">My Reviews</h1>
            </div>
            <div className="reviewBox border-b-4  mt-[32px]">
                <div className="ml-[30px] p-[7px]  gap-[54px] flex">


                    <button onClick={() => setActive('review')} className={isActive === 'review' ? "font-[500] text-[#FB641B] border-b-[2px] h-[42px] border-[#FB641B] text-[16px]" : "font-[500] text-[16px]"}>To Be Reviewed (3)</button>


                    <button onClick={() => setActive('history')} className={isActive === 'history' ? "font-[500] text-[#FB641B] border-b-[2px] h-[45px] border-[#FB641B] text-[16px]" : "font-[500] text-[16px]"}>History (11)</button>

                    {/* <button onClick={() => setActive('history')} href='#' className={isActive === 'history' ? "font-[500] text-[#FB641B]  text-[16px]" : "font-[500] text-[16px]"}>History (11)</button> */}

                </div>
            </div>


            {
                isActive === 'review' && datas.slice(0, 3).map((data) => <>

                    <div className="reviewDetails flex mt-[16px]">
                        <div className="w-[559px]">
                            <p className="font-[400] pt-[16px] pl-[16px] text-[14px] text-[#686868]">Purchased on: 21 Dce 2022 10:21:00</p>
                            <div className="flex mt-[23px] gap-[16px]">
                                <Image src='/image 8.png' width={57} height={46} className='rounded-[4px]' alt=""></Image>
                                <p className="text-[#001E00] text-[16px] font-[400]">Tomato (Local) 500 ±30 gm</p>
                            </div>
                        </div>
                        <div className="divider divider-horizontal text-[#686868] border-solid mt-[26px] mb-[19px] h-[104px]"></div>
                        <div className="w-[365px] ">
                            <p className="text-[16px] ml-[87px] pt-[41px] font-[400] text-[#686868]">Sold by <span className="text-[#287DF3]">Banglar Big Store</span></p>

                            <button className="reviewBtn ml-[116px] mt-[16px]"><span className="text-[#FB641B] font-[400] text-[16px]">REVIEW</span></button>
                        </div>

                    </div>
                </>)
            }

            {
                  isActive === 'history' && datas.slice(0, 3).map((data) => <>

                     <h1>mihir</h1>
              </>)

            }

            <div className="btn-group mt-[16px] ml-[850px]">
                <button onClick={() => setPage(page - 1)} className="w-[24px]  h-[28px] bg-[#F2F2F2] rounded-[4px]"><FaAngleLeft className="m-[3px] text-[#707070]"></FaAngleLeft></button>
                <button className="w-[24px] h-[28px] text-white rounded-[4px] bg-[#FB641B] ">{page}</button>
                <button onClick={() => setPage(page + 1)} className="w-[24px]  h-[28px] bg-[#F2F2F2] rounded-[4px]"><FaAngleRight className="m-[3px] text-[#707070]"></FaAngleRight></button>
            </div>

        </div>
    );
};

export default MyReviews;