import Link from "next/link";
import NavicationLayout from "../../layouts/NavicationLayout";


const sellerRegister = () => {
    return (
        <div>
            <NavicationLayout>
                <div className="flex justify-center">
                    <div className="mt-[139px]">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-[#FB641B] text-[24px] font-[500]">Create an Seller Account</h1>
                                <h2 className="text-[#686868] text-[16px] mt-[8px]">Welcome! Our Banglar Big Store, Users are waiting <br /> to buy your product.</h2>
                            </div>
                            <div>
                                <p className='mx-auto mt-[5px] font-[400] md:text-[18px] text-[16px] text-[#686868]'>Already have an account? <Link className='text-[#287DF3]' href='/sellerLogin/login'>Login</Link></p>
                            </div>
                        </div>

                        <div className="w-[742px] h-[697px] shadow-small rounded-[8px] mt-[16px]">
                            <div className="mx-[64px]">
                                <form className="pt-[72px]">
                                    <div>
                                        <h1 className="text-[#001E00] text-[16px] font-[400]">Phone Number*</h1>
                                        <input
                                            name='email'
                                            className='xxl:w-[614px]   w-full border-solid mt-[8px] focus:outline-none border-[#B7B7B7] border-[1px] hover:shadow-small rounded-[8px] h-[72px] px-[25px] shadow-small placeholder:text-[16px] placeholder:text-[#707070]' type="text" placeholder='Please Provide your phone number' />
                                    </div>
                                    <div className="mt-[40px]">
                                        <h1 className="text-[#001E00] text-[16px] font-[400]">Password*</h1>
                                        <input
                                            name='password'
                                            className='xxl:w-[614px]   w-full border-solid mt-[8px] focus:outline-none border-[#B7B7B7] border-[1px] hover:shadow-small rounded-[8px] h-[72px] px-[25px] shadow-small placeholder:text-[16px] placeholder:text-[#707070]' type="password" placeholder='Minimum 6 Characters with a number And a letter' />

                                        <div className='flex gap-[12px] mt-[12px]'>
                                            <input className='h[19px] w-[19px] border border-[#686868]' type="checkbox" />
                                            <p className='text-[#686868]  text-[16px]'>Show Passwords</p>
                                        </div>
                                    </div>
                                    <div className="mt-[40px]">
                                        <h1 className="text-[#001E00] text-[16px] font-[400]">Conform Password*</h1>
                                        <input
                                            name='password'
                                            className='xxl:w-[614px]   w-full border-solid mt-[8px] focus:outline-none border-[#B7B7B7] border-[1px] hover:shadow-small rounded-[8px] h-[72px] px-[25px] shadow-small placeholder:text-[16px] placeholder:text-[#707070]' type="password" placeholder='Minimum 6 Characters with a number And a letter' />

                                        <div className='flex gap-[12px] mt-[12px]'>
                                            <input className='h[19px] w-[19px] border border-[#686868]' type="checkbox" />
                                            <p className='text-[#686868]  text-[16px]'>Show Passwords</p>
                                        </div>
                                    </div>
                                    <button className='btn hover:bg-[#FB641B] bg-[#FB641B]  text-[18px] md:h-[72px]  text-white md:mt-[25px]'>Create an Account</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </NavicationLayout>
        </div>
    );
};

export default sellerRegister;