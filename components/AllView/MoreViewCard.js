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
           


        </div>
    );
};

export default MoreViewCard;