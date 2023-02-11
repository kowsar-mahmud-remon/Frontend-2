import Image from 'next/image';
import React from 'react';
import img1 from "../../../assets/images/uploadproducts/Vector (3).png";
import img2 from "../../../assets/images/uploadproducts/Vector.png";
const LeftSide = () => {
    return (
      <div>
        <div className="flex w-full gap-4">
          <label htmlFor="thumb-btn">
            <div className="p-36 border-dashed border-2 rounded-lg flex flex-col items-center">
              <Image src={img2} alt="" />
              <p>Thumbnail Image </p>
            </div>
          </label>
          <input type="file" id="thumb-btn" className="hidden" />
          <div className="w-">
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