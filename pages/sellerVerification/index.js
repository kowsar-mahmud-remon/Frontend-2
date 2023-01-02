import React, { useState } from 'react';
import Image from 'next/image'
import { FaCloud } from 'react-icons/fa'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import SideNav from '../../components/SideNav/SideNav'


const index = () => {
    const [nidFront, setNidFront] = useState(null)
    const [nidBack, setNidBack] = useState(null)
    const [bankInfo, setBankInfo] = useState(null)

    function handleFrontChange(event) {
        setNidFront(event.target.files[0])
    }
    function handleBackChange(event) {
        setNidBack(event.target.files[0])
    }
    function handleBankChange(event) {
        setBankInfo(event.target.files[0])
    }
    return (
        <div className="">
            {/* <SideNav /> */}
            <div className="shadow-lg pb-40 px-5 md:pl-10">
                <div className="">
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
                    <h4 className="max-text-[24px] font-semibold text-[#686868]">Please give your ID & Bank Information</h4>
                    <div className="grid grid-cols-2">
                        {/* <div className=""> */}
                        <div className="max-w-[680px] shadow-lg items-center border bg-[#FB641B] text-white rounded-md p-5">
                            <p className='text-lg font-semibold'>I’m an individual</p>
                            <p>Most sellers on Banglar Big Store fall into this category</p>
                        </div>
                        {/* </div> */}
                        {/* <div className=""> */}
                        <div className="max-w-[680px] items-center border text-[#FB641B] rounded-md p-5 shadow-lg">
                            <p className='text-lg font-semibold'>I’m a Sole Trader or Incorporated Business</p>
                            <p>A registered legal entity</p>
                        </div>
                        {/* </div> */}
                    </div>

                </div>
                <h4 className="max-text-[24px] mt-10 font-semibold text-[#686868]">Please give your ID & Bank Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div className="my-4"> 
                        <p className="text-sm md:text-lg">Upload ID Card Front*</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="max-w-[680px] md:w-[380px] h-[170px] border-5 flex justify-between items-center border rounded-lg">
                                {nidFront ? <div>
                                    <Image src={URL.createObjectURL(nidFront)} alt="Preview" width="200" height="200" />
                                    <p className="md:ml-5">NID Card Front</p>
                                </div> :
                                    <div className="md:ml-10 w-200 h-200 border border-5 p-4 rounded-lg text-sm md:text-md">NID Front Photo</div>
                                }

                                <label for="frontimg">
                                    <AiOutlineCloudUpload className='text-[66px] text-[#FB641B] mr-16' />
                                    <p className='md:-ml-3 text-sm md:text-md'>upload photo</p>
                                </label>

                                <input id="frontimg" style={{ display: "none", visibility: "none" }} type="file" onChange={handleFrontChange} />

                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="text-sm md:text-lg">Upload ID Card Back*</p>
                        <div className="grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="max-w-[680px] md:w-full lg:w-[680px] h-[170px] border-5 flex justify-between items-center border rounded-lg">
                                {nidBack ? <div>
                                    <Image src={URL.createObjectURL(nidBack)} alt="Preview" width="200" height="200" />
                                    <p className="md:ml-5 text-sm md:text-md">NID Card Back</p>
                                </div> :
                                    <div className="w-200 h-200 border border-5 p-4 md:ml-10 rounded-lg text-sm md:text-md">NID Back Photo</div>
                                }

                                <label for="backimg">
                                    <AiOutlineCloudUpload className='text-[66px] text-[#FB641B] mr-16' />
                                    <p className='md:-ml-3 text-sm md:text-md'>upload photo</p>
                                </label>

                                <input id="backimg" style={{ display: "none", visibility: "none" }} type="file" onChange={handleBackChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-5">
                    <div className="">
                        <p className="text-sm md:text-md">ID Name*</p>
                        <input type="text" placeholder="Type here" className="input input-bordered max-w-[680px]" />
                    </div>
                    <div className="">
                        <p className="text-sm md:text-md">State Name*</p>
                        <input type="text" placeholder="Type here" className="input input-bordered  max-w-[680px]" />
                    </div>
                </div>
                <div className="my-4">
                    <h5 className="max-text-xl font-semibold my-5 text-[#686868]">Please give your ID & Bank Information</h5>
                    <div className="">
                        <p className="text-sm md:text-md">Verify Your Bank Account*</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="max-w-[680px] md:w-[680px] h-[170px] border-5 flex justify-between items-center border rounded-lg">
                                {bankInfo ? <div>
                                    <Image src={URL.createObjectURL(bankInfo)} alt="Preview" width="200" height="200" />
                                    <p className="md:ml-5 text-sm md:text-md">Upload a Cheque Copy</p>
                                </div> :
                                    <div className="max-w-200 max-h-200 border border-5 p-4 md:ml-10 rounded-lg text-sm md:text-md">Upload a Cheque Copy</div>
                                }

                                <label for="bankimg">
                                    <AiOutlineCloudUpload className='text-[66px] text-[#FB641B] mr-16' />
                                    <p className='md:-ml-3 text-sm md:text-md'>upload photo</p>
                                </label>

                                <input id="bankimg" style={{ display: "none", visibility: "none" }} type="file" onChange={handleBankChange} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                        <div className="">
                            <p className="text-sm md:text-md">Account Holder Name*</p>
                            <input type="text" placeholder="Branch" className="input input-bordered max-w-[680px]" />
                        </div>
                        <div className="">
                            <p className="text-sm md:text-md">Bank Name*</p>
                            <input type="text" placeholder="Branch" className="input input-bordered  max-w-[680px]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 my-2">
                        <div className="">
                            <p className="text-sm md:text-md">Branch Name*</p>
                            <input type="text" placeholder="Branch" className="input input-bordered max-w-[680px]" />
                        </div>
                        <div className="">
                            <p className="text-sm md:text-md">Account Number*</p>
                            <input type="text" placeholder="Account" className="input input-bordered max-w-[680px]" />
                        </div>
                    </div>
                    <div className="">
                        <p className="text-sm md:text-md">Routing Number*</p>
                        <input type="text" placeholder="Routing Number" className="input input-bordered  md:max-w-[680px]" />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default index;

