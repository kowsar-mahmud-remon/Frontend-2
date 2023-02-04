import React from 'react';
import { FaStar, FaShoppingCart, } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Image from 'next/image'
import img1 from '../../assets/images/image 4.png'
import v2 from '../../assets/images/Vector (2).png'
import v3 from '../../assets/images/Vector (3).png'
import cate from '../../assets/images/Group 2399.png'
import sellerVerify from '../../assets/images/sellerProfile/product/verified.png'
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const SearchDesktop = () => {

    const [show, setShow] = useState(true)
    const [leftWidth, setLeftWidth] = useState('w-[310px]')
    const [rightWidth, setRightWidth] = useState('w-full')
    const [bghide, setBgHide] = useState('')
    const minValue = 0;
    const [filter, setFilter] = useState()
    const [maxValue, setMaxValue] = useState(10000)
    const [newSeller, setNewSeller] = useState('hidden')

    const handleRange = (val) => {
        console.log(val)
        setMaxValue(val)
    }

    const filters = []
    console.log(filters)

    const handleclearAll = () => {
        const filter = document.getElementById('filter')
        // filter.classList.add('hidden')
    }
    const handleNewSeller = (val) => {

        console.log(val)
        // const newFilter = [val]
        // setFilters(newFilter, ...filters)

        // console.log(val)
        // // const newFilters = ['new Seller']
        // filters.push(val)
        // const y = document.getElementById('seller').value;
        if (val === true) {
            setNewSeller('block')

        }
        else if (val === false) {
            setNewSeller('hidden')

        }

    }
    const handleverifiedSeller = (val) => {
        // setFilters(filters, 'verified Seller')
        const x = document.getElementById('verifiedSeller').value;
        if (val === true) {
            filters.push('Verified Seller')

        }
        else if (val === false) {
            const filter = document.getElementById('filter')
            filter.remove()
        }

    }
    const handleAssuredSeller = (val) => {

        if (val === true) {
            // const x = document.getElementById('AssuredSeller').value;
            const filter = document.getElementById('filter')
            const p = document.createElement('p')
            p.innerHTML = <button> Assured Seller</button>
            filter.appendChild(p)
        }
        else if (val === false) {
            const filter = document.getElementById('filter')
            const p = document.createElement('p')
            p.innerHTML = ''
            filter.appendChild(p)

        }
    }
    const handleCloseNewSeller = () => {
        // setNewSeller('hidden')
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

            setBgHide('left-[1px]')
            setLeftWidth('w-[317px]')
        }
        else {

        }
    }
    const handleClose = (view) => {
        if (view === 1) {

            setBgHide('left-[-395px]')
            setLeftWidth('w-[310px]')
        }
        else {


        }
    }

    return (
        <div className=" flex lg:px-[94px] relative md:px-[94px] mt-2">
            <div className={`flex z-20  absolute  lg:left-[93px]  lg:mr-[229px] ${bghide} `}>
                <div onClick={() => handleClose(1)} className={` w-[107px]   h-[1148px] bg-black opacity-[0.4]  lg:hidden md:hidden`}>
                    {/* <OutsideClickHandler
                        onOutsideClick={() => {
                            // handleClose(1)
                        }}
                    >

                    </OutsideClickHandler> */}
                </div>

                <div className={`${leftWidth}   lg:block md:block   `}>
                    <div className='flex justify-between px-4'>
                        <div className='max-[500px]:hidden  mb-[16px] border  border-[#FB641B] py-[11px] px-[23px] rounded-full flex w-[166px]'>
                            <Image className='h-[20px] w-[20px] mt-[3px]'
                                src={cate}
                                alt='img'
                            />
                            <span className='ml-2 font-semibold text-[18px]'>Categories</span>

                        </div>

                    </div>
                    <div className='shadow-xl  bg-white  mr-[21px]'>
                        {/* ---------------------filters start---------------- */}
                        <div className='px-4 lg:hidden md:hidden'>
                            <div className='flex justify-between mb-[16px]'>
                                <p className='font-semibold mb-[16px] text-[#001E00] '>Filters</p>
                                <p className='text-[#287DF3] cursor-pointer' onClick={handleclearAll}>Clear all</p>
                            </div>
                            <div>
                                <div id='filter' className='flex mb-[16px]'>


                                </div>
                            </div>
                        </div>
                        {/* ---------------------filters end---------------- */}



                        <div className='px-4'>
                            <ul>
                                <li className='flex justify-between'><p className='font-semibold text-[18px] mb-[16px] text-[#001E00] '>All Collecction</p>
                                    <Image className='h-2 mt-2'
                                        src={v2}
                                        alt='img'
                                    />
                                </li>
                                {
                                    show ? vegProducts && vegProducts.map((vproduct, i) => {
                                        return (
                                            <li className='mb-[16px] text-[14px] font-semibold text-[#001E00]' key={i}>
                                                {vproduct}
                                            </li>
                                        )
                                    }).slice(0, 5)
                                        :
                                        vegProducts && show === false && vegProducts.map((vproduct, i) => {
                                            return (
                                                <li className='mb-[16px] text-[14px] font-semibold' key={i}>
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

                        <div className='px-4 lg:block md:block hidden'>
                            <div className='flex justify-between mb-[16px]'>
                                <p className='font-semibold mb-[16px] text-[#001E00] '>Filters</p>
                                <p className='text-[#287DF3] cursor-pointer' onClick={handleclearAll}>Clear all</p>
                            </div>
                            <div>
                                <div id='filter' className='flex mb-[16px] '>
                                    <p className={`bg-[#F2F3F7] w-[118px] text-[#686868] text-[14px] h-[28px] py-[-2px] px-2 ${newSeller}`}> <span className='mr-2 cursor-pointer' onClick={handleCloseNewSeller()}>X</span><span>New Seller</span> </p>
                                    <p className={`bg-[#F2F3F7] w-[90px] text-[#686868] text-[14px] h-[28px] py-[-2px] px-2 ml-2 `}> <span className='mr-2 cursor-pointer ' onClick={handleCloseNewSeller()}>X</span><span>{maxValue}</span> </p>

                                </div>
                            </div>
                        </div>
                        <hr className='mb-[16px]' />

                        <div>
                            <div className='flex justify-between px-4'>
                                <p className='font-semibold mb-[16px] text-[#001E00] '>Prices</p>
                                <Image className='h-2 mt-2'
                                    src={v2}
                                    alt='img'
                                />
                            </div>
                            <div className='container mb-[16px] px-4 range'>
                                <form >
                                    <input className='w-[250px]  accent-[#026C51]' type="range" id='range' step={100} max={100000} onChange={(e) => handleRange(e.target.value)} />
                                </form>
                            </div>
                            <div className='flex justify-between mb-[16px] px-4'>
                                <select className='w-[50px] border border-gray-400 rounded-md'>
                                    <option disabled selected>{minValue}</option>

                                </select>
                                <p1 className='mx-2'>To</p1>
                                <select className='w-[76px] border border-gray-400 rounded-md'>
                                    <option selected>{maxValue}</option>

                                </select>
                            </div>
                        </div>
                        <hr className='mb-[16px]' />

                        {/* --------------brand section start----------------- */}

                        <div className="mb-[16px] lg:hidden md:hidden block">
                            <div className='flex justify-between px-[16px]'>
                                <p className='font-semibold mb-[16px] text-[#001E00]'>Brands</p>
                                <Image className='h-2 mt-2'
                                    src={v2}
                                    alt='img'
                                />
                            </div>
                            <div className='border  rounded-md w-[136px]  p-[8px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='bg-[#026C51]' />
                                <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>No Brands</label><br />
                            </div>

                        </div>


                        {/* --------------brand section end----------------- */}
                        <div className='px-4'>
                            <div className='flex justify-between '>
                                <p className='font-semibold mb-[16px] text-[#001E00]'>Seller</p>
                                <Image className='h-2 mt-2'
                                    src={v2}
                                    alt='img'
                                />
                            </div>

                            <div className="mb-[16px]">
                                <form className=''>
                                    <div className='border  rounded-md w-28 mb-2 p-[8px] '>
                                        <input type="checkbox" className='accent-[#026C51]' id="seller" name="vehicle1" onClick={(e) => handleNewSeller(e.target.checked)} value="New Seller" />
                                        <label for="vehicle1 " className='text-[14px] text-[#001E00] font-medium'> New Seller</label><br />
                                    </div>
                                    <div className='border p-[8px] rounded-md w-32 mb-2'>
                                        <input type="checkbox" className='accent-[#026C51]' id="verifiedSeller" name="vehicle2" onClick={(e) => handleverifiedSeller(e.target.checked)} value="Verified Seller" />
                                        <label for="vehicle2" className='text-[14px] text-[#001E00]  font-medium'> Verified Seller</label><br />
                                    </div>
                                    <div className='border p-[8px] rounded-md w-32'>
                                        <input type="checkbox" className='accent-[#026C51]' id="AssuredSeller" name="vehicle3" onClick={(e) => handleAssuredSeller(e.target.checked)} value="Assured Seller" />
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
                                    alt='img'
                                />
                            </div>

                            <div className="mb-[16px] px-[16px]">
                                <form className='grid grid-cols-2'>
                                    <div className='border  rounded-md w-[98px] mb-2  p-[8px] flex '>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'> Dhaka</label>
                                        <Image className='h-[7px] w-[7px] ml-[15px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Chittagong</label>
                                        <Image className='h-[7px] w-[7px] ml-[23px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />

                                    </div>
                                    <div className='border   rounded-md w-[98px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Barishal </label>
                                        <Image className='h-[7px] w-[7px] ml-[7px] mt-[6px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px] p-[8px]  mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Rajshahi</label>
                                        <Image className='h-[7px] w-[7px] ml-[39px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[98px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Khulna</label>
                                        <Image className='h-[7px] w-[7px] ml-[12px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='font-semibold text-[#001E00] ml-2 mt-[1px] text-[14px]'>Rangpur</label>
                                        <Image className='h-[7px] w-[7px] ml-[38px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[98px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Sylhet</label>
                                        <Image className='h-[7px] w-[7px] ml-[17px] mt-[9px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px]  p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Mymensingh</label>
                                        <Image className='h-[7px] w-[7px] ml-[10px] mt-[9px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>
                        <hr className='mb-[16px]' />
                        {/* ------------brand------------- */}
                        <div className="lg:mb-[16px] md:mb-[16px]  lg:block md:block hidden lg:pb-4 md:pb-4 ">
                            <div className='flex justify-between px-[16px]'>
                                <p className='font-semibold mb-[16px] text-[#001E00]'>Brands</p>
                                <Image className='h-2 mt-2'
                                    src={v2}
                                    alt='img'
                                />
                            </div>
                            <div className='border ml-4  rounded-md w-[136px]  p-[8px] '>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51]' />
                                <label for="vehicle1" className='text-[14px] font-semibold  ml-2 mt-[1px]'>No Brands</label><br />
                            </div>

                        </div>
                        {/* -------------button-------------------- */}
                        <div className='flex justify-center gap-2 lg:hidden md:hidden'>
                            <button className="btn bg-white border-[#B7B7B7]  w-[99px] mb-3  ">
                                {/* <span className="text-white lg:text-[16px] md:text-[16px] text-[10px]  mr-[4px]">CLOSE</span> */}
                                <span className='text-[#B7B7B7] text-[16px] '>Cancel</span>
                            </button>
                            <button className="btn bg-[#FB641B]  w-[99px]  ">
                                {/* <span className="text-white lg:text-[16px] md:text-[16px] text-[10px]  mr-[4px]">CLOSE</span> */}
                                <span className='text-white text-[16px] '>Submit</span>
                            </button>
                        </div>

                    </div>


                </div>
            </div>

            {/*--------------------- right div----------------- */}
            <div className={`${rightWidth}  z-10 lg:ml-[295px] ml-[-8px]`}>
                <div className={`flex justify-between px-[24px] `}>
                    <p className='text-[16px] lg:mt-[24px] mt-[19px] md:mt-[24px]'>Home / <span className='text-[#287DF3]'>Search Results</span></p>

                    <div className='flex'><p className='font-semibold  lg:mt-[34px]  md:mt-[34px]  mt-[20px] '>Sort By:</p>
                        <select className='text-[12px] w-[110px] text-[#686868] px-[11px] font-semibold border lg:mt-[24px] md:mt-[24px] mt-[16px]  ' name="" id="">
                            <option selected className='px-[11px] py-[-4px]' value="">Best Match</option>
                            <option value="">Price High to low</option>
                            <option value="">Price Low to high</option>
                        </select>
                    </div>
                    <p className='font-bold lg:hidden md:hidden mt-[19px] mr-2' onClick={() => handleRes(1)}><FiMenu /></p>
                </div>
                <div className='flex flex-wrap lg:gap-[22px] md:gap-[22px] gap-[16px] ml-[24px] '>

                    {

                        searchProducts && searchProducts.map(product => {
                            return (
                                <div key={product.id}>

                                    <div className="card w-[180px]  lg:w-[262px] md:w-[262px] lg:h-[440px] md:h-[440px] h-[390px] bg-base-100 shadow-xl">
                                        <Image className="lg:mx-auto" src={product.img} width={180} height={126} alt="Shoes" />

                                        <div className="card-body px-[16px] inline">
                                            <h2 className="card-title text-[#FB641B] font-bold text-[20px] inline-block mr-[4px] mb-[10px] ">
                                                Tk {product.price}{" "}
                                            </h2>
                                            <span className="text-[#707070] lg:text-[12px] md:text-[12px]">
                                                <span className="line-through">{product.originalPrice}</span>
                                                ({product.productOff})
                                            </span>
                                            <p className="font-bold lg:text-[16px] md:text-[16px] text-[14px] mb-[10px]">{product.pName}</p>
                                            <div className="flex  ">
                                                <div className="flex lg:bg-[#FB641B] md:bg-[#FB641B] bg-[#026C51] h-[16px]  text-white  rounded px-[2px] text-[12px] mr-[4px]">
                                                    <span className=''>{product.rating}</span>
                                                    <FaStar className=" ml-2 mt-[3px] "></FaStar>
                                                </div>
                                                <span className="lg:text-[13px] md:text-[13px] text-[10px] text-[#686868] inline-block my-auto ml-[8px] ">
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
                                                <div className=" lg:mt-[38px] md:mt-[38px] mt-[16px] mb-[16px] lg:h-[38px] md:h-[38px]  ml-[5px]">
                                                    <button className="btn bg-[#FB641B] lg:w-[186px] md:w-[186px] w-[140px] lg:mx-[20px] md:mx-[20px]  ">
                                                        <span className="text-white lg:text-[16px] md:text-[16px] text-[10px]  mr-[4px]">Add to Cart</span>
                                                        <FaShoppingCart className="text-white h-[20px] w-[17px]"></FaShoppingCart>
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
                    <button className='btn border-[#FB641B]  w-[235px] mt-[58px] rounded-none'>Load More</button>
                </div>
            </div>
        </div>
    );
};

export default SearchDesktop;