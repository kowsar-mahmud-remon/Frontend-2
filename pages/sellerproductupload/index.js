import React from 'react';
import Image from 'next/image'
import shopimg from '../../assets/images/product_page/shopping-bag (1) 1.png'
import NavicationWithSideNavLayout from '../../layouts/NavicationWithSideNavLayout';

const sellerproductupload = () => {
    return (
        <NavicationWithSideNavLayout>
            <div className='shadow-lg w-full'>
                <div className="px-10 py-10">
                    <h4 className="text-[24px] text-[#FB641B] font-semibold">New Seller Verification</h4>
                    <p className='text-[10px] md:text-md'>YOUR STORE IS INACTIVE UNTIL YOU COMPLETE THE STEPS BELOW</p>
                    <div className="flex items-center my-8">
                        <div className="bg-[#FB641B] text-white border border-white rounded-3xl px-1 text-[5px] md:text-[12px]">1</div>
                        <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-5 md:px-20 rounded-xl">Add Shop Name</div>
                        <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] border border-white px-1 rounded-lg">2</div>
                        <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-5 md:px-20 rounded-xl">Add Shop Name</div>
                        <div className="bg-[#FB641B] text-[5px] md:text-[12px] px-1 text-white rounded-lg">3</div>
                        <div className="bg-[#FB641B] text-[5px] md:text-[12px] px-5 md:px-20 text-white rounded-xl">Add Shop Name</div>
                        <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">4</div>
                        <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">Add Shop Name</div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <Image src={shopimg} width="337" height="337" alt="shopImg" />
                    <button className="text-white bg-[#FB641B] btn w-1/5 my-1 mt-10">Upload Your product</button>
                    <button className="text-[#FB641B] btn btn-outline btn-[#FB641B] w-1/5 mb-10 hover:bg-[#FB641B] hover:btn-[#FB641B]">Skip</button>
                </div>
            </div>
        </NavicationWithSideNavLayout>
    );
};

export default sellerproductupload;