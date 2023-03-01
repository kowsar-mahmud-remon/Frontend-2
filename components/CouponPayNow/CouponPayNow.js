import React from 'react';
import Image from 'next/image'
import img1 from '../../assets/images/credit-card 1.png'
import img2 from '../../assets/images/unnamed.png'
import img3 from '../../assets/images/DBBL.png'
import img4 from '../../assets/images/rocket.png'
import img5 from '../../assets/images/BKASH.png'
import Link from 'next/link';


const CouponPayNow = () => {
    return (
        <div className='md:mt-[45px]'>
            <p className='text-[1.3vw] font-semibold text-[#686868]'>Home {'>'} Tax & Offers {'>'}  <span className='text-[#001E00]'>Coupon Management</span></p>
            <h1 className='text-[24px] mb-[32px] text-[#FB641B] mt-[8px] font-semibold'>Buy The Coupon</h1>

            <div className={`px-[24px] w-[70%] shadow-small mx-auto rounded-lg`}>
                <h1 className='text-[#001E00] text-center pt-[14px] text-[24px] font-semibold pb-[24px]'>Payment Summary</h1>
                <hr className='mb-[24px]' />
                <div className='flex items-center  text-[#001E00] mb-[10px]'>
                    <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Coupon Title:</h2>
                    <h2 className="  text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md  " >50% Discount Product Sell</h2>
                </div>
                <div className='flex items-center  text-[#001E00] mb-[10px]'>
                    <h2 className='mr-[2vw] w-[33%]  text-[1.4vw]  font-semibold text-[#001E00]'>Price:</h2>
                    <h2 className="  text-[1.3vw] w-[23vw] h-[2.5vw] rounded-md py-[.2vw]" >2000</h2>
                </div>
                <hr className='' />
                <h1 className='text-[1.3vw] text-center mb-[132px] text-[#001E00] mt-[8px] '>Total Pay: Tk 2000</h1>
                <div>
                    <form>
                        <div className='flex items-center'>
                            <input type='radio' id="1" name="fav_language" value="HTML1" className='w-[18px] h-[18px]  ' />
                            <label for="1">
                                <div className='flex items-center ml-[13px]'>
                                    <Image
                                        className='w-[68px] h-[60px] mr-[14px]'
                                        src={img1}
                                        alt='image'
                                    />
                                    <p className='text-[14px] text-[#001E00]'>Credit/Debit Card</p>
                                </div>
                            </label><br />
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" id="2" name="fav_language" value="HTML2" className='w-[18px] h-[18px]' />
                            <label for="2">
                                <div className='flex items-center ml-[13px]'>
                                    <Image
                                        className='w-[68px] h-[60px] mr-[14px]'
                                        src={img2}
                                        alt='image'
                                    />
                                    <p className='text-[14px] text-[#001E00]'>IBBL Cell fin</p>
                                </div>
                            </label><br />
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" id="3" name="fav_language" value="HTML3" className='w-[18px] h-[18px]' />
                            <label for="3">
                                <div className='flex items-center ml-[13px]'>
                                    <Image
                                        className='w-[68px] h-[60px] mr-[14px]'
                                        src={img3}
                                        alt='image'
                                    />
                                    <p className='text-[14px] text-[#001E00]'>DBBL Nexus Card</p>
                                </div>
                            </label><br />
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" id="4" name="fav_language" value="HTML4" className='w-[18px] h-[18px]' />
                            <label for="4">
                                <div className='flex items-center ml-[13px]'>
                                    <Image
                                        className='w-[68px] h-[60px] mr-[14px]'
                                        src={img4}
                                        alt='image'
                                    />
                                    <p className='text-[14px] text-[#001E00]'>Rocket</p>
                                </div>
                            </label><br />
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" id="5" name="fav_language" value="HTML5" className='w-[18px] h-[18px]' />
                            <label for="5">
                                <div className='flex items-center ml-[13px]'>
                                    <Image
                                        className='w-[68px] h-[60px] mr-[14px]'
                                        src={img5}
                                        alt='image'
                                    />
                                    <p className='text-[14px] text-[#001E00]'>bKash Account</p>
                                </div>
                            </label><br />
                        </div>





                    </form>
                </div>
            </div>
            <div className='flex justify-center gap-4 pb-[16px] mt-[32px]'>
                <button className='btn btn-outline btn-[#707070] text-[#707070] text-[1.2vw] w-[9vw] h-[1vw]'>Cancel</button>
                <Link href='' ><button className='btn bg-[#FB641B] text-white text-[1.2vw] w-[9vw] h-[1vw]'>Pay Now</button></Link>
            </div>
        </div>
    );
};

export default CouponPayNow;