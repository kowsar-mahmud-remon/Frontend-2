import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import Modal from "./Modal";


const EditProfile = () => {
    const router = useRouter()
    return (
        <div>
            <div className="hidden lg:block">
                <div>
                    <h1 className='text-[24px] text-[#FB641B]'>Edit Profile</h1>
                </div>
                <div className="editProfile max-w-[924px] lg:mr-[20px] h-[548px] mt-[32px]">
                    <div className="pt-[32px] mx-[24px]">
                        <div className="grid grid-cols-3 gap-[100px]">
                            <div>
                                <p className="text-[#001E00] text-[16px]">Full Name</p>
                                <input className="editInput pl-[16px] mt-[8px]"></input>
                            </div>
                            <div>
                                <h1 className='text-[14px] text-[#686868] font-[400]'>Email Address <span className='text-[#707070]'> | </span><label htmlFor="Email-modal-3" className='text-[14px] text-[#287DF3]'>Change</label></h1>
                                <h2 className='text-[#686868] text-[16px] mt-[16px]'>abdulkorim@gmail.com</h2>
                            </div>
                            <div className="">
                                <h1 className='text-[14px] text-[#686868] font-[400]'>Mobile <span className='text-[#707070]'> | </span><label htmlFor="Mobile-modal-3" className='text-[14px] text-[#287DF3]'>Change</label></h1>
                                <h2 className='text-[#686868] text-[16px] mt-[16px]'>+880124 ******* 514</h2>
                            </div>
                        </div>

                        <div className="mt-[48px]">
                            <div className="flex gap-[12px]">
                                <div>
                                    <h1 className="text-[#001E00] font-[16px]">Birthday</h1>
                                    <div className="mt-[8px]">
                                        <span class='number-wrapper'>
                                            <input placeholder="05" type='number' min='1' max='31' className='w-[205px] pl-[8px] h-[48px] border-[#B7B7B7] border-[1px] rounded-l-[4px]'></input>
                                        </span>
                                        <input placeholder="20" type="number" className='w-[129px] pl-[8px] h-[48px] border-[#B7B7B7] border-[1px] '></input>
                                        <input placeholder="2000" type="number" className='w-[129px] pl-[8px] h-[48px] border-[#B7B7B7] border-[1px] rounded-r-[4px]'></input>

                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-[#001E00] text-[16px]">Gender</h1>
                                    <div className="">
                                        <select placeholder='Male' className="selected w-[155px] text-[#B7B7B7] pl-[8px] mt-[8px] h-[48px] border-[1px] border-solid border-[#B7B7B7] rounded-[4px]" name="" id="">
                                            <option className="text-[#686868]" value="male">Male</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[240px] flex justify-end ">
                                <button className="w-[122px] h-[48px] text-[#686868] font-[500] text-[16px] rounded-[8px] border-solid border-[#B7B7B7] box-border border-[1px]">Cancel</button>
                                <button className="w-[212px] ml-[16px] h-[48px] bg-[#FB641B]
                        rounded-[8px] text-white">Save Change</button>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="checkbox" id="Email-modal-3" className="modal-toggle" />
                <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60">
                    <div className="bg-[#FFFFFF] w-[751px] h-[363px] rounded-[8px] relative">
                        <label htmlFor="Email-modal-3" className="absolute right-5 top-3">✕</label>
                        <div className=' mt-[24px] ml-[24px]'>
                            <h3 className="text-[#001E00] text-[24px] font-[500]">Email Address</h3>
                            <div className='mt-[72px]'>
                                <h1 className='text-[#001E00] text-[16px]'>Email</h1>
                                <form className='mt-[8px]'>
                                    <input type='text' placeholder='Enter your new mail' className='EmailChangeInput focus:border-[#B7B7B7] pl-[24px] placeholder:pl-[1px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none'></input>
                                    <div className="modal-action mt-[60px] mr-[24px]">
                                        <button className="EmailChangeButton"><span className='text-white'>Save</span></button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <input type="checkbox" id="Mobile-modal-3" className="modal-toggle" />
                <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60">
                    <div className="bg-[#FFFFFF] w-[751px] h-[363px] rounded-[8px] relative">
                        <label htmlFor="Mobile-modal-3" className="absolute right-5 top-3">✕</label>
                        <div className=' mt-[24px] ml-[24px]'>
                            <h3 className="text-[#001E00] text-[24px] font-[500]">Mobile Number</h3>
                            <div className='mt-[72px]'>
                                <h1 className='text-[#001E00] text-[16px]'>Number</h1>
                                <form className='mt-[8px]'>
                                    <input type='text' placeholder='Enter your new Number' className='EmailChangeInput focus:border-[#B7B7B7] pl-[24px] placeholder:pl-[1px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none'></input>
                                    <div className="modal-action mt-[60px] mr-[24px]">
                                        <button className="EmailChangeButton"><span className='text-white'>Save</span></button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden block'>
                <div className="mt-[34px] px-[24px] w-full">
                    <div>
                        <button onClick={() => router.back()} className='flex items-center gap-[13px]'>
                            <FaArrowLeft className=''></FaArrowLeft>
                            <h1 className='text-[20px]  font-[500] text-[#001E00]'>My Profile</h1>
                        </button>
                    </div>
                    <div>
                        <div className="mt-[16px] w-full">
                            <h1 className="text-[#686868] text-[14px] font-normal">Full Name</h1>
                            <div className="">
                                <input placeholder='Abdul Korim' className="text-[#686868]  pl-[16px] text-[3.8vw] font-[400] w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox placeholder:text-[#686868]"></input>
                            </div>
                        </div>
                        <div className="mt-[20px] w-full">
                            <h1 className="text-[#686868] text-[14px] font-normal">Email Address</h1>
                            <div className="w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox">
                                <div className="flex full items-center justify-between mx-[16px] pt-[13px]">
                                    <h1 className="text-[#686868]  text-[3.8vw] font-[400]">abdulkorim@gmail.com</h1>

                                    <label htmlFor="Email-responsive-modal-3">
                                        <div className="flex items-center gap-[5.5px]">
                                            <h1 className="text-[#287DF3] text-[3.8vw]">Change</h1>
                                            <FaEdit></FaEdit>
                                        </div>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] w-full">
                            <h1 className="text-[#686868] text-[14px] font-normal">Mobile</h1>
                            <div className="w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox">
                                <div className="flex items-center justify-between mx-[16px] pt-[13px] ">
                                    <h1 className="text-[#686868]   text-[3.8vw] font-[400]">+880 123******154</h1>
                                    <label htmlFor="Mobile-responsive-modal-3">
                                        <div className="flex items-center gap-[5.5px]">
                                            <h1 className="text-[#287DF3] text-[3.8vw]">Change</h1>
                                            <FaEdit></FaEdit>
                                        </div>
                                    </label>


                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] w-full">
                            <h1 className="text-[#686868] text-[14px] font-normal">Birthday</h1>
                            <div className="flex divide-x mt-[12px] bg-[#FFFFFF] rounded-[4px] profileBox  text-[3.8vw] font-[400]">

                                <input placeholder="05" type='number' min='1' max='31' className='w-full pl-[8px] h-[48px] border-[#B7B7B7] border-[1px] rounded-l-[4px] border-none'></input>

                                <div className="h-[22px] border-[#B7B7B7] mt-[13px]"></div>
                                <input placeholder="20" type="number" className='w-full pl-[8px] h-[48px] border-[#B7B7B7] border-[1px] border-none'></input>
                                <div className="h-[22px] border-[#B7B7B7] mt-[13px]"></div>
                                <input placeholder="2000" type="number" className='w-full pl-[8px] h-[48px] border-[#B7B7B7] border-[1px] rounded-r-[4px] border-none'></input>
                            </div>

                     
                        </div>
                        <div className="mt-[20px] w-full">
                            <h1 className="text-[#686868] text-[14px] font-normal">gender</h1>
                            <div className="">
                                <select placeholder='Male' className="text-[#686868]  selected w-full mt-[12px] h-[48px] bg-[#FFFFFF] rounded-[4px] profileBox  pl-[16px] text-[3.8vw] font-[400]" name="" id="">
                                    <option className="w-[200px]" value="male">Male</option>
                                    <option className="w-[200px]" value="Female">Female</option>
                                    <option className="w-[200px]" value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-between gap-[20px] mt-[200px] w-full'>
                            <button className='text-[#686868] border-[#B7B7B7] border  bg-white w-full h-[48px] rounded-[8px] font-[500]text-[16px]'><Link href='#'>Cancel</Link></button>
                            <button className='text-[#FFFFFF] bg-[#FB641B] w-full h-[48px] rounded-[8px] font-[500]text-[16px]'><Link href='#'>Save Change</Link></button>
                        </div>
                    </div>


                </div>
                <Modal></Modal>
               

            </div>

        </div>
    );
};

export default EditProfile;