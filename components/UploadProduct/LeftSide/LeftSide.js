import Image from "next/image";
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/images/uploadproducts/Vector (3).png";
import img3 from "../../../assets/images/uploadproducts/Vector (4).png";
import img2 from "../../../assets/images/uploadproducts/Vector.png";
import vector from "../../../assets/images/product_page/Vector.png";
import { imageSettings, imgSettingsMobile } from "../../../Utils/sliderConfig";
import { useRef } from "react";
import { useState } from "react";
const LeftSide = () => {
  const datas = [
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
    {
      name: "Product Iamge",
      img: img3,
    },
  ];
  const slideRef = useRef(null);

  const [image, setImage] = useState(null);


  function handleChange(event) {
    setImage(event.target.files[0]);
  }
 
  return (
    <div>
      <div className="grid grid-cols-4 w-full gap-3">
        <div className="col-span-3 border-dashed border-2 rounded-lg flex justify-center items-center">
          <label htmlFor="thumb-btn">
            {image ? (
              <div className="">
                <Image
                  className=""
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  width="150"
                  height="150"
                />
              </div>
            ) : (
              <div className="  flex flex-col items-center">
                <Image src={img2} alt="" />
                <p>Thumbnail Image </p>
              </div>
            )}
          </label>
          <input
            type="file"
            id="thumb-btn"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex flex-col">
              <div className="h-auto ">
                <Slider {...imageSettings} className=" " ref={slideRef}>
                  <div>
                    <div className="mb-2">
                      <label htmlFor="thumb-btn">
                        <div className="py-4 px-1 border-dashed border-2 rounded-lg flex flex-col items-center text-center text-[14px]">
                          <Image src={img1} alt="" />
                          <p>Product Video </p>
                        </div>
                      </label>
                      <input
                        type="file"
                        id="thumb-btn"
                        className="hidden"
                        accept="video/*"
                      />
                    </div>
                    {datas.map((data, index) => (
                      <div key={index} className="mb-2">
                        <label htmlFor="thumb-btn">
                          <div className="py-4 px-1 border-dashed border-2 rounded-lg flex flex-col items-center text-center text-[14px]">
                            <Image src={data.img} alt="" width="10px" />
                            <p>{data.name} </p>
                          </div>
                        </label>
                        <input
                          type="file"
                          id="thumb-btn"
                          className="hidden"
                          accept="image/*"
                        />
                      </div>
                    ))}
                  </div>
                </Slider>
              </div>
              <div
                onClick={() => slideRef.current.slickNext()}
                className="w-full h-[24px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer rounded"
              >
                <Image
                  className=""
                  src={vector}
                  width=""
                  height=""
                  alt="vector"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
