import Image from "next/image";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import verify from "../../assets/images/storyVdo/Verified.png";
import profile from "../../assets/images/storyVdo/image 346.png";
import eye from "../../assets/images/storyVdo/Vector (5).png";
import sound from "../../assets/images/storyVdo/Vector (6).png";
import threedot from "../../assets/images/storyVdo/carbon.png";
// import vdo from '../../../assets/video/vdo.mp4';
import ReactPlayer from "react-player/youtube";
import { hide } from "dom7";
import { useEffect, useState } from "react";
const AllviewCard = ({ data }) => {
    console.log(data)

    const [render, setRender] = useState(undefined);
    const {
        title,
        taka,
        rate,
        totalrating,
        totalreview,
   
    } = data || {};
    useEffect(() => {
      setRender(true);
    }, []);
    // console.log(vdo);
    if (!render) return;
    return (
        <div>
            <div className="w-full shadow-small xxl:h-[608px] h-full rounded-[8px]">
                <div className="   ">
                    <div className="relative  w-full h-[461px]">

                        <div className="lg:block hidden">
                            <ReactPlayer className='rounded-t-[8px]' width={'100%'} height={"461px"} text={hide} url="https://youtube.com/shorts/3l4B26DzMo8" />
                        </div>
                        <div className="lg:hidden block">
                            <ReactPlayer className='rounded-t-[8px]' width={'100%'} height={"163px"} text={hide} url="https://youtube.com/shorts/3l4B26DzMo8" />
                        </div>

                     

                        <div className="absolute top-3 w-full px-1 text-white">
                            <div className="flex justify-between items-center">
                                <Image src={profile} alt="img" />
                                <p className="text-[12px]">Banglar Big...</p>
                                <p className="text-[12px]">Follow 100k+</p>
                                <div className="flex items-center">
                                    <Image src={eye} alt="img" />
                                    <p className="text-[12px]">250</p>
                                </div>
                                <Image src={sound} alt="img" />
                                <Image src={threedot} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mt-1">
                        <div>
                            <div className="flex gap-2 justify-between items-center">
                                <p className="text-[#FB641B] font-bold text-[20px]">
                                    Tk {taka}
                                </p>
                                <div className="flex text-[#686868]">
                                    <p className="mr-1">Seller: </p>
                                    <Image src={verify} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <p className="text-[16px] font-[400] text-[#001E00]">
                                {title}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-[10px]">
                            <div className="flex items-center justify-center gap-[2px] bg-[#026C51] text-white px-1 rounded-md">
                                <h1> {rate}</h1>
                                <AiTwotoneStar />
                            </div>
                            <p className="text-[#686868] text-[14px]">
                                {totalrating} Ratings & {totalreview} Reviews
                            </p>
                        </div>
                        <div className="mt-[15px] pb-3">
                            <h2 className="text-center text-[#FB641B] font-[500] ">
                                Visit Now
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default AllviewCard;