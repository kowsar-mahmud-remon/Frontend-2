import React, { useState } from 'react';
import Image from 'next/image'
import { AiOutlineCloudUpload } from 'react-icons/ai'


const SecondImage = () => {
    const [bankInfo, setBankInfo] = useState(null)


    function handleBankChange(event) {
        setBankInfo(event.target.files[0])
    }


    return (
        <div className="max-w-[680px] md:w-[680px] h-[170px] border-5 flex justify-between items-center border rounded-lg">
            {bankInfo ? <div>
                <Image src={URL.createObjectURL(bankInfo)} alt="Preview" width="200" height="200" />
                <p className="md:ml-5 text-sm md:text-md">Upload a Cheque Copy</p>
            </div> :
                <div className="max-w-200 max-h-200 border border-5 p-4 md:ml-10 rounded-lg text-sm md:text-md">Upload a Cheque Copy</div>
            }

            <label for="bankimg">
                <AiOutlineCloudUpload className='text-[66px] text-[#FB641B] mr-16' />
                <p className='md:-ml-3 text-sm md:text-md'>upload photo</p>
            </label>

            <input id="bankimg" style={{ display: "none", visibility: "none" }} type="file" onChange={handleBankChange} />
        </div>
    );
};

export default SecondImage;