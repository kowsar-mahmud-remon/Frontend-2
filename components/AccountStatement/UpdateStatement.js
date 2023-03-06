import Image from "next/image";
import vt6 from '../../assets/images/sellercalender.png'
import { useState } from 'react';

const UpdateStatement = () => {
    const [bankInfo, setBankInfo] = useState(null)
    function handleUpdateStatement(event) {
        setBankInfo(event.target.files[0])
    }
    return (
        <div>
            <div>
                <div className="text-lg breadcrumbs text-[#686868]">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Seller Documents </a>
                        </li>
                        <li className="text-[#001E00] font-semibold ">
                            Account Statement
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[#FB641B] font-semibold text-2xl">
                        Account Statement
                    </h1>
                </div>
            </div>
            <div className="flex justify-center mt-[72px]">

                <div className="max-w-[829px] xl:w-[829px] h-[527px] border-[1px] border-solid rounded-[8px] border-[#F2F2F2] shadow-small  bg-[#FFFFFF]">
                    <div className="mx-[70px]">

                        <div className="pt-[37px]">
                            <h1 className="text-[#001E00] text-[16px]">Trade License</h1>
                        </div>


                        <div className="max-w-[689px] xl:w-[689px] mt-[16px] h-[277px] rounded-[8px] shadow-small border-[1px] border-solid border-[#B7B7B7] bg-[#FFFFFF]">
                            <div className='flex justify-center pt-[16px] '>
                            <Image src='/Trade License.png' width={178} height={245} alt=""></Image>
                            </div>
                            <label>
                                <div className="max-w-[687px] xl:w-[687px] flex justify-center relative bottom-[45px] h-[60px] uploadStatenment">
                                    <div className="flex justify-center items-center gap-[11px]">
                                        <Image src='/upload.png' width={27} height={18} alt=""></Image>
                                        <p className="text-[#FFFFFF] text-[16px]">Upload New Trade License</p>
                                    </div>
                                    <input
                                        type="file"
                                    
                                        className="hidden"
                                        onChange={handleUpdateStatement}
                                    />
                                </div>
                            </label>
                        </div>
                        <div class="grid grid-cols-3 divide-x divide-[#B7B7B7] max-w-[689px] border-[1px] border-solid h-[52px] mt-[16px] rounded-md border-[#B7B7B7]">
                            <div className='flex items-center ml-[16px]'><p className='text-[#707070]  text-[13px]'>No <span className='ml-[8px]'>0469793</span></p></div>
                            <div className='flex justify-between items-center px-[16px]'>
                                <p className='text-[#707070]  text-[13px]'>Es.<span className='xl:ml-[8px]'>12 Dec 2022</span></p>
                                <Image className='h-[20px] w-[20px] '
                                    src={vt6}
                                    alt='Upload Image'
                                />
                            </div>
                            <div className='flex justify-between  items-center px-[16px]'>
                                <p className='text-[#707070] text-[13px]'>Es. <span className='xl:ml-[8px] '>12 Dec 2022</span></p>
                                <Image className='h-[20px] w-[20px] '
                                    src={vt6}
                                    alt=''
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-[32px] gap-[16px]">
                            
                                <button className="w-[114px] h-[40px] border-[1px] border-solid border-[#686868] rounded-[8px] text-[#686868]">Cancel</button>
                                <button className="w-[134px] h-[40px] rounded-[8px] text-white text-[16px] bg-[#FB641B]">Submit</button>
                         
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateStatement;