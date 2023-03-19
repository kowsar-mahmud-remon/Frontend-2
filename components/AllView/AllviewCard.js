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
            <div className="w-full shadow-small xxl:h-[608px] lg:h-full h-full lg:rounded-[8px] rounded-[2.83677px]">
                <div className="   ">
                    <div className="relative  w-full  lg:h-[461px] h-[163px]">

                        <div className="lg:block hidden">
                            <ReactPlayer className='rounded-t-[8px]' width={'100%'} height={"461px"} text={hide} url="https://youtube.com/shorts/3l4B26DzMo8" />
                        </div>
                        <div className="lg:hidden block">
                            <ReactPlayer className='rounded-t-[8px]' width={'100%'} height={"163px"} text={hide} url="https://youtube.com/shorts/3l4B26DzMo8" />
                        </div>

                     

                        <div className="absolute top-3 w-full px-1 text-white">
                            <div className="flex justify-between  items-center">
                                <Image className="w-[8.51px] h-[8.51px] lg:w-[24px] lg:h-[24px]" src={profile} alt="img" />
                                <p className="lg:text-[12px] text-[4.25516px] whitespace-nowrap">Banglar Big...</p>
                                <p className="lg:text-[12px] text-[4.25516px] whitespace-nowrap">Follow 100k+</p>
                                <div className="flex gap-[1px] items-center">
                                    <Image  className="w-[6.5px] h-[4.43px] lg:w-[18.33px] lg:h-[12.5px]" src={eye} alt="img" />
                                    <p className="lg:text-[12px] text-[4.96435px]">250</p>
                                </div>
                                <Image className="w-[6.21px] h-[5.58px] lg:w-[17.5px] lg:h-[15.74px]" src={sound} alt="img" />
                                <Image className="w-[7.09px] h-[7.09px] lg:w-[20px] lg:h-[20px]" src={threedot} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:px-4 lg:mt-1 mt-[3px] px-[4px]">
                        <div>
                            <div className="flex gap-2 justify-between mt-[3.3px] items-center">
                                <p className="text-[#FB641B] font-bold text-[6px] lg:text-[20px]">
                                    Tk {taka}
                                </p>
                                <div className="flex text-[4px]  items-center gap-[2px] lg:gap-[8px] text-[#686868]">
                                    <p className=" text-[4px] lg:text-[12px]">Seller: </p>
                                    <Image className="lg:w-[65.15px] lg:h-[20px] w-[23.1px] h-[7.09px]" src={verify} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:mt-1 mt-[2.3px]">
                            <p className="lg:text-[16px] text-[5.67355px] font-[400] text-[#001E00]">
                                {title}
                            </p>
                        </div>
                        <div className="flex items-center lg:gap-2 gap-[2px] lg:mt-[10px] mt-[2.3px] ">
                            <div className="flex items-center justify-center lg:w-[35px] lg:h-[16px] w-[11.79px] h-[5px] gap-[2px] bg-[#026C51] text-white px-1 rounded-md">
                                <h1 className="text-[4.25516px] lg:text-[12px]"> {rate}</h1>
                                <AiTwotoneStar className="w-[4.26px] h-[4.26px] lg:w-[12px] lg:h-[12px]" />
                            </div>
                            <p className="text-[#686868] lg:text-[14px] text-[4.96435px]">
                                {totalrating} Ratings & {totalreview} Reviews
                            </p>
                        </div>
                        <div className="lg:mt-[15px] lg:pb-3 mt-[2.35px] pb-[3px]">
                            <h2 className="text-center text-[#FB641B] text-[4.96435px] lg:text-[14px] font-[500] ">
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