

const ChangesPassword = () => {
    return (
        <div>
            <div>
                <h1 className='text-[24px] text-[#FB641B]'>Changes Password</h1>
            </div>
            <div className="changePassword mt-[32px]">
                <div className="pt-[32px] ml-[24px]">
                    <div>
                        <h1 className="text-[#001E00] font-[400] text-[16px]">Current Password</h1>
                        <input placeholder="Please Enter your Current Password" className="changePasswordInput pl-[16px] mt-[8px] placeholder:text-[#686868] placeholder:pl-[2px]"></input>
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
                <div>
                    <div className="mt-[40px] flex justify-end mx-[24px]">
                        <button className="w-[122px] h-[48px] text-[#686868] font-[500] text-[16px] rounded-[8px] border-solid border-[#B7B7B7] box-border border-[1px]">Cancel</button>
                        <button className="w-[212px] ml-[16px] h-[48px] bg-[#FB641B]
                        rounded-[8px] text-white">Save Change</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChangesPassword;