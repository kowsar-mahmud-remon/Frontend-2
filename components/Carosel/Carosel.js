import React from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slideImg from '../../assets/images/slideImg.png';

const Carosel = ({ data }) => {

    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="carosel"
        >

            {
                data?.map((item) => {
                    return <SwiperSlide key={item._id}>
                        <Image
                            className=''
                            src={item?.image.img}
                            alt="img"
                            width="1000000"
                            height="1000000"
                        />
                    </SwiperSlide>
                })
            }

        </Swiper>
    );
};


export default Carosel;