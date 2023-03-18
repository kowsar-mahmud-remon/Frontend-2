import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img1 from "../../assets/images/Sidebutton/Chat-logo.png";
import img2 from "../../assets/images/Sidebutton/Vector.png";
import img3 from "../../assets/images/Sidebutton/Group 2436.png";
import img4 from "../../assets/images/Sidebutton/Vector (9).png";
import img5 from "../../assets/images/Sidebutton/Vector (10).png";
import img6 from "../../assets/images/Sidebutton/Group 1981.png";
const SideButtons = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  const handleScrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="relative hidden lg:block ">
      <div className=" fixed top-1/2 right-0 transform -translate-y-1/2 mx-[10px]">
        <div>
          <Link href="/cart">
            <div className="p-2 flex flex-col items-center shadow-lg rounded-xl bg-white mb-2">
              <Image src={img2} alt="" />
              <p className="border-b-2">2 Items</p>

              <p className="text-[#FB641B]">TK. 100</p>
            </div>
          </Link>
          <div
            onClick={() => {
              setActive(!active);
            }}
            className="p-2  flex flex-col items-center shadow-lg rounded-xl bg-white cursor-pointer"
          >
            <Image src={img1} alt="" />
            <p className="text-[#026C51]">Live Chat</p>
          </div>
        </div>
      </div>
      <div
        className={`fixed  right-24 z-50 h-screen ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center h-full ">
          <div className="relative h-[510px] w-[440px] rounded-lg bg-white shadow-xl">
            <div className="flex justify-between items-center px-6 py-5 shadow-lg">
              <div className="flex items-center">
                <Image src={img1} alt="" />
                <p className="font-[500] text-lg ml-2">Messages</p>
              </div>
              <p className="text-[#686868] text-sm">9.30 AM</p>
            </div>
            <div className="bg-[#F2F3F7]"></div>
            <div className="p-4 bg-[#F2F3F7] absolute bottom-0 w-full rounded-b-lg">
              <div className="flex justify-between items-center gap-3">
                <div>
                  <Image src={img3} alt="" />
                </div>
                <div className="flex items-center bg-white border-2 w-full rounded-full p-2">
                  <input type="text" className="focus:outline-none w-full" />
                  <div>
                    <Image src={img5} alt="" />
                  </div>
                </div>
                <div>
                  <Image src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed bottom-10 right-8">
        <Image src={img6} alt="" onClick={handleScrollToTop}/>
      </div>
    </div>
  );
};

export default SideButtons;
