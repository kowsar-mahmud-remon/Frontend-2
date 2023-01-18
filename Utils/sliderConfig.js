export const settings = {
    arrows: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
 
    responsive: [
        {
            breakpoint: 1900,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 968,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
};
export const imageSettings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
};
