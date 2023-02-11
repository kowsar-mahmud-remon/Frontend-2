import { useState } from "react";
import Image from "next/image";
import { AiOutlineCloudUpload } from "react-icons/ai";
import cloud from '../../assets/images/Seller_Verification_page/nid/export.png';

const Sellerverification = () => {
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack] = useState(null);

  function handleFrontChange(event) {
    setNidFront(event.target.files[0]);
  }
  function handleBackChange(event) {
    setNidBack(event.target.files[0]);
  }

  return (
    <div className="grid lg:grid-cols-2 mobile:grid-cols-1 gap-6">
      {/* for id front part */}
      <div className="my-4">
        <p className="text-sm md:text-md font-semibold my-2 text-[#707070]">
          Upload ID Card Front Part
        </p>
        <div className="border shadow-xl p-[16px] rounded-lg">
          <div className=" h-[170px] border-2  grid grid-cols-3 items-center  rounded-lg">
            {nidFront ? (
              <div className="flex items-center border-0  rounded-l-xl p-4 bg-[#F2F3F7] text-start col-span-1 w-full h-full">
                <Image
                  className=""
                  src={URL.createObjectURL(nidFront)}
                  alt="Preview"
                  width="292"
                  height="124"
                />
              </div>
            ) : (
              <div className="md:ml-10 w-200 h-200 border border-5 p-4 rounded-lg text-sm md:text-md">
                NID Front Photo
              </div>
            )}

            <div className="col-span-2 flex justify-center">
              <label htmlFor="frontimg">
              <Image
                  className=""
                  src={cloud}
                  alt="Preview"
                  width="60"
                  height="40"
                />
                <p className="md:-ml-3 text-sm md:text-md text-[#686868]">upload photo</p>
              </label>
              <input
                id="frontimg"
                style={{ display: "none", visibility: "none" }}
                type="file"
                onChange={handleFrontChange}
              />
            </div>
          </div>
          <div className="">
            <p className="text-sm md:text-md font-semibold my-2">ID Name</p>
            <input
              type="text"
              placeholder="Type your ID Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>
      {/* for id back part */}
      <div className="my-4">
        <p className="text-sm md:text-md font-semibold my-2 text-[#707070]">
        Upload ID Card Back Part
        </p>
        <div className="border shadow-xl p-[16px] rounded-lg">
          <div className=" h-[170px] border-5 grid grid-cols-3 items-center border rounded-lg">
            {nidFront ? (
              <div className="flex items-center border-2 p-4  rounded-l-xl bg-[#F2F3F7] text-start col-span-1 w-full h-full">
                <Image
                  className="w-full"
                  src={URL.createObjectURL(nidBack)}
                  alt="Preview"
                  width="200"
                  height="200"
                />
              </div>
            ) : (
              <div className="md:ml-10 w-200 h-200 border border-5 p-4 rounded-lg text-sm md:text-md">
                NID Front Photo
              </div>
            )}

            <div className="col-span-2 flex justify-center">
              <label htmlFor="backimg">
              <Image
                  className=""
                  src={cloud}
                  alt="Preview"
                  width="60"
                  height="40"
                />
                <p className="md:-ml-3 text-sm md:text-md text-[#686868]">upload photo</p>
              </label>
              <input
                id="backimg"
                style={{ display: "none", visibility: "none" }}
                type="file"
                onChange={handleBackChange}
              />
            </div>
          </div>
          <div className="">
            <p className="text-sm md:text-md font-semibold my-2">State Name</p>
            <input
              type="text"
              placeholder="Type your ID Number"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellerverification;
