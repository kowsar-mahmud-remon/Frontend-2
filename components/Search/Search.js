import React from 'react';
import { FaStar, FaShoppingCart, FaMenu } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import style from '../../styles/multirange.module.css'

import Image from 'next/image'
import img1 from '../../assets/images/image 4.png'
import v2 from '../../assets/images/Vector (2).png'
// import v3 from '../../assets/images/Vector (3).png'
import cate from '../../assets/images/Group 2399.png'
import sellerVerify from '../../assets/images/sellerProfile/product/verified.png'
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
const Search = () => {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    const [show, setShow] = useState(true)
    const [hide, setHide] = useState('sm:hidden min-[320px]:hidden ')
    const [leftWidth, setLeftWidth] = useState('w-[382px]')
    const [rightWidth, setRightWidth] = useState('w-full')
    const [bghide, setBgHide] = useState('')

    const handleclearAll = () => {
        const filter = document.getElementById('filter')
        filter.innerHTML = ''
    }
    const handleNewSeller = () => {
        const x = document.getElementById('seller');
        const y = document.getElementById('seller').value;
        if (x.checked === true) {
            const filter = document.getElementById('filter')
            const p1 = document.createElement('p')
            p1.classList.add('mr-2')
            p1.innerHTML = y;

            filter.appendChild(p1)
        }
        else if (x.checked === false) {
            const filter = document.getElementById('filter')
            const p1 = document.createElement('p')
            p1.classList.add('mr-2')
            p1.innerHTML = '';

            filter.appendChild(p1)
        }

    }
    const handleverifiedSeller = () => {
        const x = document.getElementById('verifiedSeller').value;
        const filter = document.getElementById('filter')
        const p = document.createElement('p')
        p.innerHTML = x;
        filter.appendChild(p)
    }
    const handleAssuredSeller = () => {
        const x = document.getElementById('AssuredSeller').value;
        const filter = document.getElementById('filter')
        const p = document.createElement('p')
        p.innerHTML = x;
        filter.appendChild(p)
    }


    const searchProducts = [
        {
            id: 1,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 2,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 3,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 4,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 5,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 6,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 7,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 8,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },
        {
            id: 9,
            price: 18,
            originalPrice: 20,
            productOff: '2%off',
            pName: 'Kacha Morich (Green Chili) 250 ±15 gm',
            rating: 4,
            img: img1
        },

    ]
    const vegProducts = [
        'Kacha Bazar (172)',
        'Vegetables  (151)',
        'Daal / Chal (199)',
        'Atta/Maida (1016)',
        'Salt & Sugar (116)',
        'Salt & Sugar (116)',
        'Salt & Sugar (116)',
    ]
    const handleRes = (view) => {
        if (view === 1) {
            setHide('sm:block min-[320px]:block')
            setLeftWidth('sm:w-full ')
            setRightWidth('sm:hidden')
            setBgHide('min-[320px]:')
        }
        else {

        }
    }
    const handleClose = (view) => {
        if (view === 1) {
            setRightWidth('sm:block ')
            setLeftWidth('sm:hidden ')
        }
        else {


        }
    }

    return (
        <div className=" flex lg:px-[94px] sm:px-[24px] min-[320px]:ml-[24px]  mt-2">
            <div className={`sm:bg-red-300 ${bghide}  sm:h-[926px] sm:w-[107px]  lg:hidden md:hidden`}>
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setRightWidth('sm:block ')
                        setLeftWidth('sm:hidden ')
                        setBgHide('min-[320px]:hidden')
                    }}
                >

                </OutsideClickHandler>
            </div>
            <div className={`${leftWidth} mr-[21px] ${hide}  lg:block md:block  shadow shadow-xl`}>
                <div className='flex justify-between px-2'>
                    <div className=' ml-2 mb-[16px] border  border-[#FB641B] py-[11px] px-[23px] rounded-full flex w-[166px]'>
                        <Image className='h-[20px] w-[20px] mt-[3px]'
                            src={cate}
                        />
                        <span className='ml-2 font-semibold text-[18px] text-[#001E00]'>Categories</span>

                    </div>
                    <p className='font-bold lg:hidden md:hidden mt-2 cursor-pointer' onClick={() => handleClose(1)}>X</p>
                </div>


                <div className='px-2'>
                    <ul>
                        <li className='flex justify-between'><p className='font-semibold text-[18px] mb-[16px] text-[#001E00] '>All Collecction</p>
                            <Image className='h-2 mt-2'
                                src={v2}
                            />
                        </li>
                        {
                            show ? vegProducts && vegProducts.map((vproduct, i) => {
                                return (
                                    <li className='mb-[16px] text-[14px]font-medium text-[#001E00]' key={i}>
                                        {vproduct}
                                    </li>
                                )
                            }).slice(0, 5)
                                :
                                vegProducts && show === false && vegProducts.map((vproduct, i) => {
                                    return (
                                        <li className='mb-[16px] text-[14px] font-normal' key={i}>
                                            {vproduct}
                                        </li>
                                    )
                                })


                        }

                        {
                            show ? <li className=' text-[14px] mb-[16px] text-[#287DF3] cursor-pointer' onClick={() => setShow(false)}>{vegProducts.length - 5} more...</li> : <li className='cursor-pointer text-[#287DF3] text-[14px] mb-[16px]' onClick={() => setShow(true)}>show less</li>
                        }


                    </ul>


                </div>
                <hr className='mb-[16px]' />

                {/*---------- filter section----------- */}

                <div className='px-2'>
                    <div className='flex justify-between mb-[16px]'>
                        <p className='font-semibold mb-[16px] text-[#001E00] '>Filters</p>
                        <p className='text-[#287DF3] cursor-pointer' onClick={handleclearAll}>Clear all</p>
                    </div>
                    <div>
                        <div id='filter' className='flex mb-[16px]'>


                        </div>
                    </div>
                </div>
                <hr className='mb-[16px]' />

                <div>
                    <div className='flex justify-between px-2'>
                        <p className='font-semibold mb-[16px] text-[#001E00] '>Prices</p>
                        <Image className='h-2 mt-2'
                            src={v2}
                        />
                    </div>
                    <div className='container mb-[16px] px-4 range'>
                        <form >
                            <input type="range" />
                        </form>
                    </div>
                    <div className='flex justify-between mb-[16px] px-2'>
                        <select className='w-[50px] border border-gray-400 rounded-md'>
                            <option disabled selected>min</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                        <p1 className='mx-2'>To</p1>
                        <select className='w-[70px] border border-gray-400 rounded-md'>
                            <option disabled selected>20000</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                </div>
                <hr className='mb-[16px]' />
                <div>
                    <div className='flex justify-between px-2'>
                        <p className='font-semibold mb-[16px] text-[#001E00]'>Seller</p>
                        <Image className='h-2 mt-2'
                            src={v2}
                        />
                    </div>

                    <div className="mb-[16px]">
                        <form className='px-2'>
                            <div className='border  rounded-md w-28 mb-2 p-[8px] '>
                                <input type="checkbox" id="seller" name="vehicle1" onClick={handleNewSeller} value="New Seller" />
                                <label for="vehicle1 " className='text-[14px] text-[#001E00] font-medium'> New Seller</label><br />
                            </div>
                            <div className='border p-[8px] rounded-md w-32 mb-2'>
                                <input type="checkbox" id="verifiedSeller" name="vehicle2" onClick={handleverifiedSeller} value="Verified Seller" />
                                <label for="vehicle2" className='text-[14px] text-[#001E00]  font-medium'> Verified Seller</label><br />
                            </div>
                            <div className='border p-[8px] rounded-md w-32'>
                                <input type="checkbox" id="AssuredSeller" name="vehicle3" onClick={handleAssuredSeller} value="Assured Seller" />
                                <label for="vehicle3" className='text-[14px] text-[#001E00]  font-medium'> Assured Seller</label><br />
                            </div>
                        </form>
                    </div>
                </div>


                <hr className='mb-[16px]' />

                <div>
                    <div className='flex justify-between px-[16px]'>
                        <p className='font-semibold mb-[16px] text-[#001E00]'>Location</p>
                        <Image className='h-2 mt-2'
                            src={v2}
                        />
                    </div>

                    <div className="mb-[16px] px-[16px]">
                        <form className='grid grid-cols-2'>
                            <div className='border  rounded-md w-[98px] mb-2 flex p-[8px] '>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'> Dhaka</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px] p-[8px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Chittagong</label><br />

                            </div>
                            <div className='border  rounded-md w-[98px] p-[8px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Barishal</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px] p-[8px]  mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Rajshahi</label><br />
                            </div>
                            <div className='border  rounded-md w-[98px] p-[8px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Khulna</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px] p-[8px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='font-semibold text-[#001E00] ml-2 mt-[1px] text-[14px]'>Rangpur</label><br />
                            </div>
                            <div className='border  rounded-md w-[98px] p-[8px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Sylhet</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px]  p-[8px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Mymensingh</label><br />
                            </div>
                        </form>
                    </div>
                </div>





            </div>

            {/*--------------------- right div----------------- */}
            <div className={`${rightWidth} `}>
                <div className={`flex justify-between `}>
                    <p className='text-[16px] mt-[24px]'>Home / <span className='text-[#287DF3]'>Search Results</span></p>

                    <div className='flex'><p className='font-semibold  lg:mt-[34px] sm:mt-6 min-[320px]:mt-6'>Sort By:</p>
                        <select className='text-[12px] w-[110px] text-[#686868] p-[11px] font-semibold border lg:mt-[24px] sm:mt-4  min-[320px]:mt-4 ' name="" id="">
                            <option selected className='p-[11px]' value="">Best Match</option>
                            <option value="">Price High to low</option>
                            <option value="">Price Low to high</option>
                        </select>
                    </div>
                    <p className='font-bold lg:hidden md:hidden mt-[19px] sm:mr-2 min-[320px]:mr-2' onClick={() => handleRes(1)}><FiMenu /></p>
                </div>
                <div className='flex flex-wrap lg:gap-[22px] sm:gap-[16px] min-[320px]:gap-[10px]'>

                    {

                        searchProducts && searchProducts.map(product => {
                            return (
                                <div key={product.id}>

                                    <div className="card sm:w-[180px] min-[320px]:w-[180px] lg:w-[262px] min-[320px]:h-[423px] lg:h-[440px] bg-base-100 shadow-xl">
                                        <Image className="min-[320px]:w-[180px] min-[320px]:h-[126px]" src={product.img} width={180} height={126} alt="Shoes" />

                                        <div className="card-body px-[16px] inline">
                                            <h2 className="card-title text-[#FB641B] font-bold text-[20px] inline-block mr-[4px] mb-[10px] min-[320px]:mt-[-20px]">
                                                Tk {product.price}{" "}
                                            </h2>
                                            <span className="text-[#707070] text-[12px]">
                                                <span className="line-through">{product.originalPrice}</span>
                                                ({product.productOff})
                                            </span>
                                            <p className="font-bold text-[16px] mb-[10px]">{product.pName}</p>
                                            <div className="flex justify-between ">
                                                <div className="flex lg:bg-[#FB641B] min-[320px]:bg-[#026C51] min-[320px]:h-4 text-white  rounded px-[2px] text-[12px] mr-[4px]">
                                                    <span className='min-[320px]:mt-[-1px]'>{product.rating}</span>
                                                    <FaStar className=" ml-2 min-[320px]:mt-[2px]"></FaStar>
                                                </div>
                                                <span className="text-[13px] text-[#686868] inline-block my-auto ml-2 ">
                                                    24 Ratings & 5 Reviews
                                                </span>
                                            </div>
                                            <div className="mt-[14px]">
                                                <Image
                                                    className=""
                                                    src={sellerVerify}
                                                    width="79"
                                                    height="24"
                                                    alt="logo image"
                                                />
                                                <div className="min-[320px]:mt-[16px] lg:mt-[38px] mb-[16px]">
                                                    <button className="btn bg-[#FB641B] sm:w-[160px] min-[320px]:w-[160px] min-[320px]:h-[38px] lg:w-[186px] lg:mx-[20px] min-[320px]:mx-[-5px]">
                                                        <span className="text-white text-[12px] mr-[4px]">Add to Cart</span>
                                                        <FaShoppingCart className="text-white h-[20px] w-[24px]"></FaShoppingCart>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center'>
                    <button className='btn btn-outline btn-primary w-[235px] mt-[58px] rounded-none'>Load More</button>
                </div>
            </div>
        </div>
    );
};

export default Search;