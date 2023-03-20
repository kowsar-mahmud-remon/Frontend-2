import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";


const ChangesPassword = () => {
    const router = useRouter()
    return (
        <div>
            <div className="hidden lg:block">
                <div>
                    <h1 className='text-[24px] max-w-[924px]  text-[#FB641B]'>Changes Password</h1>
                </div>
                <div className="changePassword  max-w-[924px] lg:mr-[20px] h-[548px]  mt-[32px]">
                    <div className="pt-[32px] mx-[24px]">
                        <div className="col-span-2">
                            <div>
                                <h1 className="text-[#001E00] font-[400] text-[16px]">Current Password</h1>
                                <input placeholder="Please Enter your Current Password" className="changePasswordInput   pl-[16px] mt-[8px] placeholder:text-[#686868] placeholder:pl-[2px]"></input>
                            </div>
                            <div className="mt-[40px]">
                                <h1 className="text-[#001E00] font-[400] text-[16px]">New Password</h1>
                                <input placeholder="Minimum 6 Character With a Number and a Latter" className="changePasswordInput pl-[16px] mt-[8px] placeholder:text-[#686868] placeholder:pl-[2px]"></input>
                                <div className="mt-[12px] flex gap-[12px] items-center">
                                    <input type="checkbox" className="w-[19px] h-[19px] rounded-[3px] border-solid box-border" />
                                    <h1 className="text-[#686868] text-[16px] font-[400]">Show Password</h1>
                                </div>
                            </div>
                            <div className="mt-[40px]">
                                <h1 className="text-[#001E00] font-[400] text-[16px]">Retype Password</h1>
                                <input placeholder="Please Retype your Password" className="changePasswordInput pl-[16px] mt-[8px] placeholder:text-[#686868] placeholder:pl-[2px] border-[#B7B7B7]"></input>
                                <div className="mt-[12px] flex gap-[12px] items-center">
                                    <input type="checkbox" className="w-[19px] h-[19px] rounded-[3px] border-solid box-border border-[#B7B7B7]" />
                                    <h1 className="text-[#686868] text-[16px] font-[400]">Show Password</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-[40px] flex justify-end gap-[10px] mx-[24px]">
                            <button className=" w-[122px] h-[48px] text-[#686868] font-[500] text-[16px] rounded-[8px] border-solid border-[#B7B7B7] box-border border-[1px]">Cancel</button>
                            <button className="w-[212px] whitespace-nowrap overflow-hidden  h-[48px] bg-[#FB641B]
                        rounded-[8px] text-white">Save Change</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='lg:hidden block'>
                <div className="mt-[34px] px-[24px] w-full">
                    <div>
                        <button onClick={() => router.back()} className='flex items-center gap-[13px]'>
                            <FaArrowLeft className=''></FaArrowLeft>
                            <h1 className='text-[20px]  font-[500] text-[#001E00]'>Changes Password</h1>
                        </button>
                    </div>
                    <div>
                        <div className="mt-[16px] w-full">
                            <h1 className="text-[#686868] text-[3.6vw] md:text-[14px] font-normal">Current Password</h1>
                            <div className="">
                                <input placeholder='Type Current Password' className="text-[#686868]  pl-[16px] text-[16px] focus:outline-none placeholder:text-[3.5vw] placeholder:md:text-[14px] font-[400] w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox placeholder:text-[#686868]"></input>
                            </div>
                        </div>
                        <div className="mt-[20px] w-full">
                            <h1 className="text-[#686868] text-[3.6vw] md:text-[14px] font-normal">New Password</h1>
                            <div className="">
                                <input placeholder='Minimum 6 Character With a Number and a Latter' className="text-[#686868] focus:outline-none placeholder:w-full   pl-[16px] text-[16px] placeholder:text-[3.5vw] placeholder:md:text-[14px] font-[400] w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox placeholder:text-[#686868]"></input>
                            </div>
                            <div className="mt-[12px] flex gap-[12px] items-center">
                                <input type="checkbox" className="w-[19px] h-[19px] rounded-[3px] border-solid box-border border-[#B7B7B7]" />
                                <h1 className="text-[#686868] text-[3.7vw] md:text-[16px] font-[400]">Show Password</h1>
                            </div>
                        </div>
                        <div className="mt-[20px] w-full">
                            <h1 className="text-[#686868] text-[3.6vw] md:text-[14px] font-normal">Retype Password</h1>
                            <div className="">
                                <input placeholder='Please Retype your Password' className="text-[#686868] placeholder:w-full focus:outline-none placeholder:md:text-[14px]  pl-[16px] text-[16px] placeholder:text-[3.5vw] font-[400] w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox placeholder:text-[#686868]"></input>
                            </div>
                            <div className="mt-[12px] flex gap-[12px] items-center">
                                <input type="checkbox" className="w-[19px] h-[19px] rounded-[3px] border-solid box-border border-[#B7B7B7]" />
                                <h1 className="text-[#686868] text-[3.7vw] md:text-[16px] font-[400]">Show Password</h1>
                            </div>
                        </div>




                        <div className='flex justify-between gap-[20px] mt-[280px] w-full'>

                            <button className='text-[#686868] border-[#B7B7B7] border  bg-white w-full h-[48px] rounded-[8px] font-[500]text-[16px]'>Cancel</button>


                            <button className='text-[#FFFFFF] bg-[#FB641B] w-full h-[48px] rounded-[8px] font-[500]text-[16px]'>Save Change</button>

                        </div>
                    </div>


                </div>






            </div>
        </div>
    );
};

export default ChangesPassword;