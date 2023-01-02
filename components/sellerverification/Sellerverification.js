import { useState } from 'react';
import Image from 'next/image'
import { AiOutlineCloudUpload } from 'react-icons/ai'



const Sellerverification = () => {
    const [nidFront, setNidFront] = useState(null)
    const [nidBack, setNidBack] = useState(null)

    function handleFrontChange(event) {
        setNidFront(event.target.files[0])
    }
    function handleBackChange(event) {
        setNidBack(event.target.files[0])
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
            <div className="my-4">
                <p className="text-sm md:text-md">Upload ID Card Front*</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="max-w-[680px] md:w-full lg:w-[480px] h-[170px] border-5 flex justify-between items-center border rounded-lg">
                        {nidFront ? <div>
                            <Image src={URL.createObjectURL(nidFront)} alt="Preview" width="200" height="200" />
                            <p className="md:ml-5">NID Card Front</p>
                        </div> :
                            <div className="md:ml-10 w-200 h-200 border border-5 p-4 rounded-lg text-sm md:text-md">NID Front Photo</div>
                        }

                        <label for="frontimg">
                            <AiOutlineCloudUpload className='text-[66px] text-[#FB641B] mr-16' />
                            <p className='md:-ml-3 text-sm md:text-md'>upload photo</p>
                        </label>

                        <input id="frontimg" style={{ display: "none", visibility: "none" }} type="file" onChange={handleFrontChange} />

                    </div>
                </div>
            </div>
            <div className="my-4">
                <p className="text-sm md:text-md">Upload ID Card Back*</p>
                <div className="grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="max-w-[680px] md:w-full lg:w-[480px] h-[170px] border-5 flex justify-between items-center border rounded-lg">
                        {nidBack ? <div>
                            <Image src={URL.createObjectURL(nidBack)} alt="Preview" width="200" height="200" />
                            <p className="md:ml-5 text-sm md:text-md">NID Card Back</p>
                        </div> :
                            <div className="w-200 h-200 border border-5 p-4 md:ml-10 rounded-lg text-sm md:text-md">NID Back Photo</div>
                        }

                        <label for="backimg">
                            <AiOutlineCloudUpload className='text-[66px] text-[#FB641B] mr-16' />
                            <p className='md:-ml-3 text-sm md:text-md'>upload photo</p>
                        </label>

                        <input id="backimg" style={{ display: "none", visibility: "none" }} type="file" onChange={handleBackChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sellerverification;