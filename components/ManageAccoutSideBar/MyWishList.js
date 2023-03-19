import Image from "next/image";
import { useRouter } from "next/router";
import {
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaTrashAlt,
} from "react-icons/fa";

const MyWishList = () => {
  const router = useRouter();
  const wishlistData = [
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      img: "/loveimage.png",
    },
  ];
  return (
    <div>
      <div className="lg:block hidden lg:mr-[20px]">
        <div>
          <p className="text-[24px] font-[400] text-[#FB641B]">My Wishlist</p>
        </div>
        <div className="wishlistBox max-w-[924px] h-[149px] mt-[32px]">
          <p className="text-[14px] ml-[16px] pt-[16px] font-normal text-[#686868]">
            Purchased on: 21 Dce 2022 10:21:00
          </p>
          <div className="mt-[18px] flex items-center justify-between mr-[24px]">
            <div className="flex col-span-1 gap-[16px] ml-[10px]">
              <Image src="/image 6.png" width={79} height={63} alt=""></Image>
              <div>
                <p className="text-[#001E00] whitespace-nowrap font-[400] text-[16px]">
                  Tomato (Local) 500 ±30 gm
                </p>
                <FaTrashAlt className="w-[18px] h-[21px] mt-[16px]"></FaTrashAlt>
              </div>
            </div>
            <div className="col-span-1 ">
              <p className="text-[16px] font-[500] text-[#FB641B]">Tk. 60</p>

              <div className="flex gap-[8px] mt-[12px]">
                <p className="text-[#707070] text-[10px] font-[500] line-through">
                  Tk. 80
                </p>
                <p className="text-[#707070] text-[10px] font-[400]">
                  (20% off)
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-[66px] flex items-center justify-center h-[28px] mt-[10px]  bg-[#FB641B] rounded-[26px]">
                <Image
                  src="/shopingcart.png"
                  className=" "
                  width={19}
                  height={16}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#001E00] font-bold text-[16px] mt-[32px]">
            Just for you
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[10px] max-w-[924px]">
          {wishlistData.map((data) => (
            <>
              <div className="mt-[16px]">
                <div className="wishlistcard max-w-[222px] h-full">
                  <div>
                    <label className="flex ">
                      <Image
                        src="/image 6.png"
                        width={220}
                        height={154}
                        alt=""
                      ></Image>
                      <div className="wishlistloveButton absolute ml-[120px] xl:ml-[181px] mt-[13px] w-[28px] h-[28px] flex items-center justify-center rounded-full">
                        <FaHeart className=" text-[#F2F2F2]  w-[17px] h-[16px] hover:fill-[#FB641B]  "></FaHeart>
                      
                      </div>
                    </label>
                  </div>
                  <div className="ml-[16px]">
                    <p className="text-[#FB641B] font-[500] text-[20px]">
                      Tk 1024
                    </p>
                    <p className="text-[#001E00] text-[16px] font-[400] max-w-[184px]">
                      Misti Kumra Fali (Sweet Pumpkin Fali)
                    </p>
                    <div className="mt-[10px] flex gap-[8px] items-center">
                      <div className="flex gap-[4px] items-center w-[35px] h-[16px] bg-[#026C51] rounded-[2px]">
                        <p className="text-[12px] ml-[2px] font-normal text-white">
                          4.9
                        </p>
                        <FaStar className="w-[12px] h-[12px] text-white "></FaStar>
                      </div>
                      <p className="text-[#686868] text-[14px] font-[400]">
                        24 Ratings & 5 Reviews
                      </p>
                    </div>
                    <div className="mt-[4px] mb-[10px] flex gap-[8px]">
                      <p className="text-[#686868] text-[13px]">Seller: </p>
                      <Image
                        src="/seller.png"
                        width={50}
                        height={10}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="mt-[34px] px-[24px] w-full">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-[13px]"
            >
              <FaArrowLeft className=""></FaArrowLeft>
              <h1 className="text-[20px]  font-[500] text-[#001E00]">
                My Wishlist
              </h1>
            </button>
          </div>
          <div className="mt-[16px]">
            <div className="w-full h-full wishlistResponsiveBox">
              <div className="mx-[12px] ">
                <h1 className="text-[#686868] pt-[12px] text-[3.6vw] md:text-[14px]">
                  Purchased on: 21 Dce 2022 10:21:00
                </h1>
                <div className="flex items-center  justify-between gap-[15px]">
                  <div className="flex">
                    <Image
                      src="/image 6.png"
                      width={79}
                      height={63}
                      alt=""
                    ></Image>
                    <div className="ml-[12px]">
                      <h1 className="md:text-[16px] text-[3.8vw]  text-[#001E00]">
                        Tomato (Local) 500...
                      </h1>
                      <h1 className="text-[#FB641B] text-[3.8vw] md:text-[16px] font-[500]">
                        Tk. 60
                      </h1>
                      <div className="flex gap-[8px] mt-[4px]">
                        <p className="text-[#707070] text-[2.5vw] md:text-[10px] font-[500] line-through">
                          Tk. 80
                        </p>
                        <p className="text-[#707070] text-[2.5vw] md:text-[10px] font-[400]">
                          (20% off)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[10px]">
                    <div className="md:w-[66px] w-full   flex items-center h-[28px] mt-[10px]  bg-[#FB641B] rounded-[26px]">
                      <Image
                        src="/shopingcart.png"
                        className=" ml-[24px]"
                        width={19}
                        height={16}
                        alt=""
                      ></Image>
                    </div>
                    <div className="w-[66px] flex items-center h-[28px] mt-[10px]  bg-[#FFFFFF] border border-[#FB641B] rounded-[26px]">
                      <FaTrashAlt className=" ml-[24px] text-[#F4253F]"></FaTrashAlt>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[24px]">
            <h1 className="text-[#001E00] font-[500] text-[24px]">
              Just For You
            </h1>
            <div className="mt-[16px]">
              <div className="grid grid-cols-2  gap-[16px]">
                {wishlistData.slice(0, 4).map((data) => (
                  <>
                    <div className="wishlistcard w-full  h-full">
                      <div>
                        <label className="flex ">
                          <Image
                            src="/image 6.png"
                            width={180}
                            height={126}
                            alt=""
                          ></Image>
                          <div className="relative right-[40px] md:right-[50px]">
                            <div className="wishlistloveButton absolute  mt-[13px] w-[28px] h-[28px] flex items-center justify-center rounded-full">
                              <FaHeart className=" text-[#F2F2F2]  w-[17px] h-[16px] hover:fill-[#FB641B]  "></FaHeart>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="mx-[8px]">
                        <p className="text-[#FB641B] font-[500] text-[4vw] md:text-[18px]">
                          Tk 1024
                        </p>
                        <p className="text-[#001E00] text-[3.6vw] md:text-[14px] font-[400] w-full">
                          Misti Kumra Fali (Sweet Pumpkin Fali)
                        </p>
                        <div className="mt-[10px] flex gap-[8px] items-center">
                          <div className="flex gap-[4px] items-center w-[35px] h-[16px] bg-[#026C51] rounded-[2px]">
                            <p className="md:text-[12px] text-[2.9vw] ml-[2px] font-normal text-white">
                              4.9
                            </p>
                            <FaStar className="w-[12px] h-[12px] text-white "></FaStar>
                          </div>
                          <p className="text-[#686868] text-[2.7vw] md:text-[10px] font-[400]">
                            24 Ratings & 5 Reviews
                          </p>
                        </div>
                        <div className="mt-[4px] flex gap-[8px]">
                          <p className="text-[#686868] text-[3.6vw] md:text-[14px]">Seller: </p>
                          <Image
                            src="/seller.png"
                            width={50}
                            height={10}
                            alt=""
                          ></Image>
                        </div>
                        <div className="mx-auto mt-[34px] md:hidden mb-[8px]">
                          <button className="w-full flex items-center justify-center gap-[4px] h-full p-[2.5vw] bg-[#FB641B] rounded-[4px]">
                            <h1 className="text-[#FFFFFF]  text-[3.8vw] whitespace-nowrap font-[500]">
                              Add to Cart
                            </h1>
                            <Image
                              alt=""
                              src="/shopingcart.png"
                              width={21}
                              height={18}
                            ></Image>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWishList;
