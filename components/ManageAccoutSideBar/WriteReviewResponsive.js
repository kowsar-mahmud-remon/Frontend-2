import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaRegFrown, FaRegMeh, FaRegSmile } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";


const WriteReviewResponsive = () => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            if (selectedFile.type === "image/jpeg") {
                setFile(selectedFile);
            } else {
                alert("Invalid file type. Only JPEG files are allowed.");
            }
        }
    };
    console.log(file)
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="mt-[66px] ml-[20px]">
            <div >
                <button onClick={() => router.back()} className='flex items-center gap-[13px]'>
                    <FaArrowLeft className=''></FaArrowLeft>
                    <h1 className='text-[20px]  font-[500] text-[#001E00]'>My Reviews</h1>
                </button>
            </div>
            <p className="text-[#001E00] font-[500] text-[16px] mt-[16px]">Product Review</p>
            <div>
                <p className="font-normal  mt-[16px] text-[#001E00] text-[16px]">Banglar Big Store</p>
                <p className="text-[#686868] mt-[4px] font-normal text-[12px]">Delivered on 21 Apr 2022</p>
            </div>
            <div className="writeResponsiveBox mt-[12px]">
                <div className="flex pt-[12px] ml-[12px] items-center gap-[12px]">
                    <Image src='/image 8.png' width={44} height={36} className='rounded-[4px]' alt=""></Image>
                    <p className="text-[#001E00] text-[14px] font-[400]">Tomato (Local) 500 ±30 gm</p>
                </div>
                <div>
                    <div className="ml-[15px]  ">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            spacing={12}

                            size={36}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#FB641B"
                        />
                    </div>
                </div>

            </div>
            <div className="mt-[16px]">
                <textarea placeholder="Type your Opinion..." class="resize-none rounded-md writeReviewTextArea pl-[12px] pt-[12px]"></textarea>
            </div>
            <div className="responsiveImageFileUpload mt-[16px]">
                <label >
                    <div className="flex justify-center items-center gap-[7px] mt-[14px]">
                        <Image src='/cloudupload.png' width={25} height={20} alt=""></Image>
                        <p className="font-[400] text-[10px] text-[#686868]">Upload Photo</p>
                    </div>
                    <input type="file" accept="image/jpeg" onChange={handleChange} className='hidden' />
                </label>
            </div>
            <div>
                <p className="text-[#001E00] font-[500] text-[16px] mt-[24px]">Your seller review:</p>
                <div className="flex items-center gap-[16px] mt-[16px]">
                    <div className="flex items-center gap-[24px]">
                        <FaRegFrown className="w-[36px] h-[36px] hover:text-[#FB641B]"></FaRegFrown>
                        <FaRegMeh className="w-[36px] h-[36px] hover:text-[#FB641B]"></FaRegMeh>
                        <FaRegSmile className="w-[36px] h-[36px] hover:text-[#FB641B]"></FaRegSmile>
                    </div>
                    <p className="font-[400] text-[16px] text-[#686868]">Positive</p>
                </div>
            </div>
            <div className="mt-[24px]">
                <p className="text-[#001E00] font-[500] text-[16px]">Rate your Rider:</p>
                <div>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={36}
                        isHalf={true}
                        spacing={6}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#FB641B"
                    />
                </div>
            </div>
            <div className="mt-[190px]">
                <button className="bg-[#FB641B] mb-[32px] text-white w-[376px] h-[48px] rounded-[8px]">Submit</button>
            </div>
        </div>
    );
};

export default WriteReviewResponsive;