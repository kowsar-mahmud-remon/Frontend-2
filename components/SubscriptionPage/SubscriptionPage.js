import React from 'react';

const SubscriptionPage = () => {
    return (
        <div className='md:mt-[45px] px-[2vw] w-[90%] mx-auto'>
            <p className='text-[1.3vw] font-semibold text-[#686868]'>Home {'>'} Account & Setting {'>'}  <span className='text-[#001E00]'>Subscription</span></p>
            <h1 className='text-[24px] mb-[32px] text-[#FB641B] mt-[8px] font-semibold'>Subscription</h1>
            <div className='grid grid-cols-3 w-full gap-[2vw]'>
                <div className=' shadow-small border border-[#B7B7B7] relative h-[15vw] rounded-md '>
                    <p className='text-center py-[12px] text-[#001E00] text-[1.3vw] font-semibold'>Product Upload</p>
                    <div className='divide-y bg-[#B7B7B7] h-[1px]'></div>
                    <div className='flex justify-center mt-[2.1vw] gap-[10px] items-center'>
                        <h1 className='text-[#001E00] text-[1.2vw]'>Already Used:</h1>
                        <h1 className='text-[2.3vw] text-[#001E00]'>35</h1>
                    </div>
                    <div className='mt-[3vw] flex mx-auto w-[80%] '>
                        <div className='h-[0.9vw] rounded-[20px] w-[80%] mx-auto relative bg-[#F2F3F7]'></div>
                        <div className='h-[0.9vw] rounded-[20px]   absolute w-[30%]  bg-[#287DF3]'></div>
                    </div>
                </div>
                <div className=' shadow-small relative h-[15vw] border border-[#B7B7B7] rounded-md '>
                    <p className='text-center py-[12px] text-[#001E00] text-[1.3vw] font-semibold'>Active Time</p>
                    <div className='divide-y bg-[#B7B7B7] h-[1px]'></div>
                    <div className='flex justify-center mt-[2.1vw] gap-[10px] items-center'>
                        <div>
                            <h1 className='text-[#001E00] text-[1.2vw] text-center'>9:00:10s</h1>
                            <h1 className=' text-[1.2vw] text-[#001E00] text-center'>02/08/2023</h1>
                        </div>
                    </div>

                </div>
                <div className=' shadow-small relative h-[15vw] border border-[#B7B7B7] rounded-md '>
                    <p className='text-center py-[12px] text-[#001E00] text-[1.3vw] font-semibold'>End Time</p>
                    <div className='divide-y bg-[#B7B7B7] h-[1px]'></div>
                    <div className='flex justify-center mt-[2.1vw] gap-[10px] items-center'>
                        <div>
                            <h1 className='text-[#001E00] text-[1.2vw] text-center'>9:00:10s</h1>
                            <h1 className=' text-[1.2vw] text-[#001E00] text-center'>02/08/2023</h1>
                        </div>
                    </div>

                </div>
            </div>
            {/* subscription */}
            <div className='grid grid-cols-3 w-full gap-[2vw] mt-[1.7vw]'>
                <div>
                    <h1 className='text-[1.3vw] text-[#001E00] mb-[0.9vw]'>You Active Subscription</h1>
                    <div className=' shadow-small  rounded-md p-[1.3vw]'>
                        <p className='py-[12px] mb-[0.9vw] text-[#001E00]  text-[1.3vw] font-semibold'>Premium Store</p>
                        <p className='mb-[1.6vw] text-[0.9vw] text-[#686868]'>
                            For high volume sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support.
                        </p>
                        <p className='text-[2.29vw] text-[#001E00]'>৳ 4000 <span className='text-[1.3vw]'>/1 month</span></p>
                        <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>with annual subscription</p>
                        <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>250/mo<br />
                            Free fixed-price listings<br />
                            18Tk insertion fee for additional listing</p>
                        <p className='text-[0.9vw] text-[#686868]'>350/mo<br />
                            Free auction listings in select categories<br />
                            15Tk insertion fee for additional listing</p>
                        <div className='w-[80%] border border-[#287DF3] mx-auto mt-[10vw] rounded-md'>
                            <h1 className='text-[#287DF3] text-[0.9vw] font-semibold text-center py-[0.6vw]'>Renewal</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-[1.3vw] text-[#001E00] mb-[0.9vw]'>Upgrade Your Subscription</h1>
                    <div className=' shadow-small  rounded-md p-[1.3vw]'>
                        <p className='py-[12px] mb-[0.9vw] text-[#001E00]  text-[1.3vw] font-semibold'>Enterprise Store</p>
                        <p className='mb-[1.6vw] text-[0.9vw] text-[#686868]'>
                            For enterprise sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support.
                        </p>
                        <p className='text-[2.29vw] text-[#001E00]'>৳ 5000 <span className='text-[1.3vw]'>/1 month</span></p>
                        <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>with annual subscription</p>
                        <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>1000/mo<br />
                            Free fixed-price listings<br />
                            25¢ insertion fee for additional listing</p>
                        <p className='text-[0.9vw] text-[#686868]'>250/mo<br />
                            Free auction listings in select categories<br />
                            15Tk insertion fee for additional listing</p>
                        <div className='w-[80%] border hover:border-[#287DF3] border-[#686868] mx-auto mt-[10vw] rounded-md'>
                            <h1 className='text-[#686868] text-[0.9vw] font-semibold text-center py-[0.6vw]'>Select starter store</h1>
                        </div>
                    </div>
                </div>


            </div>
            {/* Other subscription plan */}
            <div className='mt-[1.7vw]'>
                <h1 className='text-[1.2vw] text-[#001E00]'>Choose Others Subscription Plan</h1>
                <div className='grid grid-cols-3 w-full gap-[2vw] mt-[0.8vw]'>
                    <div>

                        <div className=' shadow-small  rounded-md p-[1.3vw]'>
                            <p className='py-[12px] mb-[0.9vw] text-[#001E00] text-[1.3vw] font-semibold'>Starter Store</p>
                            <p className='mb-[1.6vw] text-[0.9vw] text-[#686868]'>
                                Best for sellers who have a handful of products and want a storefront to brand and promote their business.
                            </p>
                            <p className='text-[2.29vw] text-[#001E00]'>Free </p>
                            <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>with annual subscription</p>
                            <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>10/mo<br />
                                Free fixed-price listings<br />
                                30Tk insertion fee for additional listing</p>

                            <div className='w-[80%] border hover:border-[#287DF3] border-[#686868] mx-auto mt-[15.6vw] rounded-md'>
                                <h1 className='text-[#686868] text-[0.9vw] font-semibold text-center py-[0.6vw]'>Select starter store</h1>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className=' shadow-small  rounded-md p-[1.3vw]'>
                            <p className='py-[12px] mb-[0.9vw] text-[#001E00]  text-[1.3vw] font-semibold'>Basic Store</p>
                            <p className='mb-[1.6vw] text-[0.9vw] text-[#686868]'>
                                Just getting started? Enjoy more free listings, final value fee discounts, and a quarterly coupon for eBay-branded shipping supplies.
                            </p>
                            <p className='text-[2.29vw] text-[#001E00]'>৳ 2000 <span className='text-[1.3vw]'>/1 month</span></p>
                            <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>with annual subscription</p>
                            <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>100/mo<br />
                                Free fixed-price listings<br />
                                25Tk insertion fee for additional listing</p>
                            <p className='text-[0.9vw] text-[#686868]'>150/mo<br />
                                Free auction listings in select categories<br />
                                20Tk insertion fee for additional listing</p>
                            <div className='w-[80%] hover:border-[#287DF3] border border-[#686868] mx-auto mt-[8.7vw] rounded-md'>
                                <h1 className='text-[#686868] text-[0.9vw] font-semibold text-center py-[0.6vw]'>Select starter store</h1>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className=' shadow-small  rounded-md p-[1.3vw]'>
                            <p className='py-[12px] mb-[0.9vw] text-[#001E00]  text-[1.3vw] font-semibold'>Gold Store</p>
                            <p className='mb-[1.6vw] text-[0.9vw] text-[#686868]'>
                                If you have an extensive product assortment, a Premium Store subscription gives you substantially more zero insertion fee listings.
                            </p>
                            <p className='text-[2.29vw] text-[#001E00]'>৳ 3000 <span className='text-[1.3vw]'>/1 month</span></p>
                            <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>with annual subscription</p>
                            <p className='text-[0.9vw] text-[#686868] mb-[1.6vw]'>150/mo<br />
                                Free fixed-price listings<br />
                                20Tk insertion fee for additional listing</p>
                            <p className='text-[0.9vw] text-[#686868]'>250/mo<br />
                                Free auction listings in select categories<br />
                                18Tk insertion fee for additional listing</p>
                            <div className='w-[80%] hover:border-[#287DF3] border border-[#686868] mx-auto mt-[8.7vw] rounded-md'>
                                <h1 className='text-[#686868] text-[0.9vw] font-semibold text-center py-[0.6vw]'>Select starter store</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SubscriptionPage;