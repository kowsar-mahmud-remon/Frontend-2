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
import { useEffect, useState } from "react";
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


const ProductPage = () => {

    const [img, setImg] = useState(null)
    const router = useRouter()
    const { slug, subCategoryId } = router.query;
    console.log(slug)
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
    console.log(ratingData)

    useEffect(() => {
        if (slug && subCategoryId) {
            setCallApi(false);
        }
    }, [slug, subCategoryId]);

    return (
        <div>
            {/* <NavicationLayout> */}
            <NavicationWithSideNavLayout>
                {/* <Header /> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                    <div className="flex ">
                        <div className="md:w-[96px] h-auto md:h-[560px] border flex flex-col p-[8px] bg-[#F2F3F7] gap-[8px] rounded-md">
                            <div className="">
                                <Image onMouseOver={e => setImg(e.currentTarget.src)} className="border rounded-md cursor-pointer" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image onMouseOver={e => setImg(e.currentTarget.src)} className="border rounded-md cursor-pointer" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image onMouseOver={e => setImg(e.currentTarget.src)} className="border rounded-md cursor-pointer" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image onMouseOver={e => setImg(e.currentTarget.src)} className="border rounded-md cursor-pointer" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image onMouseOver={e => setImg(e.currentTarget.src)} className="border rounded-md cursor-pointer" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="">
                                <Image onMouseOver={e => setImg(e.currentTarget.src)} className="border rounded-md cursor-pointer" src={fruit} width="80" height="80" alt="tomato_img"></Image>
                            </div>
                            <div className="w-[78px] h-[24px] bg-white flex justify-center items-center">
                                <Image className="" src={vector} width="" height="" alt="vector"></Image>
                            </div>
                        </div>
                        <div className="ml-[24px]">
                            <Image className="shadow-lg rounded-md mb-[20px]" src={img ? img : fruit} width="500" height="500" alt="tomato_img"></Image>
                            <div className="flex md:justify-between ">
                                <button className="btn btn-sm md:btn-md md:w-[240px] h-[53px] bg-[#FF9F00] font-semibold text-white ">Add to Cart <FaShoppingCart className="text-white text-lg mb-1" /></button>
                                <button className="btn btn-sm md:btn-md md:w-[240px] h-[53px] bg-[#FB641B] font-semibold text-white ">Buy Now <BsFillBagCheckFill className="text-white text-lg mb-2" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <p className="">
                                <Link href="#">Home</Link> /
                                <Link href="#">KachaBazar</Link> /
                                <Link className="text-[#287DF3]" href="#">Tomato (local) 500gm</Link>
                            </p>
                            <h3 className="sm:text-sm md:text-lg lg:text-3xl font-bold text-[#686868] mt-[8px]">Tomato (Local) 500 ±30 gm</h3>
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
                            <div className="flex gap-5 items-center my-2">
                                <h5 className="text-[24px] text-[#FB641B] font-bold">Tk. 60</h5>
                                <p className=""><del>Tk. 80</del></p>
                                <p className="">(20% off)</p>
                            </div>
                            <div className="flex gap-5">
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
                            <p className="sm:mt-[14px] text-[16px] leading-[128%] lg:mt-[23px] text-[#686868]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using <q>Content here, content here</q>, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                        </div>
                    </div>
                </div>
                <div className="divider text-[#686868] text-lg"></div>
                <div className="">
                    <h5 className="text-[24px] font-bold">Customer Product Ratings & Reviews</h5>
                    <div className="grid grid-cols-1 md:flex md:justify-between">
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
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                </div>
                                {/* <progress style={{background:'#026C51'}} className="progress progress-[#026C51] w-56 bg-[#026C51]" value="100" max="100"></progress> */}
                                <ProgressBar
                                    className="w-full span h-[10px]"
                                    completed={'70'}
                                    customLabel=""
                                    barContainerClassName="w-full bg-gray-200 container"
                                    completedClassName={'bg-[#026C51] w-[70%]'}
                                // labelClassName="label"
                                />
                                <span>(11)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-success w-56" value="100" max="100"></progress>
                                <span>(04)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-warning w-56" value="100" max="100"></progress>
                                <span>(05)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-warning w-56" value="50" max="100"></progress>
                                <span>(03)</span>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                                <div className="flex items-center gap-1">
                                    <BsFillStarFill className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                    <BsStar className="text-[#FB641B]" />
                                </div>
                                <progress className="progress progress-error w-56 " value="100" max="100"></progress>
                                <span>(01)</span>
                            </div>
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[28px] mt-10 ml-16 md:ml-0 lg:ml-0">
                    {
                        categoryData?.result.map((product, i) => <ProductCard
                            key={i}
                            product={product}
                        />)
                    }
                </div>



                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[28px] mt-10 ml-16 md:ml-0 lg:ml-0">
                    <div className="w-[222px] hover:border hover:rounded-lg">
                        <Image src={fruit} width="220" height="154" alt="tomato"></Image>
                        <div className="flex gap-5 items-center my-2">
                            <h5 className="text-[24px] text-[#FB641B]">Tk. 60</h5>
                            <p className=""><del>Tk. 80</del></p>
                            <p className="">(20% off)</p>
                        </div>
                        <p className="text-[16px] font-semibold">Tomato (Local) 500 ±30 gm</p>
                        <div className="flex">
                            <div className="flex items-center bg-[#F4253F] text-white px-1 rounded-md">
                                1.9 <BsFillStarFill className="ml-2 text-white" />
                            </div>
                            <p className="text-[#686868]">24 Ratings & 5 Reviews</p>
                        </div>
                        <button className="btn capitalize bg-[#FB641B] text-white mt-[44px]">Add To Cart <FaShoppingCart className="text-lg" /></button>
                    </div>
                    <div className="w-[222px] hover:border hover:rounded-lg">
                        <Image src={mistiKumra} width="220" height="154" alt="tomato"></Image>
                        <div className="flex gap-5 items-center my-2">
                            <h5 className="text-[24px] text-[#FB641B]">Tk. 60</h5>
                            <p className=""><del>Tk. 80</del></p>
                            <p className="">(20% off)</p>
                        </div>
                        <p className="text-[16px] font-semibold">Tomato (Local) 500 ±30 gm</p>
                        <div className="flex">
                            <div className="flex items-center bg-[#F4253F] text-white px-1 rounded-md">
                                1.9 <BsFillStarFill className="ml-2 text-white" />
                            </div>
                            <p className="text-[#686868]">24 Ratings & 5 Reviews</p>
                        </div>
                        <p className="">Seller: <span className="bg-[#287DF3] text-white px-1 rounded-md">Verified</span></p>
                        <button className="btn capitalize bg-[#FB641B] text-white mt-[86px] ">Add To Cart <FaShoppingCart className="text-lg" /></button>
                    </div>
                    <div className="w-[222px] hover:border hover:rounded-lg">
                        <Image src={potol} width="220" height="154" alt="tomato"></Image>
                        <div className="flex gap-5 items-center my-2">
                            <h5 className="text-[24px] text-[#FB641B]">Tk. 60</h5>
                            <p className=""><del>Tk. 80</del></p>
                            <p className="">(20% off)</p>
                        </div>
                        <p className="text-[16px] font-semibold">Tomato (Local) 500 ±30 gm</p>
                        <div className="flex">
                            <div className="flex items-center bg-[#F4253F] text-white px-1 rounded-md">
                                1.9 <BsFillStarFill className="ml-2 text-white" />
                            </div>
                            <p className="text-[#686868]">24 Ratings & 5 Reviews</p>
                        </div>
                        <p className="">Seller: <span className="bg-[#287DF3] text-white px-1 rounded-md">Assured</span></p>
                        <button className="btn capitalize bg-[#FB641B] text-white mt-[86px]">Add To Cart <FaShoppingCart className="text-lg" /></button>
                    </div>
                    <div className="w-[222px] hover:border hover:rounded-lg">
                        <Image src={dheros} width="220" height="154" alt="tomato"></Image>
                        <div className="flex gap-5 items-center my-2">
                            <h5 className="text-[24px] text-[#FB641B]">Tk. 60</h5>
                            <p className=""><del>Tk. 80</del></p>
                            <p className="">(20% off)</p>
                        </div>
                        <p className="text-[16px] font-semibold">Tomato (Local) 500 ±30 gm</p>
                        <div className="flex">
                            <div className="flex items-center bg-[#F4253F] text-white px-1 rounded-md">
                                1.9 <BsFillStarFill className="ml-2 text-white" />
                            </div>
                            <p className="text-[#686868]">24 Ratings & 5 Reviews</p>
                        </div>
                        <p className="">Seller: <span className="bg-[#287DF3] text-white px-1 rounded-md">Verified</span></p>
                        <button className="btn capitalize bg-[#FB641B] text-white mt-[86px]">Add To Cart <FaShoppingCart className="text-lg" /></button>
                    </div>
                    <div className="w-[222px] hover:border hover:rounded-lg">
                        <Image src={kachakola} width="220" height="154" alt="tomato"></Image>
                        <div className="flex gap-5 items-center my-2">
                            <h5 className="text-[24px] text-[#FB641B]">Tk. 60</h5>
                            <p className=""><del>Tk. 80</del></p>
                            <p className="">(20% off)</p>
                        </div>
                        <p className="text-[16px] font-semibold">Tomato (Local) 500 ±30 gm</p>
                        <div className="flex">
                            <div className="flex items-center bg-[#F4253F] text-white px-1 rounded-md">
                                1.9 <BsFillStarFill className="ml-2 text-white" />
                            </div>
                            <p className="text-[#686868]">24 Ratings & 5 Reviews</p>
                        </div>
                        <p className="">Seller: <span className="bg-[#287DF3] text-white px-1 rounded-md">Verified</span></p>

                        <button className="btn capitalize bg-[#FB641B] text-white mt-[86px]">Add To Cart <FaShoppingCart className="text-lg" /></button>
                    </div>
                </div> */}

            </NavicationWithSideNavLayout>
            <Footer />
        </div>
    );
};

export default ProductPage;