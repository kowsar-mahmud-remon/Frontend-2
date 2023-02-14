

const EditProfile = () => {
    return (
        <div>
            <div>
                <h1 className='text-[24px] text-[#FB641B]'>Edit Profile</h1>
            </div>
            <div className="editProfile mt-[32px]">
                <div className="pt-[32px] ml-[24px]">
                    <div className="flex  gap-[130px]">
                        <div>
                            <p className="text-[#001E00] text-[16px]">Full Name</p>
                            <input className="editInput pl-[16px] mt-[8px]"></input>
                        </div>
                        <div>
                            {/* <label  className="btn">open modal</label> */}

                            <h1 className='text-[14px] text-[#686868] font-[400]'>Email Address <span className='text-[#707070]'> | </span><label htmlFor="Email-modal-3" className='text-[14px] text-[#287DF3]'>Change</label></h1>
                            <h2 className='text-[#686868] text-[16px] mt-[16px]'>abdulkorim@gmail.com</h2>
                        </div>
                        <div>
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
                                <input placeholder="male" className="w-[155px] pl-[8px] mt-[8px] h-[48px] border-[1px] border-solid border-[#B7B7B7] rounded-[4px]"></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-[240px] flex justify-end mx-[24px]">
                            <button className="w-[122px] h-[48px] text-[#686868] font-[500] text-[16px] rounded-[8px] border-solid border-[#B7B7B7] box-border border-[1px]">Cancel</button>
                            <button className="w-[212px] ml-[16px] h-[48px] bg-[#FB641B]
                        rounded-[8px] text-white">Save Change</button>
                        </div>
                    </div>
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
        </div>
    );
};

export default EditProfile;