import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowLeft,
  FaRegSmile,
} from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const MyReviews = () => {
  const router = useRouter();

  const datas = [
    {
      id: "1",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "2",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "3",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "4",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Payment",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "5",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "6",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "7",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "8",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "9",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Processing",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
    {
      id: "10",
      orderId: "121312323213432",
      orderDate: "Placed On 21 Dec 2022 10:21:00",
      image: "/image 8.png",
      peoductName: "Tomato(Local) 500+30 gm",
      qty: "1",
      status: "Processing",
      deliveredDate: "Delivered on 21 Dec 2022",
    },
  ];

  const [isActive, setActive] = useState("review");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
  const count = datas.length;
  const pages = Math.ceil(count / size);
  // console.log(pages)
  // console.log(count)
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <div className="lg:block hidden">
        <div>
          <h1 className="font-[400] text-[24px] text-[#FB641B]">My Reviews</h1>
        </div>
        <div className="reviewBox border-b-4  mt-[32px]">
          <div className="ml-[30px] p-[7px]  gap-[54px] flex">
            <button
              onClick={() => setActive("review")}
              className={
                isActive === "review"
                  ? "font-[500] text-[#FB641B] border-b-[2px] h-[45px] border-[#FB641B] text-[16px]"
                  : "font-[500] text-[16px]"
              }
            >
              To Be Reviewed (3)
            </button>

            <button
              onClick={() => setActive("history")}
              className={
                isActive === "history"
                  ? "font-[500] text-[#FB641B] border-b-[2px] h-[45px] border-[#FB641B] text-[16px]"
                  : "font-[500] text-[16px]"
              }
            >
              History (11)
            </button>

            {/* <button onClick={() => setActive('history')} href='#' className={isActive === 'history' ? "font-[500] text-[#FB641B]  text-[16px]" : "font-[500] text-[16px]"}>History (11)</button> */}
          </div>
        </div>

        {isActive === "review" &&
          datas.slice(0, 3).map((data) => (
            <>
              <div className="reviewDetails flex mt-[16px]">
                <div className="w-[559px]">
                  <p className="font-[400] pt-[16px] pl-[16px] text-[14px] text-[#686868]">
                    Purchased on: 21 Dce 2022 10:21:00
                  </p>
                  <div className="flex mt-[23px] gap-[16px] items-center">
                    <Image
                      class
                      src="/image 6.png"
                      width={57}
                      height={46}
                      className="rounded-[4px] ml-[15px]"
                      alt=""
                    ></Image>
                    <p className="text-[#001E00] text-[16px] font-[400]">
                      Tomato (Local) 500 ±30 gm
                    </p>
                  </div>
                </div>
                <div className="divider divider-horizontal text-[#686868] border-solid mt-[26px] mb-[19px] h-[104px]"></div>
                <div className="w-[365px] ">
                  <p className="text-[16px] ml-[87px] pt-[41px] font-[400] text-[#686868]">
                    Sold by{" "}
                    <span className="text-[#287DF3]">Banglar Big Store</span>
                  </p>

                  <Link href="myReviews/writeReview">
                    <button className="reviewBtn ml-[116px] mt-[16px]">
                      <span className="text-[#FB641B] font-[400] text-[16px]">
                        REVIEW
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ))}

        {isActive === "history" &&
          datas.slice(0, 2).map((data) => (
            <>
              <div className="historyBox flex mt-[16px]">
                <div className="w-[600px]">
                  <p className="font-[400] ml-[24px] pt-[16px] text-[14px] text-[#686868]">
                    Purchased on: 21 Dce 2022 10:21:00
                  </p>
                  <p className="text-[#001E00] font-[400] text-[16px] mt-[16px] ml-[24px]">
                    Your product rating & review:
                  </p>

                  <div className="flex gap-[16px] ml-[8px]  mt-[11px]">
                    <Image
                      className=""
                      src="/image 6.png"
                      width={76}
                      height={61}
                      alt=""
                    ></Image>
                    <div className="">
                      <p className="font-normal text-[16px] text-[#001E00]">
                        Tomato (Local) 500 ±30 gm
                      </p>
                      <div className="flex  items-center gap-[8px]">
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

                  <div className="w-[503px] mt-[34px] ml-[24px] h-[188px] bg-[#F2F2F2] rounded-[8px]">
                    <p className="text-[#686868] font-normal text-[16px] pt-[24px] pl-[24px] pr-[24px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries,
                    </p>
                  </div>
                  <div className="flex gap-[8px] mt-[8px] ml-[20px]">
                    {datas.slice(0, 4).map((data) => (
                      <>
                        <Image
                          src="/image 6.png"
                          width={74}
                          height={60}
                          alt=""
                        ></Image>
                      </>
                    ))}
                  </div>
                </div>
                <div className="divider divider-horizontal mt-[23px] h-[460px]"></div>
                <div className="w-[324px]">
                  <p className="font-[400] text-[16px] mt-[41px] text-[#686868]">
                    Sold by{" "}
                    <span className="text-[#287DF3]">Banglar Big Store</span>
                  </p>
                  <p className="font-[500] text-[16px] mt-[16px] text-[#001E00]">
                    Your seller review:
                  </p>
                  <div className="flex gap-[8px] mt-[16px]">
                    <FaRegSmile className="w-[24px] h-[24px]  text-[#FB641B]"></FaRegSmile>
                    <p className="font-[400] text-[16px] text-[#686868]">
                      Positive
                    </p>
                  </div>

                  <div className="mt-[59px]">
                    <p className="font-[500] text-[16px] text-[#001E00]">
                      Rate your Rider:
                    </p>
                    <div className="flex mt-[16px] items-center gap-[8px]">
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
              </div>
            </>
          ))}

        <div className="btn-group mt-[16px] ml-[850px]">
          <button
            onClick={() => setPage(page - 1)}
            className="w-[24px]  h-[28px] bg-[#F2F2F2] rounded-[4px]"
          >
            <FaAngleLeft className="m-[3px] text-[#707070]"></FaAngleLeft>
          </button>
          <button className="w-[24px] h-[28px] text-white rounded-[4px] bg-[#FB641B] ">
            {page}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="w-[24px]  h-[28px] bg-[#F2F2F2] rounded-[4px]"
          >
            <FaAngleRight className="m-[3px] text-[#707070]"></FaAngleRight>
          </button>
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="mt-[66px] mx-[20px]">
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
          <div>
            <div className=" flex justify-evenly">
              <button
                onClick={() => setActive("review")}
                className={
                  isActive === "review"
                    ? "font-[500] text-[#FB641B] border-b-[2px] h-[45px] border-[#FB641B] text-[16px]"
                    : "font-[500] text-[16px]"
                }
              >
                To Be Reviewed (3)
              </button>

              <button
                onClick={() => setActive("history")}
                className={
                  isActive === "history"
                    ? "font-[500] text-[#FB641B] border-b-[2px] h-[45px] border-[#FB641B] text-[16px]"
                    : "font-[500] text-[16px]"
                }
              >
                History (11)
              </button>
            </div>
            <p className=" h-[0px]   border-[1px] border-solid  border-[#F2F2F2] w-full "></p>
          </div>
          <div className="mt-[16px]">
            {isActive === "review" &&
              datas.slice(0, 3).map((data) => (
                <>
                  <div className="reviewResponsive w-full h-[113px] mt-[28px]">
                    <div className="">
                      <div className="flex justify-between mx-[12px]">
                        <div>
                          <p className="font-normal  pt-[12px] text-[#001E00] text-[12px]">
                            Banglar Big Store
                          </p>
                          <p className="text-[#686868] mt-[4px]  font-normal text-[12px]">
                            Placed On 21 Dce 2022 10:21:00
                          </p>
                        </div>
                        <Link
                          className="text-[14px] mt-[16px] text-[#FB641B] font-normal  italic"
                          href="/profile/writeReview"
                        >
                          REVIEW
                        </Link>
                      </div>
                      <div className="flex mt-[16px] gap-[12px]">
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
                    </div>
                  </div>
                </>
              ))}
            {isActive === "history" &&
              datas.slice(0, 2).map((data) => (
                <>
                  <div className="historyResponsive w-full h-full mt-[16px]">
                    <div>
                      <p className="font-normal ml-[12px] pt-[12px] text-[#001E00] text-[16px]">
                        Banglar Big Store
                      </p>
                      <p className="text-[#686868] mt-[4px] ml-[12px] font-normal text-[12px]">
                        Placed On 21 Dce 2022 10:21:00
                      </p>
                    </div>
                    <div className="flex justify-center mx-[12px]">
                      <div className="historyInside w-full  h-[96px] mt-[8px] ">
                        <div className="flex pt-[12px]  gap-[8px] items-center">
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

                        <div className="flex justify-center">
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
                    </div>

                    <div className="ml-[12px] mt-[8px]">
                      <p className="text-[#686868] text-[14px] font-normal">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                      </p>
                    </div>
                    <div className="mt-[8px] flex gap-[8px]">
                      {datas.slice(0, 3).map((data) => (
                        <>
                          <Image
                            src="/image 8.png"
                            width={68}
                            height={56}
                            alt=""
                          ></Image>
                        </>
                      ))}
                    </div>
                    <div className="mt-[24px] ml-[12px]">
                      <p className="text-[#001E00] font-[500] text-[16px]">
                        Your seller review:
                      </p>
                      <div className="flex gap-[16px] mt-[16px]">
                        <FaRegSmile className="w-[24px] h-[24px]  text-[#FB641B]"></FaRegSmile>
                        <p className="font-[400] text-[16px] text-[#686868]">
                          Positive
                        </p>
                      </div>
                    </div>
                    <div className="mt-[24px]">
                      <p className="font-[500] text-[16px] ml-[12px] text-[#001E00]">
                        Rate your Rider:
                      </p>
                      <div className="ml-[12px]">
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
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
