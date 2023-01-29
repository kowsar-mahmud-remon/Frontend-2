import React from 'react';
import { FaStar, FaShoppingCart, FaMenu } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import ReactSlider from 'react-slider'
import Image from 'next/image'
import img1 from '../../assets/images/image 4.png'
import v2 from '../../assets/images/Vector (2).png'
// import v3 from '../../assets/images/Vector (3).png'
import cate from '../../assets/images/Group 2399.png'
import sellerVerify from '../../assets/images/sellerProfile/product/verified.png'
import { useState } from 'react';

const Search = () => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100)
    const [show, setShow] = useState(true)
    const [hide, setHide] = useState('sm:hidden ')
    const [leftWidth, setLeftWidth] = useState('w-[382px]')
    const [rightWidth, setRightWidth] = useState('w-full')

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
            setHide('sm:block')
            setLeftWidth('sm:w-full')
            setRightWidth('sm:hidden')
        }
        else {

        }
    }
    const handleClose = (view) => {
        if (view === 1) {
            setRightWidth('sm:block')
            setLeftWidth('sm:hidden')
        }
        else {


        }
    }

    return (
        <div className="flex px-24 mt-2">
            <div className='w-[552px] '>
                <div className=' mb-[16px] border border-[#FB641B] py-[13px] px-[23px] rounded-full flex w-[166px]'>
                    <Image className=''
                        src={cate}
                        width={20}
                        height={20}
                        alt=''
                    />
                    <span className='ml-2 font-semibold text-[18px]'>Categories</span>
                </div>


                <div className='px-2'>
                    <ul>
                        <li className='flex justify-between'><p className='font-semibold text-[18px] mb-[16px]'>All Collecction</p>
                            <Image className='h-2 mt-2'
                                src={v2}
                                alt=''
                            />
                        </li>
                        {
                            show ? vegProducts && vegProducts.map((vproduct, i) => {
                                return (
                                    <li className='mb-[16px] text-[14px] font-semibold' key={i}>
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
                        <h5>Filters</h5>
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
                        <p className='font-semibold mb-[16px] '>Prices</p>
                        <Image className='h-2 mt-2'
                            src={v2}
                        />
                    </div>
                    <div className='container mb-[16px] px-4'>
                        <ReactSlider
                            className="horizontal-slider bg-red-500"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[0, 100]}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={10}
                        />
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
                        <p className='font-semibold mb-[16px]'>Seller</p>
                        <Image className='h-2 mt-2'
                            src={v2}
                        />
                    </div>

                    <div className="mb-[16px]">
                        <form className='px-2'>
                            <div className='border p-1 rounded-md w-28 mb-2 '>
                                <input type="checkbox" id="seller" name="vehicle1" onClick={handleNewSeller} value="New Seller" />
                                <label for="vehicle1 " className='text-[14px]'> New Seller</label><br />
                            </div>
                            <div className='border p-1 rounded-md w-32 mb-2'>
                                <input type="checkbox" id="verifiedSeller" name="vehicle2" onClick={handleverifiedSeller} value="Verified Seller" />
                                <label for="vehicle2" className='text-[14px]'> Verified Seller</label><br />
                            </div>
                            <div className='border p-1 rounded-md w-32'>
                                <input type="checkbox" id="AssuredSeller" name="vehicle3" onClick={handleAssuredSeller} value="Assured Seller" />
                                <label for="vehicle3" className='text-[14px]'> Assured Seller</label><br />
                            </div>
                        </form>
                    </div>
                </div>


                <hr className='mb-[16px]' />

                <div>
                    <div className='flex justify-between px-2'>
                        <p className='font-semibold mb-[16px]'>Location</p>
                        <Image className='h-2 mt-2'
                            src={v2}
                        />
                    </div>

                    <div className="mb-[16px] px-[16px]">
                        <form className='grid grid-cols-2'>
                            <div className='border  rounded-md w-[98px] mb-2 flex '>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'> Dhaka</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px]  mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'>Chittagong</label><br />

                            </div>
                            <div className='border  rounded-md w-[98px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'>Barishal</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px]  mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'>Rajshahi</label><br />
                            </div>
                            <div className='border  rounded-md w-[98px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'>Khulna</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px]  mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'>Rangpur</label><br />
                            </div>
                            <div className='border  rounded-md w-[98px] mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'>Sylhet</label><br />
                            </div>
                            <div className='border  rounded-md w-[136px]  mb-2'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1" className='text-[14px]'>Mymensingh</label><br />
                            </div>
                        </form>
                    </div>
                </div>





            </div>

            {/*--------------------- right div----------------- */}
            <div className={`${rightWidth}`}>
                <div className={`flex justify-between `}>
                    <p className='text-[16px] mt-[24px]'>Home / <span className='text-[#287DF3]'>Search Results</span></p>
                    <p className='font-bold lg:hidden md:hidden' onClick={() => handleRes(1)}><FiMenu /></p>
                    <div className='flex'><p className='font-semibold  mt-[34px]'>Sort By:</p>
                        <select className='text-[16px] text-[#686868] p-[11px] font-semibold border mt-[24px] ' name="" id="">
                            <option selected className='p-[11px]' value="">Best Match</option>
                            <option value="">Price High to low</option>
                            <option value="">Price Low to high</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-wrap gap-[22px]'>

                    {

                        searchProducts && searchProducts.map(product => {
                            return (
                                <div key={product.id}>

                                    <div className="card w-[222px] h-[440px] bg-base-100 shadow-xl">
                                        <Image className="" src={product.img} width="220" height="154" alt="Shoes" />

                                        <div className="card-body px-[16px] inline">
                                            <h2 className="card-title text-[#FB641B] font-bold text-[20px] inline-block mr-[4px] mb-[10px]">
                                                Tk {product.price}{" "}
                                            </h2>
                                            <span className="text-[#707070] text-[12px]">
                                                <span className="line-through">{product.originalPrice}</span>
                                                ({product.productOff})
                                            </span>
                                            <p className="font-bold text-[16px] mb-[10px]">{product.pName}</p>
                                            <div className="flex justify-between ">
                                                <div className="flex bg-[#FB641B] text-white  rounded p-[2px] text-[12px] mr-[8px]">
                                                    <span>{product.rating}</span>
                                                    <FaStar className="my-auto ml-2"></FaStar>
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
                                                <div className="mt-[38px] mb-[16px]">
                                                    <button className="btn bg-[#FB641B] w-[186px] mx-auto">
                                                        <span className="text-white mr-[4px]">Add to Cart</span>
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