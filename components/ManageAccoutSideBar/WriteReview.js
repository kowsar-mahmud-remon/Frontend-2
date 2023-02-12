import Image from "next/image";
import { useState } from "react";
import {
  FaRegSmile,
  FaSmile,
  FaStar,
  FaRegMeh,
  FaRegFrown,
  FaArrowLeft,
} from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const WriteReview = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile.type === "image/jpeg") {
        setFile(selectedFile);
      } else {
        alert("Invalid file type. Only JPEG files are allowed.");
      }
    }
  };
  console.log(file);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <div className="mt-[66px] ml-[20px] md:hidden">
        <div>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-[13px]"
          >
            <FaArrowLeft className=""></FaArrowLeft>
            <h1 className="text-[20px]  font-[500] text-[#001E00]">
              My Reviews
            </h1>
          </button>
        </div>
        <p className="text-[#001E00] font-[500] text-[16px] mt-[16px]">
          Product Review
        </p>
        <div>
          <p className="font-normal  mt-[16px] text-[#001E00] text-[16px]">
            Banglar Big Store
          </p>
          <p className="text-[#686868] mt-[4px] font-normal text-[12px]">
            Delivered on 21 Apr 2022
          </p>
        </div>
        <div className="writeResponsiveBox mt-[12px]">
          <div className="flex pt-[12px] ml-[12px] items-center gap-[12px]">
            <Image
              src="/image 8.png"
              width={44}
              height={36}
              className="rounded-[4px]"
              alt=""
            ></Image>
            <p className="text-[#001E00] text-[14px] font-[400]">
              Tomato (Local) 500 ±30 gm
            </p>
          </div>
          <div>
            <div className="ml-[15px]  ">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                spacing={12}
                size={36}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FB641B"
              />
            </div>
          </div>
        </div>
        <div className="mt-[16px]">
          <textarea
            placeholder="Type your Opinion..."
            class="resize-none rounded-md writeReviewTextArea pl-[12px] pt-[12px]"
          ></textarea>
        </div>
        <div className="responsiveImageFileUpload mt-[16px]">
          <label>
            <div className="flex justify-center items-center gap-[7px] mt-[14px]">
              <Image
                src="/cloudupload.png"
                width={25}
                height={20}
                alt=""
              ></Image>
              <p className="font-[400] text-[10px] text-[#686868]">
                Upload Photo
              </p>
            </div>
            <input
              type="file"
              accept="image/jpeg"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>
        <div>
          <p className="text-[#001E00] font-[500] text-[16px] mt-[24px]">
            Your seller review:
          </p>
          <div className="flex items-center gap-[16px] mt-[16px]">
            <div className="flex items-center gap-[24px]">
              <FaRegFrown className="w-[36px] h-[36px] hover:text-[#FB641B]"></FaRegFrown>
              <FaRegMeh className="w-[36px] h-[36px] hover:text-[#FB641B]"></FaRegMeh>
              <FaRegSmile className="w-[36px] h-[36px] hover:text-[#FB641B]"></FaRegSmile>
            </div>
            <p className="font-[400] text-[16px] text-[#686868]">Positive</p>
          </div>
        </div>
        <div className="mt-[24px]">
          <p className="text-[#001E00] font-[500] text-[16px]">
            Rate your Rider:
          </p>
          <div>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={36}
              isHalf={true}
              spacing={6}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#FB641B"
            />
          </div>
        </div>
        <div className="mt-[50px]">
          <button className="bg-[#FB641B] mb-[32px] text-white w-[376px] h-[48px] rounded-[8px]">
            Submit
          </button>
        </div>
      </div>

      {/* large */}
      <div className="md:block hidden">
        <div>
          <h1 className="font-[400] text-[24px] text-[#FB641B]">
            Write Review
          </h1>
        </div>
        <div className="w-[924px] flex h-[654px] left-[636px] mt-[26px] top-[297px]  shadowreviews">
          <div className="w-[600px]">
            <p className="font-[400] text-[14px] ml-[24px] pt-[32px]  text-[#686868]">
              Delivered on 21 Apr 2022
            </p>
            <p className="font-[400] text-[16px] ml-[24px] mt-[16px] text-[#001E00]">
              Rate and review purchased product:
            </p>
            <div className="flex mt-[11px]">
              <Image src="/image 8.png" width={76} height={61} alt=""></Image>
              <div className="">
                <p className="font-[400] text-[16px] text-[#001E00]">
                  Tomato (Local) 500 ±30 gm
                </p>
                <div className="flex  items-center gap-[4px]">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#FB641B"
                  />
                  <p className="font-[400] mt-1 text-[14px] text-[#686868]">
                    Delightful
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <textarea className="resize-none p-[24px] font-[400] text-[16px] text-[#686868] w-[552px] ml-[24px] h-[96px] bg-[#F2F2F2] rounded-lg outline-none "></textarea>
            </div>
            <div className="flex gap-[8px] mt-[12px]">
              <Image src="/image 8.png" width={74} height={60} alt=""></Image>
              <Image src="/image 8.png" width={74} height={60} alt=""></Image>
              <Image src="/image 8.png" width={74} height={60} alt=""></Image>
              <label className="w-[74px] h-[60px] bg-[#F2F3F7] border-solid border-[1px] shadow-small">
                <Image
                  className="mt-[14px] ml-[28px] mr-[28px] mb-[28px]"
                  src="/Vector.png"
                  width={20}
                  height={18}
                  alt=""
                ></Image>

                <p className="font-[400] mt-[-22px] ml-[10px]  text-[8px] text-[#686868]">
                  Upload Photo
                </p>
                <input
                  type="file"
                  accept="image/jpeg"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="mt-[32px] ml-[24px]">
              <p className="font-[500] text-[16px] text-[#001E00]">
                Important:
              </p>
              <p className="font-[400] text-[16px] text-[#686868]">
                Maximum 6 images can be uploaded
              </p>
              <p className="font-[400] text-[16px] text-[#686868]">
                - Image size can be maximum 5MB
              </p>
              <p className="font-[400] text-[16px] text-[#686868]">
                - It takes up to 24 hours for the image to be reviewed
              </p>
              <p className="font-[400] text-[16px] text-[#686868]">
                - Please ensure you meet the{" "}
                <span className="text-[#287DF3]">Community Guidelines </span>{" "}
                <br /> before uploading your review
              </p>
            </div>
          </div>
          <div className="divider divider-horizontal mt-[29px] h-[460px]"></div>
          <div className="w-[324px] ">
            <p className="font-[400] text-[16px] mt-[47px] text-[#686868]">
              Sold by <span className="text-[#287DF3]">Banglar Big Store</span>
            </p>
            <p className="font-[500] text-[16px] mt-[16px] text-[#001E00]">
              Your seller review:
            </p>
            <div className="flex gap-[15px] mt-[16px]">
              <FaRegFrown className="w-[24px] h-[24px] hover:text-[#FB641B]"></FaRegFrown>
              <FaRegMeh className="w-[24px] h-[24px] hover:text-[#FB641B]"></FaRegMeh>
              <FaRegSmile className="w-[24px] h-[24px] hover:text-[#FB641B]"></FaRegSmile>
              <p className="font-[400] text-[16px] text-[#686868]">Positive</p>
            </div>
            <div className="mt-[32px]">
              <p className="font-[500] text-[16px] text-[#001E00]">
                Review detail
              </p>

              <textarea className=" resize-none  p-[12px] font-[400] text-[16px] text-[#686868] w-[275px] mt-[8px] h-[72px] bg-[#F2F2F2] rounded-[4px] outline-none"></textarea>
            </div>
            <div className="mt-[31px]">
              <p className="font-[500] text-[16px] text-[#001E00]">
                Rate your Rider:
              </p>
              <div className="mt-[16px] flex">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#FB641B"
                />
              </div>
            </div>
            <textarea className="resize-none  p-[12px] font-[400] text-[16px] text-[#686868] w-[275px] mt-[8px] h-[72px] bg-[#F2F2F2] rounded-[4px] outline-none"></textarea>

            <div className="mt-[55px]">
              <div className="flex gap-[26px] items-center">
                <p className="font-[400] text-[16px] text-[#001E00]">
                  Review as Abdul K.
                </p>
                <div className="flex gap-[8px] items-center">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <p className="text-[#287DF3] text-[12px] font-[400]">
                    Anonymous
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[20px] mb-[10px]">
              <button className="bg-[#FB641B] mb-[32px] text-white w-[275px] h-[48px] rounded-[8px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
