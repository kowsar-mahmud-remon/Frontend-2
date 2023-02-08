
import NavicationWithSideNavLayout from "../../layouts/NavicationWithSideNavLayout";
import Image from 'next/image'
import fruit from '../../assets/images/product_page/image 6.png'
import vector from '../../assets/images/product_page/Vector.png'
import adminImg from '../../assets/images/product_page/b.png'
import reviewer from '../../assets/images/product_page/Ellipse 38.png'
import mistiKumra from '../../assets/images/product_page/image 7.png'
import potol from '../../assets/images/product_page/image 8.png'
import dheros from '../../assets/images/product_page/image 9.png'
import kachakola from '../../assets/images/product_page/image 10.png'
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillBagCheckFill, BsFillStarFill, BsStar, BsPlusLg } from 'react-icons/bs';
import { HiMinusSm } from 'react-icons/hi';
import Link from "next/link";
import Footer from "../../components/ProductPage/Footer";
import Header from "../../components/ProductPage/Header";
import { useEffect, useRef, useState } from "react";
import logo from '../../assets/CategoryImages/ProductsImg/logo.jpg'
import ProgressBar from "@ramonak/react-progress-bar";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { useGetProductQuestionCountQuery, useGetProductQuestionQuery, useGetProductRatingQuery, useGetProductReviewCountQuery, useGetProductReviewQuery } from "../../features/review&question/reviewQuestionApi";
// import styles from './productpage.module.css'
import { useSelector } from "react-redux";
import Paginate from "../../components/paginate/Paginate";
import { increaseQuestionPage, increaseReviewPage } from "../../features/paginate/paginate.slice";
import ProductReview from "../../components/ProductDesc/ProductReview";
import QuestionCard from "../../components/ProductDesc/QuestionCard";
import { useGetSingleCategoryDescQuery, useGetSingleProductQuery } from "../../features/category/categoryApi";
import ProductCard from "../../components/allCategory/ProductCard";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imageSettings, imgSettingsMobile } from "../../Utils/sliderConfig";
import { useAddCartMutation } from "../../features/cart/cartApi";

const ProductPage = () => {

    const [img, setImg] = useState(null)
    const router = useRouter()
    const { slug, subCategoryId } = router.query;
    const _id = slug?.[1];
    const [callApi, setCallApi] = useState(true);

    const { paginate: { reviewPage, questionPage, limit } } = useSelector(state => state)
    // review count 
    const { data: reviewCount, isLoading: reviewCountLoading, error: reviewCountError } = useGetProductReviewCountQuery(
        slug && _id,
        {
            skip: callApi
        }
    )
    // question count 
    const { data: questionCount, isLoading: questionCountLoading, error: questionCountError } = useGetProductQuestionCountQuery(slug && _id,
        {
            skip: callApi
        })
    // review api 
    const { data: reviewData, isLoading: reviewLoading, error: reviewError } = useGetProductReviewQuery({ page: reviewPage, limit, productId: slug && _id, },
        {
            skip: true
        }
    )
    // question api 
    const { data: questionData, isLoading: questionLoading, error: questionError } = useGetProductQuestionQuery({ page: questionPage, limit, productId: slug && _id, },
        {
            skip: callApi
        }
    )
    // product details api 
    const { data: productData, isLoading: productLoading, error: productError } = useGetSingleProductQuery(
        slug && _id,
        {
            skip: callApi
        }
    )
    // category details api 
    const { data: categoryData, isLoading: categoryLoading, error: categoryError } = useGetSingleCategoryDescQuery(
        subCategoryId && subCategoryId,
        {
            skip: callApi
        }
    )
    // product ratings api 
    const { data: ratingData, isLoading: ratingLoading, error: ratingError } = useGetProductRatingQuery(
        _id && _id,
        {
            skip: callApi
        }
    )

  
    // add to cart 
    const { data: cartData, isLoading: cartLoading, error: cartError } = useAddCartMutation(
        _id && _id,
        {
            skip: callApi
        }
    )
    
    const { description, productName, productPictures, regularPrice, discount } = productData?.result || {}
    const slideRef = useRef(null)

    useEffect(() => {
        if (slug && subCategoryId) {
            setCallApi(false);
        }
    }, [slug, subCategoryId]);

    const total = 15



    
    return (
        <div>

            <NavicationWithSideNavLayout>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                    <div className="flex flex-col md:flex-row">
                        <div className="hidden md:w-[96px] h-auto md:h-[560px] border md:flex flex-col p-[8px] bg-[#F2F3F7] gap-[8px] rounded-md ">
                            <div className=''>
                                <Slider {...imageSettings}
                                    className=' '
                                    ref={slideRef}
                                >
                                    {
                                        productPictures?.map((n, index) => <div
                                            key={index}
                                            className="">
                                            <Image
                                                onMouseOver={e => setImg(e.currentTarget.src)}
                                                className="border rounded-md cursor-pointer"
                                                src={n?.img} width="80" height="80" alt="tomato_img"></Image>
                                        </div>)
                                    }
                                </Slider>

                            </div>
                            <div
                                onClick={() => slideRef.current.slickNext()}
                                className="w-[78px] h-[24px] bg-white flex justify-center items-center cursor-pointer"
                            >
                                <Image className="" src={vector} width="" height="" alt="vector"></Image>
                            </div>

                        </div>

                        <div className="block md:hidden overflow-hidden mb-10">
                            {
                                <div className=' items-center'>
                                    <Slider {...imgSettingsMobile}
                                        className=' '
                                        ref={slideRef}
                                    >
                                        {
                                            productPictures?.map((n, index) => <div
                                                key={index}
                                                className=" flex justify-center">
                                                <Image
                                                    onMouseOver={e => setImg(e.currentTarget.src)}
                                                    className="border rounded-md cursor-pointer"
                                                    src={n?.img} width="590" height="296" alt="tomato_img"></Image>
                                            </div>)
                                        }
                                    </Slider>

                                </div>
                            }
                        </div>
                        <div className="ml-0 md:ml-[24px] ">
                            <Image className="shadow-lg rounded-md mb-[20px] hidden md:flex" src={img ? img : productPictures?.[0]?.img} width="500" height="500" alt="tomato_img"></Image>


                            <div className="flex md:hidden gap-5 justify-center mb-[31px]" >
                                <div
                                    className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer"
                                ><HiMinusSm
                                        className="w-full"
                                    /></div>
                                <p className="text-lg text-[#FB641B] font-bold">1</p>
                                <div
                                    className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer"
                                ><BsPlusLg
                                        className="w-full"
                                    /></div>
                            </div>
                            <div className="flex gap-7 md:justify-between ">
                                <button
                                    className="w-full flex justify-center items-center gap-3 md:btn-md md:w-[240px] h-[53px] bg-[#FF9F00] font-semibold text-white rounded-md"
                                >Add to Cart <FaShoppingCart className="text-white text-lg mb-1" /></button>
                                <button
                                    className="w-full flex justify-center items-center gap-3 btn-sm md:btn-md md:w-[240px] h-[53px] bg-[#FB641B] font-semibold text-white rounded-md">Buy Now <BsFillBagCheckFill className="text-white text-lg mb-2" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <p className="hidden md:block">
                                <Link href="/">Home</Link> /
                                <span className="cursor-pointer" onClick={() => router.back()}>KachaBazar</span> /
                                <span className="text-[#287DF3]" href="#">Tomato (local) 500gm</span>
                            </p>
                            <h3 className="sm:text-sm md:text-lg lg:text-3xl font-bold text-[#686868] mt-[8px]">{productName}</h3>
                            <div className="flex gap-5 mt-[18px]">
                                <div className="flex items-center">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar />
                                </div>
                                <p className="text-[#FB641B]">4.0</p>
                                <p className="text-[#686868]">24 ratings & reviews</p>
                            </div>
                            <div className="flex gap-5 items-center mt-[18px]">
                                <p className="">Seller: <Link href="#" className="text-[#287DF3]">Profile</Link></p>
                                <div className=""> <p className='flex items-center gap-2 relative text-[#686868] font-[500]'>Seller:
                                    <span className='rounded-full justify-center items-center border-4 border-[#026C51] flex w-[34px] h-[34px] text-[16px] font-bold absolute top-[-1px] left-12 z-30 bg-slate-50'>
                                        <Image className='rounded-full' src={logo} width={30} alt='img' />
                                    </span> <span className='bg-[#026C51] px-3 rounded-md py-1 text-white font-bold ml-2 '>Assured</span></p></div>
                            </div>
                            <div className="flex gap-5 items-center my-2 mb-7">
                                <span className='text-[#FB641B] font-bold text-[20px]'>
                                    Tk  {discount ? (regularPrice - (regularPrice * discount) / 100).toFixed(0) : regularPrice}
                                </span>
                                {
                                    discount && (<>
                                        <span className='text-[#707070] text-[12px] line-through font-[500]'>TK {regularPrice}</span>
                                        <span className='text-[#707070] text-[12px] '>({discount}% off)</span>
                                    </>)
                                }
                            </div>
                            <div className="hidden md:flex gap-5 " >
                                <div
                                    className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer"
                                ><HiMinusSm
                                        className="w-full"
                                    /></div>
                                <p className="text-lg text-[#FB641B] font-bold">1</p>
                                <div
                                    className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer"
                                ><BsPlusLg
                                        className="w-full"
                                    /></div>
                            </div>
                            <p className="sm:mt-[14px] text-[16px] leading-[128%] lg:mt-[23px] text-[#686868]">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="divider text-[#686868] text-lg hidden md:block"></div>
                <div className="hidden md:block">
                    <h5 className="text-[24px] font-bold">Customer Product Ratings & Reviews</h5>
                    <div className="grid grid-cols-1 md:flex md:justify-start items-center gap-20">
                        <div className="">
                            <p className="text-[84px] text-center md:text-left text-[#001E00] font-bold">4.0 <span className="text-[44px] text-[#686868] font-[400] ml-3">(24)</span></p>
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

                            {
                                ratingData?.message?.map((d, i) => {
                                    let color
                                    if (d?._id >= 3 && d?._id <= 5) {
                                        color = 'primary'
                                    } else if (d?._id == 2) color = 'warning'
                                    else if (d?._id == 1) color = 'error'
                                    return <div
                                        key={i}
                                        className="flex gap-2 justify-center items-center">
                                        <div className="flex items-center gap-1">
                                            {
                                                [...Array(Number(d._id))].map((star, index) => {
                                                    return <>
                                                        <BsFillStarFill
                                                            key={index}
                                                            className='text-[#FB641B]'
                                                        />

                                                    </>

                                                })



                                            }
                                            {
                                                [...Array(5 - Number(d._id))].map((star, index) => <BsFillStarFill
                                                    key={index}
                                                    className="text-[#F2F3F7]" />)
                                            }
                                        </div>
                                        <progress className={`progress progress-${color} bg-green-500 w-56`} value={total / d._id} max="100"></progress>
                                        <span>({d._id})</span>
                                    </div>
                                }

                                )
                            }

                        </div>
                    </div>
                </div>
                {
                    reviewData?.result.length > 0 && <>
                        <div className="divider text-[#686868] text-lg"></div>

                        <div className="">
                            <h5 className="text-[24px]">Ratings & Reviews</h5>
                            {
                                reviewData?.result?.map((rev) => <ProductReview
                                    rev={rev}
                                    key={rev?._id}
                                />)
                            }
                            <div className='flex justify-end items-end mb-5'>
                                <div className='w-full flex items-end justify-end '>
                                    <Paginate
                                        action={increaseReviewPage}
                                        page={reviewPage}
                                        count={reviewCount?.total}
                                    />
                                </div>
                            </div>


                        </div>
                    </>
                }
                <div className="divider text-[#686868] text-lg"></div>
                <div className="">
                    <h5 className="text-[24px] font-semibold">Asks & Question About This Product</h5>
                    <div className="mt-1">
                        <textarea className="textarea textarea-bordered w-full h-[212px]" placeholder="Type your message"></textarea>
                        <div className="flex justify-end">
                            <button className=" btn bg-[#FB641B] w-[160px] text-white">Submit</button>
                        </div>
                    </div>
                </div>
                {
                    questionData?.result.length > 0 && <>

                        <div className="mt-5">

                            {
                                questionData?.result?.map((question, i) => <QuestionCard
                                    key={i}
                                    que={question}
                                />)
                            }

                            <div className='flex justify-end items-end mb-5'>
                                <div className='w-full flex items-end justify-end '>
                                    <Paginate
                                        action={increaseQuestionPage}
                                        page={questionPage}
                                        count={questionCount?.total}
                                    />
                                </div>
                            </div>

                        </div>
                    </>
                }


                <div
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-[28px] mt-10  md:ml-0 lg:ml-0">
                    {
                        categoryData?.result.map((product, i) => <ProductCard
                            key={i}
                            product={product}
                        />)
                    }
                </div>

            </NavicationWithSideNavLayout>
        
        </div>
    );
};

export default ProductPage;