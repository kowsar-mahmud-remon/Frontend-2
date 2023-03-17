/* eslint-disable react/jsx-key */
import NavicationWithSideNavLayout from "../../layouts/NavicationWithSideNavLayout";
import Image from "next/image";
import vector from "../../assets/images/product_page/Vector.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  BsFillBagCheckFill,
  BsFillStarFill,
  BsStar,
  BsPlusLg,
} from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { HiMinusSm } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/CategoryImages/ProductsImg/logo.jpg";
import { useRouter } from "next/router";
import {
  useGetProductQuestionCountQuery,
  useGetProductQuestionQuery,
  useGetProductRatingQuery,
  useGetProductReviewCountQuery,
  useGetProductReviewQuery,
} from "../../features/review&question/reviewQuestionApi";
// import styles from './productpage.module.css'
import { useDispatch, useSelector } from "react-redux";
import Paginate from "../../components/paginate/Paginate";
import {
  increaseQuestionPage,
  increaseReviewPage,
} from "../../features/paginate/paginate.slice";
import ProductReview from "../../components/ProductDesc/ProductReview";
import QuestionCard from "../../components/ProductDesc/QuestionCard";
import {
  useGetSingleCategoryDescQuery,
  useGetSingleProductQuery,
} from "../../features/category/categoryApi";
import ProductCard from "../../components/allCategory/ProductCard";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  imageSettings,
  imgSettings,
  imgSettingsMobile,
} from "../../Utils/sliderConfig";
import { useAddCartMutation } from "../../features/cart/cartApi";
import {
  addCartProductPage,
  addCartProductPageDecrease,
  addCartProductPageIncrease,
} from "../../features/cart/cartSlice";
import AddToCartPage from "../../components/AddToCartPage/AddToCartPage";
import img1 from "../../assets/images/payOption/1.png";
import img2 from "../../assets/images/payOption/2.png";
import img3 from "../../assets/images/payOption/3.png";
import img4 from "../../assets/images/payOption/4.png";
import img5 from "../../assets/images/payOption/5.png";
import img6 from "../../assets/images/payOption/6.png";
import img7 from "../../assets/images/payOption/7.png";
import img8 from "../../assets/images/payOption/8.png";
import CouponCard from "../../components/ManageAccoutSideBar/CouponCard";

const coupons = [
  {
    ShopName: "FamilyBazar",
    Discount: "50% Discount Product Sell",
    Coupon: "SAVE50",
    End: "25 May 2023",
    Image: "/image 369.png",
  },
  {
    ShopName: "FamilyBazar",
    Discount: "Free Delivery Promo",
    Coupon: "SAVE50",
    End: "25 May 2023",
    Image: "/image 371.png",
  },
];
const giftCards = [
  {
    image: "/image 379.png",
    Discount: "10% Cashback",
    End: "25 Mar 2023",
    payment: "Islamic Bank",
  },
  {
    image: "/image 379.png",
    Discount: "10% Cashback",
    End: "25 Mar 2023",
    payment: "bKash",
  },
];

const ProductPage = () => {
  // for coupone
  const [showDiv, setShowDiv] = useState(false);

  // for coupone and gift card
  const [isActive, setActive] = useState("StoreCoupon");

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  const [img, setImg] = useState(null);
  const router = useRouter();
  const { slug, subCategoryId } = router.query;
  const _id = slug?.[1];
  const [callApi, setCallApi] = useState(true);
  const dispatch = useDispatch();
  const {
    cart: { cartProductPage },
    auth,
  } = useSelector((state) => state);
  const {
    paginate: { reviewPage, questionPage, limit },
  } = useSelector((state) => state);
  const [hidden, setHidden] = useState();
  // review count
  const {
    data: reviewCount,
    isLoading: reviewCountLoading,
    error: reviewCountError,
  } = useGetProductReviewCountQuery(slug && _id, {
    skip: callApi,
  });
  // question count
  const {
    data: questionCount,
    isLoading: questionCountLoading,
    error: questionCountError,
  } = useGetProductQuestionCountQuery(slug && _id, {
    skip: callApi,
  });
  // review api
  const {
    data: reviewData,
    isLoading: reviewLoading,
    error: reviewError,
  } = useGetProductReviewQuery(
    { page: reviewPage, limit, productId: slug && _id },
    {
      skip: true,
    }
  );
  // question api
  const {
    data: questionData,
    isLoading: questionLoading,
    error: questionError,
  } = useGetProductQuestionQuery(
    { page: questionPage, limit, productId: slug && _id },
    {
      skip: callApi,
    }
  );
  // product details api
  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
  } = useGetSingleProductQuery(slug && _id, {
    skip: callApi,
  });
  // category details api
  const {
    data: categoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetSingleCategoryDescQuery(subCategoryId && subCategoryId, {
    skip: callApi,
  });
  // product ratings api
  const {
    data: ratingData,
    isLoading: ratingLoading,
    error: ratingError,
  } = useGetProductRatingQuery(_id && _id, {
    skip: callApi,
  });
  console.log(ratingData);

  // oroduct details api
  const {
    description,
    productName,
    productPictures,
    regularPrice,
    discount,
    _id: productId,
    regularPrice: price,
  } = productData?.result || {};
  // add to cart api
  const [
    addToCart,
    { data: cartPostData, error: cartPostError, isLoading: cartPostLoading },
  ] = useAddCartMutation();

  const slideRef = useRef(null);
  useEffect(() => {
    if (slug && subCategoryId) {
      setCallApi(false);
    }
  }, [slug, subCategoryId]);

  const total = 15;

  useEffect(() => {
    dispatch(
      addCartProductPage({
        productName,
        categoryName: productData?.result?.category?.name,
        categoryId: productData?.result?.category?._id,
        quantity: 1,
        productId: productId,
        price,
      })
    );
  }, [dispatch, productData, productId, productName, price]);

  // increasing cart quantity
  const productQuantityIncrease = () => {
    dispatch(addCartProductPageIncrease(1));
  };
  // decreasing cart quantity
  const productQuantityDecrease = () => {
    dispatch(addCartProductPageDecrease(1));
  };

  const addToCartDb = () => {
    if (auth?.user) {
      addToCart(cartProductPage);
      setHidden(cartProductPage);
    } else {
      router.push({
        pathname: "/login",
        query: { from: router.asPath },
      });
    }
  };
  console.log(slideRef);
  return (
    <div className="">
      {/* ksdlj */}

      <NavicationWithSideNavLayout>
        <p className="hidden md:block mb-[16px]">
          <Link href="/">Home</Link> /
          <span className="cursor-pointer" onClick={() => router.back()}>
            KachaBazar
          </span>{" "}
          /
          <span className="text-[#287DF3] ml-[4px]" href="#">
            {productName}
          </span>
        </p>
        <div className="flex flex-col lg:flex-row gap-[14px] ">
          <div className="flex flex-col md:flex-row ">
            <div className="hidden md:w-[96px] h-auto md:h-[560px] border md:flex flex-col p-[8px] bg-[#F2F3F7] gap-[8px] rounded-md">
              <div className="">
                <Slider {...imageSettings} className=" " ref={slideRef}>
                  {productPictures?.map((n, index) => (
                    <div key={index} className="">
                      <Image
                        onMouseOver={(e) => setImg(e.currentTarget.src)}
                        className="border rounded-md cursor-pointer"
                        src={n?.img}
                        width="80"
                        height="80"
                        alt="tomato_img"
                      ></Image>
                    </div>
                  ))}
                </Slider>
              </div>
              <div
                onClick={() => slideRef.current.slickNext()}
                className="w-[78px] h-[24px] bg-white flex justify-center items-center cursor-pointer "
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

            <div className="md:mx-10 px-4 lg:px-0">
              <div className="relative ">
                <label className="flex">
                  <Image
                    className="shadow-lg product-img rounded-md mb-[20px] w-full md:h-[500px]  md:flex object-contain "
                    src={img ? img : productPictures?.[0]?.img}
                    width="500"
                    height="500"
                    alt="tomato_img"
                  ></Image>
                  {/* love  */}
                  <div className="sellerloveButton absolute  right-[24px] top-[11px] mt-[10px] w-[48px] h-[48px] flex items-center justify-center rounded-full">
                    <FaHeart className=" text-[#F2F2F2]  w-[26px] h-[24px] hover:fill-[#FB641B]  "></FaHeart>
                  </div>
                </label>
                <div className="flex w-full md:hidden gap-5 justify-center mb-[31px] absolute bottom-0 ">
                  <div className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer rounded-xl ">
                    <HiMinusSm className="w-full" />
                  </div>
                  <p className="text-lg text-black font-bold">1</p>
                  <div className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer rounded-xl">
                    <BsPlusLg className="w-full" />
                  </div>
                </div>
                <div className="block md:hidden absolute top-0 left-0 bg-blend-overlay w-full h-full bg-[#000000] opacity-[0.3]"></div>
              </div>

              <div className="flex items-center md:hidden overflow-hidden mb-10 ">
                <div>
                  <BiChevronLeft className="text-2xl" />
                </div>
                {
                  <div className="h-[100px] w-full relative">
                    <Slider {...imgSettings} className=" " ref={slideRef}>
                      {productPictures?.map((n, index) => (
                        <div
                          key={index}
                          className="'w-[40px] h-[56px] relative"
                        >
                          <Image
                            onMouseOver={(e) => setImg(e?.currentTarget?.src)}
                            className="border rounded-md cursor-pointer "
                            src={n?.img}
                            width="80"
                            height="80"
                            alt="tomato_img"
                          ></Image>
                        </div>
                      ))}
                    </Slider>
                  </div>
                }
                <div className="bg-green-500">
                  <BiChevronRight className="text-2xl" />
                </div>
              </div>

              <div className="flex gap-[8px] md:gap-7 justify-between ">
                <label
                  htmlFor="my-modal-4"
                  onClick={addToCartDb}
                  className="w-full flex justify-center items-center gap-3 md:btn-md md:w-[240px] h-[53px] bg-[#FF9F00] font-semibold text-white rounded-md cursor-pointer"
                >
                  Add to Cart <FaShoppingCart className="text-white text-lg " />
                </label>

                <button className="w-full flex justify-center items-center gap-3  md:btn-md md:w-[210px] h-[53px] bg-[#FB641B] font-semibold text-white rounded-md">
                  Buy Now <BsFillBagCheckFill className="text-white text-lg " />
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0 pl-4">
            <div className="">
              <h3 className="sm:text-sm md:text-lg lg:text-3xl font-bold text-[#001E00] mt-[8px]">
                {productName}
              </h3>
              <div className="flex md:gap-5 gap-3 mt-[18px]">
                <div className="flex items-center">
                  <BsFillStarFill className="text-[#FB641B]" />
                  <BsFillStarFill className="text-[#FB641B]" />
                  <BsFillStarFill className="text-[#FB641B]" />
                  <BsFillStarFill className="text-[#FB641B]" />
                  <BsStar />
                </div>
                <p className="text-[#FB641B] text-[14px] md:text-[16px]">4.0</p>
                <p className="text-[#686868] text-[14px] md:text-[16px]">
                  24 ratings & reviews
                </p>
              </div>
              <div className="flex md:gap-5 gap-2 items-center mt-[18px] ">
                <p className="">
                  Seller:{" "}
                  <Link href="#" className="text-[#287DF3] ">
                    Profile
                  </Link>
                </p>
                <div className="">
                  {" "}
                  <p className="flex items-center gap-2 relative text-[#686868] font-[500]">
                    Seller:
                    <span className="rounded-full justify-center items-center border-4 border-[#026C51] flex w-[34px] h-[34px] text-[16px] font-bold absolute top-[-1px] left-12 z-30 bg-slate-50">
                      <Image
                        className="rounded-full"
                        src={logo}
                        width={30}
                        alt="img"
                      />
                    </span>{" "}
                    <span className="bg-[#026C51] px-3 rounded-md py-1 text-white font-bold ml-2 ">
                      Assured
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center my-2 mb-7">
                <span className="text-[#FB641B] font-bold text-[20px]">
                  Tk{" "}
                  {discount
                    ? (regularPrice - (regularPrice * discount) / 100).toFixed(
                        0
                      )
                    : regularPrice}
                </span>
                {discount && (
                  <>
                    <span className="text-[#707070] text-[12px] line-through font-[500]">
                      TK {regularPrice}
                    </span>
                    <span className="text-[#707070] text-[12px] ">
                      ({discount}% off)
                    </span>
                  </>
                )}
              </div>
              <div className="hidden md:flex gap-5 ">
                <div className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer">
                  <HiMinusSm
                    onClick={productQuantityDecrease}
                    className="w-full"
                  />
                </div>
                <p className="text-lg text-[#FB641B] font-bold">
                  {cartProductPage?.quantity}
                </p>
                <div className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer">
                  <BsPlusLg
                    onClick={productQuantityIncrease}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-9 md:flex gap-[24px]">
                <div className="flex text-[14px] text-[#686868] items-center md:mb-0 mb-2">
                  <Image width={28} height={28} src={img8} alt="" />
                  <p className="whitespace-nowrap text-[13px] mr-[24px] ml-[12px]">
                    24 Hours To 72 Hours Delivery Time
                  </p>
                </div>
                <div className="flex  text-[14px] text-[#686868] items-center">
                  <Image width={28} height={28} src={img7} alt="" />
                  <p className="whitespace-nowrap text-[13px]">
                    Cash on Delivery Available
                  </p>
                </div>
              </div>
              {/* for coupone */}
              <div className="relative mt-[24px]">
                <>
                  <span className="mr-[12px] ">Coupon:</span>
                  <button
                    className="bg-[#FB641B] rounded-[4px]  text-white px-[12px] py-[6px] "
                    onClick={handleButtonClick}
                  >
                    Collect Coupon
                    <Image
                      className="inline ml-[8px]"
                      width={9}
                      height={16}
                      src="/bottomarrow.png"
                      alt=""
                    />
                  </button>
                  {showDiv && (
                    <div className="bg-white shadow-small p-[16px] max-w-[476px] h-[448px]">
                      <div className="grid grid-cols-2 ">
                        <button
                          onClick={() => setActive("StoreCoupon")}
                          className={
                            isActive === "StoreCoupon"
                              ? "text-[#FB641B]  text-[16px] h-[48px] border-b-[2px] border-b-[#FB641B] "
                              : "  text-[16px]"
                          }
                        >
                          <p className="">Store Coupon</p>
                        </button>
                        <button
                          onClick={() => setActive("GiftCard")}
                          className={
                            isActive === "GiftCard"
                              ? "text-[#FB641B] border-b-[2px] border-[#FB641B] text-[16px] h-[48px] "
                              : "  text-[16px]"
                          }
                        >
                          <p className="">Gift Card</p>
                        </button>
                      </div>
                      {isActive === "StoreCoupon" && (
                        <div>
                          {coupons.map((coupon) => {
                            if (coupon.ShopName === "FamilyBazar") {
                              return <CouponCard coupon={coupon}></CouponCard>;
                            }
                          })}
                          <div className="flex justify-center items-end h-[120px]">
                            <Link
                              className="text-[#287DF3]  justify-between"
                              href="#"
                            >
                              See All Store Coupon
                            </Link>
                          </div>
                        </div>
                      )}
                      {isActive === "GiftCard" && (
                        <div>
                          {giftCards.slice(0, 2).map((giftCard) => (
                            <>
                              <div className="couponBoxInside w-full h-[104px] my-[16px] ">
                                <div className="grid grid-cols-5 xl:grid-cols-3 items-center mx-[12px] py-[12px]">
                                  <Image
                                    className="xl:col-span-1 col-span-1 mr-[12px]"
                                    src={giftCard.image}
                                    alt=""
                                    width={110}
                                    height={80}
                                  ></Image>
                                  <div className="xl:col-span-1 col-span-3  xl:ml-[0px] ml-[10px]">
                                    <h1 className="text-[#001E00] text-[16px] font-[500] whitespace-nowrap  mb-[5px]">
                                      {giftCard.Discount}
                                    </h1>
                                    <h2 className="text-[14px] whitespace-nowrap font-[500] mb-[5px] text-[#001E00]">
                                      Payment:{" "}
                                      <span className="text-[14px] ml-[8px] font-[400] text-[#001E00] ">
                                        {giftCard.payment}
                                      </span>{" "}
                                    </h2>
                                    <h2 className="text-[14px] font-[500]  mb-[5px] text-[#001E00]">
                                      End:{" "}
                                      <span className="text-[14px] ml-[8px] font-[400] text-[#001E00]">
                                        {giftCard.End}
                                      </span>{" "}
                                    </h2>
                                  </div>
                                  <div className="col-span-1 flex md:items-center items-end h-full">
                                    <button className="text-[#FB641B] xl:ml-[40px] w-full xl:w-[88px] h-[32px] text-[10px] xl:text-[14px] font-[400] border-[1px] rounded-[4px] border-solid border-[#FB641B] ">
                                      Buy Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                          <div className="flex justify-center items-end h-[120px]">
                            <Link
                              className="text-[#287DF3]  justify-between"
                              href="#"
                            >
                              See All Gift Card
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              </div>
              <div className="mt-9">
                <h2 className="text-2xl font-[500]">Description</h2>
                <p className="sm:mt-[14px] text-[16px] leading-[128%] lg:mt-[23px] mt-3 text-[#686868] ">
                  {description}
                </p>
              </div>
              <div className="mt-9 flex items-center">
                <h2 className="md:text-2xl text-sm font-[500] mr-3">
                  Pay With:
                </h2>
                <div className="flex md:gap-2 gap-1 items-center">
                  <Image src={img1} alt="" />
                  <Image src={img2} alt="" />
                  <Image src={img5} alt="" />
                  <Image src={img6} alt="" />
                  <Image src={img3} alt="" />
                  <Image src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider text-[#686868] text-lg hidden md:block"></div>

        <div className="px-4">
          <div className="hidden md:block">
            <h5 className="text-[24px] font-bold">
              Customer Product Ratings & Reviews
            </h5>

            <div className="grid grid-cols-1 md:flex md:justify-start items-center gap-20">
              <div className="">
                <p className="text-[84px] text-center md:text-left text-[#001E00] font-bold">
                  4.0{" "}
                  <span className="text-[44px] text-[#686868] font-[400] ml-3">
                    (24)
                  </span>
                </p>
                <div className="flex gap-5">
                  <div className="flex items-center text-3xl gap-1">
                    <BsFillStarFill className="text-[#FB641B]" />
                    <BsFillStarFill className="text-[#FB641B]" />
                    <BsFillStarFill className="text-[#FB641B]" />
                    <BsFillStarFill className="text-[#FB641B]" />
                    <BsStar className="text-[#FB641B]" />
                  </div>
                </div>
              </div>
              <div className="">
                {ratingData?.message?.map((d, i) => {
                  let color;
                  if (d?._id >= 3 && d?._id <= 5) {
                    color = "primary";
                  } else if (d?._id == 2) color = "warning";
                  else if (d?._id == 1) color = "error";
                  return (
                    <div
                      key={i}
                      className="flex gap-2 justify-center items-center"
                    >
                      <div className="flex items-center gap-1">
                        {[...Array(Number(d._id))].map((star, index) => {
                          return (
                            <>
                              <BsFillStarFill
                                key={index}
                                className="text-[#FB641B]"
                              />
                            </>
                          );
                        })}
                        {[...Array(5 - Number(d._id))].map((star, index) => (
                          <BsFillStarFill
                            key={index}
                            className="text-[#F2F3F7]"
                          />
                        ))}
                      </div>
                      <div className="">
                        <progress
                          className={`progress progress-${color} bg-green-500 w-56`}
                          value={total / d._id}
                          max="100"
                        ></progress>
                        <span>({d._id})</span>
                        <p>hiiii</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {reviewData?.result.length > 0 && (
            <>
              <div className="divider text-[#686868] text-lg"></div>

              <div className="">
                <h5 className="text-[24px]">Ratings & Reviews</h5>
                {reviewData?.result?.map((rev) => (
                  <ProductReview rev={rev} key={rev?._id} />
                ))}
                <div className="flex justify-end items-end mb-5">
                  <div className="w-full flex items-end justify-end ">
                    <Paginate
                      action={increaseReviewPage}
                      page={reviewPage}
                      count={reviewCount?.total}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="divider text-[#686868] text-lg"></div>
          <div className="">
            <h5 className="md:text-[24px] text-[20px] font-semibold">
              Asks & Question About This Product
            </h5>
            <div className="mt-1">
              <textarea
                className="textarea textarea-bordered w-full h-[212px]"
                placeholder="Type your message"
              ></textarea>
              <div className="flex justify-end">
                <button className=" btn bg-[#FB641B] w-[160px] text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
          {questionData?.result.length > 0 && (
            <>
              <div className="mt-5">
                {questionData?.result?.map((question, i) => (
                  <QuestionCard key={i} que={question} />
                ))}

                <div className="flex justify-end items-end mb-5">
                  <div className="w-full flex items-end justify-end ">
                    <Paginate
                      action={increaseQuestionPage}
                      page={questionPage}
                      count={questionCount?.total}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[28px] mt-10  md:ml-0 lg:ml-0 justify-items-center">
            {categoryData?.result.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>

          {hidden && (
            <AddToCartPage
              setHidden={setHidden}
              hidden={hidden}
              categoryData={categoryData}
              quantityItems={cartProductPage?.quantity}
            />
          )}
        </div>
      </NavicationWithSideNavLayout>
    </div>
  );
};

export default ProductPage;
