
import NavicationWithSideNavLayout from "../../layouts/NavicationWithSideNavLayout";
import Image from 'next/image'
import vector from '../../assets/images/product_page/Vector.png'
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillBagCheckFill, BsFillStarFill, BsStar, BsPlusLg } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { HiMinusSm } from 'react-icons/hi';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from '../../assets/CategoryImages/ProductsImg/logo.jpg'
import { useRouter } from "next/router";
import { useGetProductQuestionCountQuery, useGetProductQuestionQuery, useGetProductRatingQuery, useGetProductReviewCountQuery, useGetProductReviewQuery } from "../../features/review&question/reviewQuestionApi";
// import styles from './productpage.module.css'
import { useDispatch, useSelector } from "react-redux";
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
import { imageSettings, imgSettings, imgSettingsMobile } from "../../Utils/sliderConfig";
import { useAddCartMutation } from "../../features/cart/cartApi";
import { addCartProductPage, addCartProductPageDecrease, addCartProductPageIncrease } from "../../features/cart/cartSlice";
import AddToCartPage from "../../components/AddToCartPage/AddToCartPage";

const ProductPage = () => {

    const [img, setImg] = useState(null)
    const router = useRouter()
    const { slug, subCategoryId } = router.query;
    const _id = slug?.[1];
    const [callApi, setCallApi] = useState(true);
    const dispatch = useDispatch()
    const { cart: { cartProductPage }, auth } = useSelector(state => state)
    const { paginate: { reviewPage, questionPage, limit } } = useSelector(state => state)
    const [hidden, setHidden] = useState()
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

    // oroduct details api 
    const { description, productName, productPictures, regularPrice, discount, _id: productId, regularPrice: price } = productData?.result || {}
    // add to cart api 
    const [addToCart, { data: cartPostData, error: cartPostError, isLoading: cartPostLoading }] = useAddCartMutation()

    const slideRef = useRef(null)
    useEffect(() => {
        if (slug && subCategoryId) {
            setCallApi(false);
        }
    }, [slug, subCategoryId]);

    const total = 15

    useEffect(() => {

        dispatch(
            addCartProductPage({
                productName,
                categoryName: productData?.result?.category?.name,
                categoryId: productData?.result?.category?._id,
                quantity: 1,
                productId: productId,
                price
            })
        )
    }, [dispatch, productData, productId, productName, price])

    // increasing cart quantity 
    const productQuantityIncrease = () => {
        dispatch(addCartProductPageIncrease(1))
    }
    // decreasing cart quantity 
    const productQuantityDecrease = () => {
        dispatch(addCartProductPageDecrease(1))
    }

    const addToCartDb = () => {
        if (auth?.user) {

            addToCart(cartProductPage)
            setHidden(cartProductPage)

        } else {
            router.push({
                pathname: '/login',
                query: { from: router.asPath },
            })
        }
    }
    console.log(slideRef)
    return (
        <div className=" mx-4 lg:mx-0">

            <NavicationWithSideNavLayout>

                <div className="flex flex-col lg:flex-row gap-9 ">
                    <div className="flex flex-col md:flex-row ">
                        <div className="hidden md:w-[96px] h-auto md:h-[560px] border md:flex flex-col p-[8px] bg-[#F2F3F7] gap-[8px] rounded-md">
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
                                className="w-[78px] h-[24px] bg-white flex justify-center items-center cursor-pointer "
                            >
                                <Image className="" src={vector} width="" height="" alt="vector"></Image>
                            </div>
                        </div>


                        <div className="ml-0 md:ml-[24px] ">
                            <div className="relative ">

                                <Image
                                    className="shadow-lg product-img rounded-md mb-[20px] w-full h-[500px] hidden md:flex object-contain" src={img ? img : productPictures?.[0]?.img} width="500" height="500" alt="tomato_img"></Image>
                                <div className="flex md:hidden gap-5 justify-center mb-[31px] absolute bottom-0 right-[40%]" >
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
                                <div className="block md:hidden absolute top-0 left-0 bg-blend-overlay w-full h-full bg-[#000000] opacity-[0.3]">

                                </div>
                            </div>

                            <div className="flex items-center md:hidden overflow-hidden mb-10 ">
                                <div>
                                    <BiChevronLeft
                                        className="text-2xl"
                                    />
                                </div>
                                {
                                    <div className='h-[100px] w-full'>
                                        <Slider {...imgSettings}
                                            className=' '
                                            ref={slideRef}
                                        >
                                            {
                                                productPictures?.map((n, index) => <div
                                                    key={index}
                                                    className="'w-[40px] h-[56px] ">
                                                    <Image
                                                        onMouseOver={e => setImg(e?.currentTarget?.src)}
                                                        className="border rounded-md cursor-pointer"
                                                        src={n?.img} width="80" height="80" alt="tomato_img"></Image>
                                                </div>)
                                            }
                                        </Slider>

                                    </div>
                                }
                                <div className="bg-green-500">
                                    <BiChevronRight
                                        className="text-2xl"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-7 justify-between md:justify-between ">
                                <label
                                    htmlFor="my-modal-4"
                                    onClick={addToCartDb}
                                    className="w-full flex justify-center items-center gap-3 md:btn-md md:w-[240px] h-[53px] bg-[#FF9F00] font-semibold text-white rounded-md cursor-pointer"
                                >
                                    Add to Cart <FaShoppingCart className="text-white text-lg mb-1" />
                                </label>

                                <button
                                    className="w-full flex justify-center items-center gap-3 btn-sm md:btn-md md:w-[240px] h-[53px] bg-[#FB641B] font-semibold text-white rounded-md">Buy Now <BsFillBagCheckFill className="text-white text-lg mb-2" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 lg:px-0 pl-4">
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
                                        onClick={productQuantityDecrease}
                                        className="w-full"
                                    /></div>
                                <p className="text-lg text-[#FB641B] font-bold">{cartProductPage?.quantity}</p>
                                <div
                                    className="text-md w-[34px] h-[34px] bg-[#F2F3F7] flex justify-center items-center cursor-pointer"
                                ><BsPlusLg
                                        onClick={productQuantityIncrease}
                                        className="w-full"
                                    /></div>
                            </div>
                            <p className="sm:mt-[14px] text-[16px] leading-[128%] lg:mt-[23px] text-[#686868] ">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="divider text-[#686868] text-lg hidden md:block"></div>


                <div className="px-4">
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


                    {
                        hidden && <AddToCartPage
                            setHidden={setHidden}
                            hidden={hidden}
                            categoryData={categoryData}
                            quantityItems={cartProductPage?.quantity}
                        />
                    }
                </div>

            </NavicationWithSideNavLayout>
        </div>
    );
};

export default ProductPage;