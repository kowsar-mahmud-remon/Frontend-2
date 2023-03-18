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

const MoreViewCard = ({ data }) => {

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
            <div className="w-full h-[740px]">
                <div className="relative  ">

                    <div>
                        <ReactPlayer className='rounded-t-[8px]' height={740} text={hide} url="https://youtube.com/shorts/3l4B26DzMo8" />
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
            </div>


        </div>
    );
};

export default MoreViewCard;