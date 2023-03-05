import React from 'react';
import Image from 'next/image';
import upimg from '../../assets/images/Vector (5).png';
import vt6 from '../../assets/images/Vector (6).png';

const SellerVerificationPage5 = () => {
    return (
        <div className='lg:px-[120px] mt-[43px]'>
            <h4 className='text-[#001E00] font-semibold text-[24px]'>New Seller Verification</h4>
            <p className='text-[#686868] text-[16px] mt-1 mb-[41px]'>your store is inactive until you complete the steps below</p>
            <div className="flex items-center my-8">
                <div className="bg-[#FB641B] text-white border border-white rounded-3xl px-1 text-[5px] md:text-[12px]">
                    1
                </div>
                <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-5 md:px-20 rounded-xl">
                    Add Shop Name
                </div>
                <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] px-1 rounded-lg border border-white">
                    2
                </div>
                <div className="bg-[#FB641B] text-white text-[5px] md:text-[12px] border border-white px-5 md:px-20 rounded-xl">
                    Add Shop Address
                </div>
                <div className="bg-[#FB641B]  text-white text-[5px] md:text-[12px] px-1 rounded-lg border border-white">
                    3
                </div>
                <div className="bg-[#FB641B] text-[5px] md:text-[12px] border text-white border-white px-5 md:px-20 rounded-xl">
                    Verify ID & Bank
                </div>
                <div className=" text-[5px] md:text-[12px] px-1 rounded-lg border border-black">
                    4
                </div>
                <div className=" text-[5px] md:text-[12px] border border-black px-5 md:px-20 rounded-xl">
                    Add Product
                </div>
                {/* for profile info */}
            </div>
            <h4 className='text-[#001E00] font-semibold text-[24px] mb-[16px]'>Account Type.</h4>
            <div className='flex gap-4'>
                <div className=' shadow-xl p-[15px] w-[512px] rounded-md'>
                    <p className='text-[18px] text-[#FB641B]'>I’m an individual</p>
                    <p className='text-[14px] text-[#FB641B]'>Most sellers on Banglar Big Store fall into this category</p>
                </div>
                <div className='  bg-[#FB641B] text-white p-[15px] w-[512px] rounded-md'>
                    <p className='text-[18px]'>I’m a Sole Trader or Incorporated Business</p>
                    <p className='text-[14px] '>A registered legal entity</p>
                </div>
            </div>

            <h3 className='text-[24px] text-[#001E00] font-semibold mt-[32px] mb-[16px]'>Verify Corporate File</h3>

            <div className='flex flex-wrap shadow-xl p-[16px] gap-4 rounded-md w-[1070px]'>
                {/* --------- div start-------------- */}
                <div >
                    <h4 className='text-[16px] text-[#001E00] font-semibold mb-[16px]'>Trade License*</h4>
                    <div className='flex justify-center items-center border border-[#B7B7B7] rounded-md w-[510px] h-[250px]'>
                        <div>
                            <Image className='h-[39px] w-[59px] ml-[44px]'
                                src={upimg}
                                alt='Upload Image'
                            />
                            <p className='text-[16px] text-[#686868] mt-[16px]'>Upload Trade License</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x w-[510px] border h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                        <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>No.</p></div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                    </div>
                </div>
                {/* --------- div end-------------- */}
                {/* --------- div start-------------- */}
                <div >
                    <h4 className='text-[16px] text-[#001E00] font-semibold mb-[16px]'>TIN Certificate*</h4>
                    <div className='flex justify-center items-center border border-[#B7B7B7] rounded-md w-[510px] h-[250px]'>
                        <div>
                            <Image className='h-[39px] w-[59px] ml-[44px]'
                                src={upimg}
                                alt='Upload Image'
                            />
                            <p className='text-[16px] text-[#686868] mt-[16px]'>Upload Trade License</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x w-[510px] border h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                        <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>No.</p></div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                    </div>
                </div>
                {/* --------- div end-------------- */}
                {/* --------- div start-------------- */}
                <div >
                    <h4 className='text-[16px] text-[#001E00] font-semibold mb-[16px] mt-[32px]'>Vat Certificate (Optional)</h4>
                    <div className='flex justify-center items-center border border-[#B7B7B7] rounded-md w-[510px] h-[250px]'>
                        <div>
                            <Image className='h-[39px] w-[59px] ml-[44px]'
                                src={upimg}
                                alt='Upload Image'
                            />
                            <p className='text-[16px] text-[#686868] mt-[16px]'>Upload Trade License</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x w-[510px] border h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                        <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>No.</p></div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                    </div>
                </div>
                {/* --------- div end-------------- */}
                {/* --------- div start-------------- */}
                <div >
                    <h4 className='text-[16px] text-[#001E00] font-semibold mb-[16px] mt-[32px]'> IRC Certificate (Optional)</h4>
                    <div className='flex justify-center items-center border border-[#B7B7B7] rounded-md w-[510px] h-[250px]'>
                        <div>
                            <Image className='h-[39px] w-[59px] ml-[44px]'
                                src={upimg}
                                alt='Upload Image'
                            />
                            <p className='text-[16px] text-[#686868] mt-[16px]'>Upload Trade License</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x w-[510px] border h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                        <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>No.</p></div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                    </div>
                </div>
                {/* --------- div end-------------- */}
                {/* --------- div start-------------- */}
                <div >
                    <h4 className='text-[16px] text-[#001E00] font-semibold mb-[16px] mt-[32px]'>ERC Certificate (Optional)</h4>
                    <div className='flex justify-center items-center border border-[#B7B7B7] rounded-md w-[510px] h-[250px]'>
                        <div>
                            <Image className='h-[39px] w-[59px] ml-[44px]'
                                src={upimg}
                                alt='Upload Image'
                            />
                            <p className='text-[16px] text-[#686868] mt-[16px]'>Upload Trade License</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x w-[510px] border h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                        <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>No.</p></div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                    </div>
                </div>
                {/* --------- div end-------------- */}
                {/* --------- div start-------------- */}
                <div >
                    <h4 className='text-[16px] text-[#001E00] font-semibold mb-[16px] mt-[32px]'>Any Association Certificate (Optional)</h4>
                    <div className='flex justify-center items-center border border-[#B7B7B7] rounded-md w-[510px] h-[250px]'>
                        <div>
                            <Image className='h-[39px] w-[59px] ml-[44px]'
                                src={upimg}
                                alt='Upload Image'
                            />
                            <p className='text-[16px] text-[#686868] mt-[16px]'>Upload Trade License</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x w-[510px] border h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                        <div className='flex items-center ml-[16px]'><p className='text-[#707070] text-[13px]'>No.</p></div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                        <div className='flex justify-between items-center px-[16px]'>
                            <p className='text-[#707070] text-[13px]'>Es.</p>
                            <Image className='h-[20px] w-[20px] '
                                src={vt6}
                                alt='Upload Image'
                            />
                        </div>
                    </div>
                </div>
                {/* --------- div end-------------- */}
            </div>

        </div>
    );
};

export default SellerVerificationPage5;