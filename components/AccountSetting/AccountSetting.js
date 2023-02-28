import React from 'react';
import Image from 'next/image'
import img from '../../assets/images/Vector (10).png'
import { useState } from 'react';
import Link from 'next/link';

const AccountSetting = () => {
    const [shop_name, setShop] = useState(true)
    const [seller_name, setSellerName] = useState(true)
    const [billing, setBilling] = useState(true)
    const [mobile, setMobile] = useState(true)
    const [email, setEmail] = useState(true)
    const [pass, setPass] = useState(false)
    const [seller_id, setSeller_id] = useState(true)
    const [check, setCheck] = useState()
    console.log(check)
    const data = {
        shop_name: 'Banglar Big Store',
        seller_name: 'Nasir Uddin',
        billing_address: 'Mirpur,Dhaka',
        mobile_number: '+8801712345678',
        email: 'abc@gmail.com',
        password: '12345',
        seller_id: '1234'
    }
    return (
        <div className='md:mt-[45px]'>
            <p className='text-[1.3vw] font-semibold text-[#686868]'>Home {'>'} Account & Setting {'>'}  <span className='text-[#001E00]'>Account Setting</span></p>
            <h1 className='text-[24px] mb-[32px] text-[#FB641B] mt-[8px] font-semibold'>Account Setting</h1>

            <div className='shadow-small p-[24px] rounded-lg'>
                <form className='flex flex-wrap gap-x-[35px] pb-[15vw]'>
                    <div className='w-[46%]'>
                        <div className="form-control  mb-[1.6vw]">
                            <label className="label mb-[0.8vw]">
                                <span className="label-text text-[#001E00] text-[1.3vw]">Shop Name</span>
                            </label>
                            <div className='flex items-center gap-x-[20px]'>
                                <input type="text" disabled={shop_name} placeholder={`${data.shop_name}`} className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                <div onClick={() => setShop(false)}>
                                    <Image
                                        className='w-[1.8vw] h-[1.8vw]'
                                        src={img}
                                        alt='Image' />
                                </div>
                            </div>
                        </div>
                        <div className="form-control  mb-[1.6vw]">
                            <label className="label mb-[0.8vw]">
                                <span className="label-text text-[#001E00] text-[1.3vw]">Billing Address</span>
                            </label>
                            <div className='flex items-center gap-[20px]'>
                                <input type="text" disabled={billing} placeholder={`${data.billing_address}`} className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                <div onClick={() => setBilling(false)}>
                                    <Image
                                        className='w-[1.8vw] h-[1.8vw]'
                                        src={img}
                                        alt='Image' />
                                </div>
                            </div>
                        </div>
                        <div className="form-control  mb-[1.6vw]">
                            <label className="label mb-[0.8vw]">
                                <span className="label-text text-[#001E00] text-[1.3vw]">Email</span>
                            </label>
                            <div className='flex items-center gap-[20px]'>
                                <input type="email" disabled={email} placeholder={`${data.email}`} className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                <div onClick={() => setEmail(false)}>
                                    <Image
                                        className='w-[1.8vw] h-[1.8vw]'
                                        src={img}
                                        alt='Image' />
                                </div>
                            </div>
                        </div>
                        <div className="form-control  mb-[1.6vw]">
                            <label className="label mb-[0.8vw]">
                                <span className="label-text text-[#001E00] text-[1.3vw]">Seller ID</span>
                            </label>
                            <div className='flex items-center gap-[20px]'>
                                <input type="text" disabled={seller_id} placeholder={`${data.seller_id}`} className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                <div onClick={() => setSeller_id(false)}>
                                    <Image
                                        className='w-[1.8vw] h-[1.8vw]'
                                        src={img}
                                        alt='Image' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[46%]'>
                        <div className="form-control  mb-[1.6vw]">
                            <label className="label mb-[0.8vw]">
                                <span className="label-text text-[#001E00] text-[1.3vw]">Seller Name</span>
                            </label>
                            <div className='flex items-center gap-[20px]'>
                                <input type="text" disabled={seller_name} placeholder={`${data.seller_name}`} className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                <div onClick={() => setSellerName(false)}>
                                    <Image
                                        className='w-[1.8vw] h-[1.8vw]'
                                        src={img}
                                        alt='Image' />
                                </div>
                            </div>
                        </div>

                        <div className="form-control  mb-[1.6vw]">
                            <label className="label mb-[0.8vw]">
                                <span className="label-text text-[#001E00] text-[1.3vw]">Mobile Number</span>
                            </label>
                            <div className='flex items-center gap-[20px]'>
                                <input type="text" disabled={mobile} placeholder={`${data.mobile_number}`} className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                <div onClick={() => setMobile(false)}>
                                    <Image
                                        className='w-[1.8vw] h-[1.8vw]'
                                        src={img}
                                        alt='Image' />
                                </div>
                            </div>
                        </div>

                        <div className="form-control  ">
                            <label className="label mb-[0.8vw]">
                                <span className="label-text text-[#001E00] text-[1.3vw]">Password</span>
                            </label>
                            <div className='flex items-center gap-[20px]'>
                                {check ? <> <input type="text" disabled={pass} value={`${data.password}`} className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " /></>
                                    :
                                    <> <input type="text" disabled={pass} value='******' className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " /></>
                                }
                                <div onClick={() => setPass(true)}>
                                    <Image
                                        className='w-[1.8vw] h-[1.8vw]'
                                        src={img}
                                        alt='Image' />
                                </div>
                            </div>

                            <div className='mt-[12px] flex items-center'>
                                <input type="checkbox" onClick={(e) => setCheck(e.target.checked)} id="pass1" name="pass1" value="password" className="checkbox checkbox-[#686868] w-[1vw] h-[1vw] rounded-[3px]" />
                                <label for="pass1" className='text-[#686868] text-[16px] ml-[10px]'> Show Password</label>
                            </div>


                        </div>


                        {pass === true &&
                            <div className='mt-[1.6vw]'>
                                <div className="form-control w-[86%] ">
                                    <label className="label mb-[0.8vw]">
                                        <span className="label-text text-[#001E00] text-[1.3vw]">New Password</span>
                                    </label>
                                    <div className='flex items-center gap-[20px]'>
                                        <input type="password" placeholder='New Password' className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                    </div>

                                </div>
                                <div className="form-control  mt-[1.6vw] w-[86%]">
                                    <label className="label mb-[0.8vw]">
                                        <span className="label-text text-[#001E00] text-[1.3vw]">Confirm Password</span>
                                    </label>
                                    <div className='flex items-center gap-[20px]'>
                                        <input type="password" placeholder='Confirm Password' className=" text-[1.3vw] text-[#686868] border border-[#B7B7B7] w-full pl-[16px] h-[3.22vw] focus:outline-none rounded-md  " />
                                    </div>

                                </div>
                            </div>
                        }
                    </div>

                </form>
            </div>
            <div className='flex justify-end gap-4 pb-[16px] mt-[1.6vw]'>
                <button className='btn btn-outline btn-[#707070] text-[#707070] text-[16px] w-[134px] h-[40px]'>Cancel</button>
                <button className='btn bg-[#FB641B] text-white w-[134px] text-[16px] h-[40px]'>update</button>
            </div>
        </div>
    );
};

export default AccountSetting;