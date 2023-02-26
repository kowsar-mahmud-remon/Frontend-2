import React from 'react';
import img1 from '../../assets/images/image 329.png'
import img2 from '../../assets/images/image 369.png'
import Image from 'next/image';

const CouponManagement02 = () => {
    return (
        <div className='md:mt-[45px]'>
            <p className='text-[1.3vw] font-semibold text-[#686868]'>Home {'>'} Tax & Offers {'>'}  <span className='text-[#001E00]'>Coupon Management</span></p>
            <h1 className='text-[24px] mb-[32px] text-[#FB641B] mt-[8px] font-semibold'>Coupon Details</h1>
            <div className='shadow-lg  rounded-md max-w-[1426px]'>
                <div className='m-[24px]'>
                    <h1 className='text-[24px] font-semibold text-[#001E00]'>Coupon Details</h1>
                    <div className='flex gap-[25px]'>
                        <div className=''>
                            <Image className='md:w-[15vw] max-h-[204px] mt-[16px]'
                                src={img2}
                                alt='iamge'
                            />
                        </div>
                        <div className='mt-[15px]'>

                            <div className='flex items-center  text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Coupon Title:</h2>
                                <input type="text" placeholder="Type here" className="input input-bordered input-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md" />
                            </div>
                            <div className='flex items-center whitespace-nowrap text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Coupon Code:</h2>
                                <input type="text" placeholder="Type here" className="input input-bordered input-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md" />
                            </div>
                            <div className='flex items-center  text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Discount (%):</h2>
                                <input type="text" placeholder="Type here" className="input input-bordered input-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md" />
                            </div>
                            <div className='flex items-center whitespace-nowrap text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Use Limit:</h2>
                                <input type="text" placeholder="Type here" className="input input-bordered input-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md" />
                            </div>
                            <div className='flex items-center whitespace-nowrap text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>End Date:</h2>
                                <input type="text" placeholder="Type here" className="input input-bordered input-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md" />
                            </div>
                            <div className='flex items-center  text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Price:</h2>
                                <input type="text" placeholder="Type here" className="input input-bordered input-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md" />
                            </div>
                            <div className='flex items-center  text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Point:</h2>
                                <input type="text" placeholder="Type here" className="input input-bordered input-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md" />
                            </div>




                        </div>
                    </div>
                </div>
                <hr className=' border-[#B7B7B7]' />
                <div className='m-[24px] mb-[32px]'>
                    <h1 className='text-[24px] font-semibold text-[#001E00]'>Select Product</h1>
                    <div className='flex gap-[25px]'>
                        <div className=''>
                            <Image className='md:w-[15vw] max-h-[204px] mt-[16px]'
                                src={img1}
                                alt='iamge'
                            />
                        </div>
                        <div className='mt-[15px]'>
                            <div className='flex items-center  text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[1vw] w-[42%]  text-[1.4vw]  font-semibold text-[#001E00]'>Product Name:</h2>
                                <div className=''>
                                    <select className='border border-[#B7B7B7]  text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md px-[10px]'>

                                        <option className='text-[#707070]'>All Product</option>
                                        <option className='text-[#707070]'>Add Product</option>
                                    </select>
                                </div>

                            </div>
                            <div className='flex items-center  text-[#001E00] mb-[16px]'>
                                <h2 className='mr-[1vw] w-[42%]  text-[1.4vw]  font-semibold text-[#001E00]'>Product SKU:</h2>
                                <div className=''>
                                    <select className='border border-[#B7B7B7] text-[1.3vw] w-[23vw] h-[2.5vw] text-[#001E00] rounded-md px-[10px]'>

                                        <option className='text-[#707070]'>All Product</option>
                                        <option className='text-[#707070]'>Add Product</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-4 pb-[16px]'>
                    <button className='btn btn-outline btn-[#707070] text-[#707070] text-[16px] w-[134px] h-[40px]'>Cancel</button>
                    <button className='btn bg-[#FB641B] text-white w-[134px] text-[16px] h-[40px]'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CouponManagement02;