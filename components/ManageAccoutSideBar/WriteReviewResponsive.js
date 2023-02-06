import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";


const WriteReviewResponsive = () => {
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
                    <div className="ml-[12px] gap-[16px] mt-[16px]">
                        <ReactStars 
                            count={5}
                            onChange={ratingChanged}
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
        </div>
    );
};

export default WriteReviewResponsive;