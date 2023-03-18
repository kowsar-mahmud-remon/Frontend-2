import { useRef } from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp } from 'react-icons/fi';
import Slider from 'react-slick';
import { moreViewSetting } from "../../Utils/sliderConfig";


import MoreViewCard from "./MoreViewCard";

const MoreView = () => {
    const slideRef = useRef();
    const allProducts = [

        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },
        {
            vdo: "",
            taka: "222",
            title: "T-shirt For Unisex T-shirt For Unisex",
            rate: '4.9',
            totalrating: "24",
            totalreview: "5",
            sellerverifaction: "",
            view: "",
            follow: ""
        },

    ]
    const moreViewSetting = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        },

    }


    return (
        <div className="flex justify-center mt-[24px] gap-[16px]">




            <div className="grid grid-cols-1  overflow-auto gap-[24px]">

                {
                    allProducts.map((data, index) => (
                        <MoreViewCard data={data} key={index}></MoreViewCard>
                    ))
                }

            </div>




            <div className="  gap-3 flex flex-col justify-between">
                <div
                    // onClick={() => slideRef.current.slickNext()}
                    className="bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer"
                >
                    <FiChevronUp className="text-[26px]" />
                </div>
                <div
                    // onClick={() => slideRef.current.slickPrev()}
                    className="bg-white w-[38px] h-[38px] rounded-full shadow-xl flex justify-center items-center cursor-pointer"
                >
                    <FiChevronDown className="text-[26px]" />
                </div>
            </div>
        </div>
    );
};

export default MoreView;