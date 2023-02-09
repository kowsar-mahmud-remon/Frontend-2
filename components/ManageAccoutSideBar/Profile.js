import React from 'react';

const Profile = () => {
    return (
        <div>
            <div>
                <h1 className='text-[24px] text-[#FB641B]'>My Profile</h1>
            </div>
            <div className='profile mt-[32px]'>
                <div className='flex pt-[32px] ml-[24px] gap-[200px]'>
                    <div>
                        <h1 className='text-[14px] text-[#001E00] font-[500]'>Full Name</h1>
                        <h2 className='text-[16px] text-[#686868] mt-[16px]'>Abdul Korim</h2>
                    </div>
                    <div>
                        {/* <label  className="btn">open modal</label> */}

                        <h1 className='text-[14px] text-[#001E00] font-[500]'>Email Address <span className='text-[#707070]'> | </span><label htmlFor="Email-modal-3" className='text-[14px] text-[#287DF3]'>Change</label></h1>
                        <h2 className='text-[#686868] text-[16px] mt-[16px]'>abdulkorim@gmail.com</h2>
                    </div>
                    <div>
                        <h1 className='text-[14px] text-[#001E00] font-[500]'>Mobile <span className='text-[#707070]'> | </span><label htmlFor="Mobile-modal-3" className='text-[14px] text-[#287DF3]'>Change</label></h1>
                        <h2 className='text-[#686868] text-[16px] mt-[16px]'>+880124 ******* 514</h2>
                    </div>
                </div>
                <div className='mt-[56px] ml-[24px] flex gap-[210px]'>
                    <div>
                        <h1 className='text-[#001E00] font-[500] text-[14px]'>Birthday</h1>
                        <h2 className='text-[#686868] text-[16px] mt-[16px]'>2000-02-21</h2>
                    </div>
                    <div>
                        <h1 className='text-[#001E00] font-[500] text-[14px]'>Genter</h1>
                        <h1 className='text-[#686868] text-[16px] mt-[16px]'>Male</h1>
                    </div>
                </div>
                <div className='ml-[24px] mt-[150px] flex flex-col gap-[16px]'>
                    <label htmlFor="Newsletter-modal-3"><h1 className='text-[#287DF3] text-[16px]'>Subscribe to our Newsletter</h1></label>
                    <button className='w-[273px] h-[48px] bg-[#FB641B] text-[white] rounded-[8px]'><span className='text-[16px] text-[500] text-[#FFFFFF]'>Edit Profile</span></button>
                    <button className='w-[273px] h-[48px] bg-[#FB641B] text-[white] rounded-[8px]'><span className='text-[16px] text-[500] text-[#FFFFFF]'>Change Password</span></button>
                </div>

            </div>
            <input type="checkbox" id="Email-modal-3" className="modal-toggle" />
            <div className="modal">
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
            <div className="modal">
                <div className="bg-[#FFFFFF] w-[751px] h-[363px] rounded-[8px] relative">
                    <label htmlFor="Mobile-modal-3" className="absolute right-5 top-3">✕</label>
                    <div className=' mt-[24px] ml-[24px]'>
                        <h3 className="text-[#001E00] text-[24px] font-[500]">Mobile Number</h3>
                        <div className='mt-[72px]'>
                            <h1 className='text-[#001E00] text-[16px]'>Number</h1>
                            <form className='mt-[8px]'>
                                <input type='number' placeholder='Enter your new Number' className='EmailChangeInput focus:border-[#B7B7B7] pl-[24px] placeholder:pl-[1px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none'></input>
                                <div className="modal-action mt-[60px] mr-[24px]">
                                    <button className="EmailChangeButton"><span className='text-white'>Save</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="Newsletter-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="bg-[#FFFFFF] w-[751px] h-[363px] rounded-[8px] relative">
                    <label htmlFor="Newsletter-modal-3" className="absolute right-5 top-3">✕</label>
                    <div className=' mt-[24px] ml-[24px]'>
                        <h3 className="text-[#001E00] text-[24px] font-[500]">Newsletter Subscription</h3>
                        <div className='mt-[72px]'>
                            <h1 className='text-[#001E00] text-[16px]'>Email</h1>
                            <form className='mt-[8px]'>
                                <input type='text' placeholder='Enter your  mail' className='EmailChangeInput focus:border-[#B7B7B7] pl-[24px] placeholder:pl-[1px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none'></input>
                                <div className="modal-action mt-[60px] mr-[24px]">
                                    <button className="EmailChangeButton"><span className='text-white'>Subcribe</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Profile;