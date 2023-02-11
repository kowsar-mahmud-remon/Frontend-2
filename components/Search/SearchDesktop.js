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


const SearchDesktop = () => {

    const [show, setShow] = useState(true)
    const [leftWidth, setLeftWidth] = useState('w-[310px]')
    const [rightWidth, setRightWidth] = useState('w-full')
    const [bghide, setBgHide] = useState('')
    const minValue = 0;
    const [filters, setFilters] = useState([])
    const [maxValue, setMaxValue] = useState(10000)
    const [location, setLocation] = useState([])


    const handleRange = (val) => {
        console.log(val)
        setMaxValue(val)
    }


    const handleCloseSeller = (id) => {
        const rest = filters && filters.filter(fil => fil.id !== id)
        setFilters(rest)
        // set_is_checked(false)
    }
    const handleCloseLocation = (id) => {
        const rest = location && location.filter(fil => fil.id !== id)
        setLocation(rest)
    }

    const handleclearAll = () => {
        setFilters('')
        setLocation('')
    }

    const handleSeller = (check, val) => {
        if (filters.length <= 3) {
            if (check === true) {

                setFilters([...filters, val])
                // set_is_checked(true)

            }
            else if (check === false) {
                handleCloseSeller(val.id)

            }
        }
    }
    const handleLocation = (check, val) => {

        if (check === true) {

            setLocation([...location, val])
        }
        else if (check === false) {
            handleCloseLocation(val.id)
        }
    }




    console.log(location)



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
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
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
            setBgHide('left-[-1095px]')
            setLeftWidth('w-[310px]')
        }

    }




    return (
        <div className=" flex lg:px-[94px]  md:px-[94px]  mt-2">
            <div
                onClick={() => handleClose(1)}
                className={`flex z-20  fixed md:static fixed h-[100vh] top-0 right-0 md:left-0  w-full lg:w-[482px] overflow-auto lg:h-auto  abs-bg ${bghide} mt-[-8px] justify-between md:justify-start scrollbar-hide mt-0 lg:mt-4`}>

                <div onClick={() => handleClose(1)} className={``}>

                </div>

                <div className={`${leftWidth}  lg:w-full lg:block md:block  z-[999] `}>
                    <div className='flex justify-between px-4 '>
                        <div className='max-[600px] hidden lg:mt-[10px] hidden  mb-[16px] border  border-[#FB641B] py-[11px] px-[23px] rounded-full md:flex w-[176px] items-center'>
                            <Image className='h-[20px] w-[20px] lg:mt-[3px]'
                                src={cate}
                                alt='img'
                            />
                            <span className='ml-2 font-semibold text-[18px]'>Categories</span>

                        </div>

                    </div>
                    <div className='shadow-xl  bg-white mr-0 md:mr-[21px] scrollbar-hide'>
                        {/* ---------------------filters start---------------- */}
                        <div className='px-4 lg:hidden md:hidden pt-10 pb-20'>
                            <div className='flex justify-between mb-[16px] '>
                                <p className='font-semibold mb-[16px] text-[#001E00] '>Filters</p>
                                <p className='text-[#287DF3] cursor-pointer' onClick={handleclearAll}>Clear all</p>
                            </div>
                            <div>
                                <div id='filter' className=' grid grid-cols-3 mb-[16px] '>
                                    <p className={`bg-[#F2F3F7] w-[80px] text-[#686868] text-[10px] h-[21px] py-[-2px] px-2 mr-2 `}> <span className='mr-1 cursor-pointer' >X</span><span>{maxValue}</span> </p>
                                    {
                                        filters && filters.map(filter => {
                                            return (
                                                <div key={filter.id} >
                                                    <p className={`bg-[#F2F3F7] mb-[3px] w-[80px] text-[#686868] text-[10px] h-[21px] py-[-2px] px-2 mr-2 `}> <span className='mr-1 cursor-pointer' onClick={() => handleCloseSeller(filter.id)}>X</span><span>{filter.value}</span> </p>
                                                </div>

                                            )
                                        })
                                    }
                                    {
                                        location && location.map(loc => {
                                            return (
                                                <div key={loc.id} >
                                                    <p className={`bg-[#F2F3F7] mb-[3px] w-[80px] text-[#686868] text-[10px] h-[21px] py-[-2px] px-2 mr-2 `}> <span className='mr-1 cursor-pointer' onClick={() => handleCloseLocation(loc.id)}>X</span><span>{loc.place}</span> </p>
                                                </div>

                                            )
                                        })
                                    }



                                </div>
                            </div>
                        </div>
                        {/* ---------------------filters end---------------- */}



                        <div className='px-4'>
                            <ul>
                                <li className='flex justify-between'><p className='font-semibold text-[18px] mb-[16px] text-[#001E00] '>All Collecction</p>
                                    <Image className='h-2 mt-2 '
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
                                    show ? <li className=' text-[14px] font-semibold mb-[16px] text-[#287DF3] cursor-pointer' onClick={() => setShow(false)}>{vegProducts.length - 5} more...</li> : <li className='cursor-pointer text-[#287DF3] font-semibold text-[14px] mb-[16px]' onClick={() => setShow(true)}>show less</li>
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
                                <div id='filter' className=' grid grid-cols-3 mb-[16px] gap-[4px] '>
                                    <p className={`bg-[#F2F3F7] w-[80px] text-[#686868] text-[11px] h-[21px] py-[-2px] px-2 mr-2 `}> <span className='mr-1 cursor-pointer' >X</span><span>{maxValue}</span> </p>
                                    {
                                        filters && filters.map(filter => {
                                            return (
                                                <div key={filter.id} >
                                                    <p className={`bg-[#F2F3F7] mb-[3px] w-[83px] text-[#686868] text-[11px] h-[21px] py-[-2px] px-1  `}> <span className='mr-1 cursor-pointer' onClick={() => handleCloseSeller(filter.id)}>X</span><span>{filter.value}</span> </p>
                                                </div>

                                            )
                                        })
                                    }
                                    {
                                        location && location.map(loc => {
                                            return (
                                                <div key={loc.id} >
                                                    <p className={`bg-[#F2F3F7] mb-[3px] w-[90px] text-[#686868] text-[11px] h-[21px] py-[-2px] px-2 mr-2 `}> <span className='mr-1 cursor-pointer' onClick={() => handleCloseLocation(loc.id)}>X</span><span>{loc.place}</span> </p>
                                                </div>

                                            )
                                        })
                                    }



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
                            <div className='border  rounded-md w-[136px] ml-4  px-[8px] mb-2'>
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
                                        <input type="checkbox" className='accent-[#026C51]' id="seller" name="vehicle1" onClick={(e) => handleSeller(e.target.checked, { id: 1, value: 'NewSeller' })} value="New Seller" />
                                        <label for="vehicle1 " className='text-[14px] text-[#001E00] font-medium'> New Seller</label><br />
                                    </div>
                                    <div className='border p-[8px] rounded-md w-32 mb-2'>
                                        <input type="checkbox" className='accent-[#026C51]' id="verifiedSeller" name="vehicle2" onClick={(e) => handleSeller(e.target.checked, { id: 2, value: 'VarifiedSeller' })} value="Verified Seller" />
                                        <label for="vehicle2" className='text-[14px] text-[#001E00]  font-medium'> Verified Seller</label><br />
                                    </div>
                                    <div className='border p-[8px] rounded-md w-32'>
                                        <input type="checkbox" className='accent-[#026C51]' id="AssuredSeller" name="vehicle3" onClick={(e) => handleSeller(e.target.checked, { id: 3, value: 'AssuredSeller' })} value="Assured Seller" />
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
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 1, place: 'Dhaka' })} />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]' > Dhaka</label>
                                        <Image className='h-[7px] w-[7px] ml-[15px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 2, place: 'Chittagong' })} />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Chittagong</label>
                                        <Image className='h-[7px] w-[7px] ml-[23px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />

                                    </div>
                                    <div className='border   rounded-md w-[98px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 3, place: 'Barishal' })} />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Barishal </label>
                                        <Image className='h-[7px] w-[7px] ml-[7px] mt-[9px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px] p-[8px]  mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 4, place: 'Rajshahi' })} />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Rajshahi</label>
                                        <Image className='h-[7px] w-[7px] ml-[39px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[98px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 5, place: 'Khulna' })} />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Khulna</label>
                                        <Image className='h-[7px] w-[7px] ml-[12px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 6, place: 'Rangpur' })} />
                                        <label for="vehicle1" className='font-semibold text-[#001E00] ml-2 mt-[1px] text-[14px]'>Rangpur</label>
                                        <Image className='h-[7px] w-[7px] ml-[38px] mt-[10px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[98px] p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 7, place: 'Sylet' })} />
                                        <label for="vehicle1" className='text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]'>Sylhet</label>
                                        <Image className='h-[7px] w-[7px] ml-[17px] mt-[9px]'
                                            src={v3}
                                            alt='img'
                                        />
                                    </div>
                                    <div className='border  rounded-md w-[136px]  p-[8px] mb-2 flex'>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='accent-[#026C51] ' onClick={(e) => handleLocation(e.target.checked, { id: 8, place: 'Mymensingh' })} />
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
                        <div className='flex justify-center gap-2 mb-40 lg:hidden md:hidden'>
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
            <div className={`${rightWidth}  z-10  md:ml-[32px] ml-[-8px]`}>
                <div className={`flex justify-between ml-[24px] mb-[16px]`}>
                    <p className='text-[16px] lg:mt-[24px] mt-[19px] md:mt-[24px] lg:block md:block hidden'>Home / <span className='text-[#287DF3]'>Search Results</span></p>
                    <p className='max-[480px]:text-[10px] lg:mt-[24px] mt-[19px] lg:hidden md:hidden md:mt-[24px] text-[#287DF3] max-[480px]:mr-[63px] '> Search Results</p>

                    <div className='flex gap-2'>
                        <p className='font-semibold max-[480px]:text-[10px] lg:mt-[28px]  md:mt-[34px]  mt-[20px] '>Sort By: </p>
                        <select className='lg:text-[16px] mr-2 max-[480px]:w-[110px] max-[480px]:h-[24px] max-[480px]:text-[10px] lg:w-[161px] lg:h-[40px] rounded-sm  text-[#686868]   px-[11px] font-semibold border border-[#686868] lg:mt-[20px] md:mt-[24px] mt-[16px]' id="">
                            <option selected className='px-[11px] py-[4px]  ' value="">Best Match</option>
                            <option className=' ' value="">Price High to low</option>
                            <option className=' ' value="">Price Low to high</option>
                        </select>
                        {/* <Select className='lg:text-[16px] mr-2 max-[480px]:text-[10px] w-[130px] max-[480px]:w-[98px] text-[#686868]   px-[11px] font-semibold  lg:mt-[24px] md:mt-[24px] mt-[16px]  '
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        /> */}
                        <p className='font-bold lg:hidden md:hidden mt-[19px] mr-2' onClick={() => handleRes(1)}><FiMenu /></p>
                    </div>

                </div>
                <div className='flex flex-wrap lg:gap-[22px] md:gap-[22px] gap-[16px] ml-[24px] '>

                    {

                        searchProducts && searchProducts.map(product => {
                            return (
                                <div key={product.id}>

                                    <div className="card w-[180px]   lg:w-[250px] md:w-[250px] lg:h-[430px] md:h-[430px] h-[390px] bg-base-100 shadow-xl">
                                        <div className=''>
                                            <Image className="lg:mx-auto" src={product.img} width={180} height={126} alt="Shoes" />

                                        </div>

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
                                                <div className=" lg:mt-[38px] md:mt-[38px] mt-[16px] mb-[12px] lg:h-[38px] md:h-[38px]  ml-[5px]">
                                                    <button className="btn bg-[#FB641B] lg:w-[186px] md:w-[186px] w-[140px] lg:mx-[9px] md:mx-[9px]  ">
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
                    <button className='btn border-[#FB641B] text-[#FB641B] text-[20px] font-semibold  w-[235px] mt-[58px] rounded-none'>Load More</button>
                </div>
            </div>
        </div>
    );
};

export default SearchDesktop;