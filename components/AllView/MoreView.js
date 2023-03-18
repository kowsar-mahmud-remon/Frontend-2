import { useRef } from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp } from 'react-icons/fi';
import Slider from 'react-slick';
import { moreViewSetting } from "../../Utils/sliderConfig";


import MoreViewCard from "./MoreViewCard";

const MoreView = () => {
    const slideRef = useRef(null);
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
  const moreViewSetting ={
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: true,
    }
    return (
        <div className=" grid grid-cols-2">


           
        </div>
    );
};

export default MoreView;