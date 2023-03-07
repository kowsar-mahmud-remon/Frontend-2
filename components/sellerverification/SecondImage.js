import { useState } from 'react';
import Image from 'next/image'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import cloud from '../../assets/images/Seller_Verification_page/nid/export.png';


const SecondImage = () => {
    const [bankInfo, setBankInfo] = useState(null)

    function handleBankChange(event) {
        setBankInfo(event.target.files[0])
    }


    return (
        <div className=" h-[170px] border-2 grid grid-cols-3  items-center  rounded-lg shadow-xl">
            {bankInfo ? <div className='flex justify-center items-center border-2 p-4  rounded-l-xl bg-[#F2F3F7] text-start col-span-1 w-full h-full'>
                <Image className='object-cover' src={URL.createObjectURL(bankInfo)} alt="Preview" width="150" height="150" />

            </div> :
                <div className=" max-h-200 border border-5 p-4 md:ml-10 rounded-lg text-sm md:text-md">Upload a Cheque Copy</div>
            }

            <div className='col-span-2 flex  justify-center '>
                <label htmlFor="bankimg" className='' >

                    <Image
                        className=""
                        src={cloud}
                        alt="Preview"
                        width="60"
                        height="40"
                    />
                    <p className='md:-ml-8 text-sm md:text-md text-[#686868]'>Upload a Cheque Copy</p>
                </label>

                <input id="bankimg" style={{ display: "none", visibility: "none" }} type="file" onChange={handleBankChange} />
            </div>
        </div>
    );
};

export default SecondImage;