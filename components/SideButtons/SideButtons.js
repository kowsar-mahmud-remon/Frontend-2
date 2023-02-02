import Image from "next/image";
import React from "react";
import img1 from '../../assets/images/Sidebutton/Chat-logo.png'
import img2 from '../../assets/images/Sidebutton/vector.png'
const SideButtons = () => {
  return (
    <div className="relative hidden md:block">
      <div className="fixed top-1/2 right-0 z-50 h-screen">
        <div className="p-2 flex flex-col items-center shadow-lg rounded-xl bg-white mb-2">
          <Image src={img2} alt="" />
          <p className="border-b-2">2 Items</p>
          
          <p className="text-[#FB641B]">TK. 100</p>
        </div>
        <div className="p-2  flex flex-col items-center shadow-lg rounded-xl bg-white">
          <Image src={img1} alt="" />
          <p className="text-[#026C51]">Live Chat</p>
        </div>
      </div>
    </div>
  );
};

export default SideButtons;
