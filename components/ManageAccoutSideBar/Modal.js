
const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="Email-responsive-modal-3" className="modal-toggle" />
            <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60">
                <div className="bg-[#FFFFFF] w-full mx-[30px] h-[211px] rounded-[8px] relative">
                    <label htmlFor="Email-responsive-modal-3" className="absolute right-5 top-3">✕</label>
                    <div className=' mt-[16px]'>
                        <h3 className="text-[#001E00] text-[20px] font-[400] ml-[16px]">Email Address</h3>
                        <div className='mt-[16px]'>
                            <h1 className='text-[#001E00] text-[14px] ml-[16px]'>Email</h1>
                            <form className='mt-[12px] mx-[16px]'>
                                <input type='text' placeholder='Enter your new mail' className='EmailChangeInputRes w-full h-[40px]  focus:border-[#B7B7B7] pl-[13px] placeholder:pl-[1px] placeholder:text-[14px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none'></input>
                                <div className=" flex justify-center mt-[18px] mb-[16px]">
                                    <button className="w-[172px] h-[48px] bg-[#FB641B] rounded-[4px]"><span className='text-white'>Save</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>





            <input type="checkbox" id="Mobile-responsive-modal-3" className="modal-toggle" />
            <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60">
                <div className="bg-[#FFFFFF] w-full mx-[24px] h-[211px] rounded-[8px] relative">
                    <label htmlFor="Mobile-responsive-modal-3" className="absolute right-5 top-3">✕</label>
                    <div className=' mt-[16px] ml-[16px]'>
                        <h3 className="text-[#001E00] text-[20px] font-[400] ml-[16px]">Mobile Number</h3>
                        <div className='mt-[16px]'>
                            <h1 className='text-[#001E00] text-[14px] ml-[16px]'>Number</h1>
                            <form className='mt-[12px] mx-[16px]'>
                                <input type='text' placeholder='Enter your new Number' className='EmailChangeInputRes w-full h-[40px]  focus:border-[#B7B7B7] pl-[13px] placeholder:pl-[1px] placeholder:text-[14px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none'></input>
                                <div className=" flex justify-center mt-[18px] mb-[16px]">
                                    <button className="w-[172px] h-[48px] bg-[#FB641B] rounded-[4px]"><span className='text-white'>Save</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="Newsletter-responsive-modal-3" className="modal-toggle" />
            <div className="modal fixed inset-0   h-screen bg-black  bg-opacity-60">
                <div className="bg-[#FFFFFF] w-full mx-[24px] h-[211px] rounded-[8px] relative">
                    <label htmlFor="Newsletter-responsive-modal-3" className="absolute right-5 top-3">✕</label>
                    <div className=' mt-[16px] '>
                        <h3 className="text-[#001E00] text-[20px] font-[400] ml-[16px]">Newsletter Subscription</h3>
                        <div className='mt-[16px]'>
                            <h1 className='text-[#001E00] text-[14px] ml-[16px]'>Email</h1>
                            <form className='mt-[12px] mx-[16px]'>
                                <input type='text' placeholder='Enter your new mail' className='EmailChangeInputRes w-full h-[40px]  focus:border-[#B7B7B7] pl-[13px] placeholder:pl-[1px] placeholder:text-[14px]  focus:ring-sky-500 placeholder-[#686868] focus:outline-none'></input>
                                <div className=" flex justify-center  mt-[18px] mb-[16px]">
                                    <button className="w-[172px] h-[48px] bg-[#FB641B] rounded-[4px]"><span className='text-white'>Subcribe</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;