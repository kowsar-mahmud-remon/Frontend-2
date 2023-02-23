import React from 'react';
import Image from 'next/image';
import img from '../../assets/images/image 8 (2).png';

const OrderTrackingPage01 = () => {
    const data = {
        name: 'Potol (Pointed Gourd) 500 ±30 gm',
        order_number: '#54872',
        category: 'Kacha Bazar',
        quantity: '1 kg',
        price: 'Tk 60',
        order_date: '03 Feb 2023',
        payment_status: 'paid'
    }
    return (
        <div className='px-[24px]'>
            <div className="text-[18px] breadcrumbs text-[#686868] hidden md:block mt-[45px]">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Shipping Mangements</a>
                    </li>
                    <li className="font-medium text-[#001E00]">Orders Tracking</li>
                </ul>
            </div>
            <h1 className='text-[24px] font-semibold text-[#FB641B] mb-[32px]'>Orders Tracking</h1>

            <div className=' shadow-lg max-w-[1426px] rounded-md'>
                <div className=' md:flex justify-center items-center gap-[16px]'>
                    <div>
                        <Image className='md:w-[291px] md:h-[233px]'
                            src={img}
                            alt='image' />
                    </div>
                    <div className='text-center md:text-left'>
                        <p className='text-[#001E00] font-semibold text-[16px] mb-[4px] '>{data.name}</p>
                        <p className='text-[#001E00] font-semibold text-[16px] mb-[4px]'>Order Number:  <span className='font-normal'>{data.order_number}</span></p>
                        <p className='text-[#001E00] font-semibold text-[16px] mb-[4px]'>Category:  <span className='font-normal'>{data.category}</span></p>
                        <p className='text-[#001E00] font-semibold text-[16px] mb-[4px]'>Quantity:  <span className='font-normal'>{data.quantity}</span></p>
                        <p className='text-[#001E00] font-semibold text-[16px] mb-[4px]'>Price:  <span className='font-normal'>{data.price}</span></p>
                        <p className='text-[#001E00] font-semibold text-[16px] mb-[4px]'>Order date:  <span className='font-normal'>{data.order_date}</span></p>
                        <p className='text-[#001E00] font-semibold text-[16px] mb-[4px]'>Payment Status:  <span className='font-normal'>{data.payment_status}</span></p>
                    </div>
                </div>
                <div className="hidden md:block mt-[48px] pb-[130px]">
                    <div className="flex justify-center items-center relative w-[100%]">


                        <div className="w-[23px] h-[23px] rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                        <div className="h-[7px] w-4/5 bg-[#F2F2F2]">
                            <div className="w-[35%] h-full bg-[#026C51]"></div>
                        </div>
                        <div className="w-[23px] h-[23px] rounded-full border-2 absolute left-[38%] z-10 bg-[#026C51] border-[#026C51]"></div>
                        <div className="w-[23px] h-[23px] rounded-full border-2 absolute left-[65%] z-10 bg-[#B7B7B7] border-[#B7B7B7]"></div>
                        <div className="w-[23px] h-[23px] rounded-full border-2 bg-[#B7B7B7] border-[#B7B7B7]"></div>

                    </div>
                    <div className="flex justify-center items-center ">
                        <div className="flex justify-between items-center w-[94%] mt-[16px]">
                            <div><p className='text-[#001E00] text-[18px]'>Order Accepted</p>
                                <p className='text-[#707070]  text-[14px] mt-[8px] text-center'>03 Feb 2023</p></div>
                            <div><p className='text-[#001E00] text-[18px]'>Processing</p>
                                <p className='text-[#707070]  text-[14px] mt-[8px] text-center'>03 Feb 2023</p></div>
                            <div> <p className='text-[#001E00] text-[18px]'>Shipping</p>
                                <p className='text-[#707070]  text-[14px] mt-[8px] text-center'>03 Feb 2023</p></div>
                            <div>  <p className='text-[#001E00] text-[18px]'>Delivered</p>
                                <p className='text-[#707070]  text-[14px] mt-[8px] text-center'>03 Feb 2023</p></div>



                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default OrderTrackingPage01;