import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images/uploadproducts/Vector (3).png";
import img2 from "../../../assets/images/uploadproducts/Vector.png";
import vector from "../../../assets/images/product_page/Vector.png";
const LeftSide = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:w-[96px] h-auto md:h-[560px] border md:flex flex-col p-[8px] bg-[#F2F3F7] gap-[8px] rounded-md ">
            <div className="">
              <Slider className=" ">
                <div className="">
                  <label htmlFor="thumb-btn">
                    <div className="py-4 px-1 border-dashed border-2 rounded-lg flex flex-col items-center">
                      <Image src={img1} alt="" />
                      <p>Product Video </p>
                    </div>
                  </label>
                  <input type="file" id="thumb-btn" className="hidden" />
                </div>
              </Slider>
            </div>
            <div
              onClick={() => slideRef.current.slickNext()}
              className="w-[78px] h-[24px] bg-white flex justify-center items-center cursor-pointer"
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

          <div className="block md:hidden overflow-hidden mb-10">
            {
              <div className=" items-center"> */}
                {/* <Slider {...imgSettingsMobile} className=" " ref={slideRef}>
                  {productPictures?.map((n, index) => (
                    <div key={index} className=" flex justify-center">
                      <Image
                        onMouseOver={(e) => setImg(e.currentTarget.src)}
                        className="border rounded-md cursor-pointer"
                        src={n?.img}
                        width="590"
                        height="296"
                        alt="tomato_img"
                      ></Image>
                    </div>
                  ))}
                </Slider> */}
              {/* </div>
            }
          </div>
          <div className="ml-0 md:ml-[24px] "> */}
            {/* <Image
              className="shadow-lg rounded-md mb-[20px] hidden md:flex"
              src={img ? img : productPictures?.[0]?.img}
              width="500"
              height="500"
              alt="tomato_img"
            ></Image> */}
          {/* </div>
        </div>
      </div> */}

          
      <div className="grid grid-cols-4 w-full gap-3">
          <div className="col-span-3 border-dashed border-2 rounded-lg flex justify-center items-center">
            <label htmlFor="thumb-btn">
              <div className="  flex flex-col items-center">
                <Image src={img2} alt="" />
                <p>Thumbnail Image </p>
              </div>
            </label>
            <input type="file" id="thumb-btn" className="hidden" />
          </div>
          <div className="">
            <label htmlFor="thumb-btn">
              <div className="py-4 px-1 border-dashed border-2 rounded-lg flex flex-col items-center">
                <Image src={img1} alt="" />
                <p>Product Video </p>
              </div>
            </label>
            <input type="file" id="thumb-btn" className="hidden" />
          </div>
        </div>
    </div>
  );
};

export default LeftSide;
