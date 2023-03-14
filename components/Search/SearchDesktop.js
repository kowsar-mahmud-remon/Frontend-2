import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import lebu from "../../assets/images/lebu.png";
import tomato from "../../assets/images/tomatoo.png";
import kumra from "../../assets/images/kumra.png";
import potol from "../../assets/images/potol.png";
import deros from "../../assets/images/deros.png";
import banana from "../../assets/images/banana.png";
import star from "../../assets/images/star.png";
import v2 from "../../assets/images/Vector (2).png";
import v3 from "../../assets/images/Vector (3).png";
import cate from "../../assets/images/Group 2399.png";
import seller from "../../assets/images/seller.png";
import verified from "../../assets/images/verified.png";
import { useState } from "react";
import style from "../../styles/componentsStyles/Search.module.css";
import { CiStar } from "react-icons/ci";

const SearchDesktop = () => {
  const [show, setShow] = useState(true);
  const [leftWidth, setLeftWidth] = useState("w-[310px]");
  const [rightWidth, setRightWidth] = useState("w-full");
  const [bghide, setBgHide] = useState("");
  const minValue = 0;
  const [filters, setFilters] = useState([]);
  const [maxValue, setMaxValue] = useState(10000);
  const [disValue, setDisValue] = useState(10000);
  const [location, setLocation] = useState([]);

  const handleRange = (val) => {
    console.log(val);
    setMaxValue(val);
  };
  const discountRange = (val) => {
    console.log(val);
    setDisValue(val);
  };

  const handleCloseSeller = (id) => {
    const rest = filters && filters.filter((fil) => fil.id !== id);
    setFilters(rest);
    // set_is_checked(false)
  };
  const handleCloseLocation = (id) => {
    const rest = location && location.filter((fil) => fil.id !== id);
    setLocation(rest);
  };

  const handleclearAll = () => {
    setFilters("");
    setLocation("");
  };

  const handleSeller = (check, val) => {
    if (filters.length <= 3) {
      if (check === true) {
        setFilters([...filters, val]);
        // set_is_checked(true)
      } else if (check === false) {
        handleCloseSeller(val.id);
      }
    }
  };
  const handleLocation = (check, val) => {
    if (check === true) {
      setLocation([...location, val]);
    } else if (check === false) {
      handleCloseLocation(val.id);
    }
  };

  console.log(location);

  const searchProducts = [
    {
      id: 1,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 3.9,
      img: lebu,
      isVerify: verified,
    },
    {
      id: 2,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 1.9,
      isVerify: seller,
      img: tomato,
    },
    {
      id: 3,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4.8,
      isVerify: verified,
      img: kumra,
    },
    {
      id: 4,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4.3,
      isVerify: "",
      img: potol,
    },
    {
      id: 5,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 3.7,
      isVerify: verified,
      img: deros,
    },
    {
      id: 6,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 5.0,
      isVerify: seller,
      img: banana,
    },
    {
      id: 7,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 1.2,
      isVerify: verified,
      img: lebu,
    },
    {
      id: 8,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 3.7,
      isVerify: seller,
      img: tomato,
    },
    {
      id: 9,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4.3,
      isVerify: verified,
      img: potol,
    },
    {
      id: 10,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 1.2,
      isVerify: verified,
      img: deros,
    },
    {
      id: 11,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4.8,
      isVerify: seller,
      img: kumra,
    },
    {
      id: 12,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4.4,
      isVerify: verified,
      img: banana,
    },
    {
      id: 13,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 3.9,
      isVerify: seller,
      img: kumra,
    },
    {
      id: 14,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 3.7,
      isVerify: verified,
      img: potol,
    },
    {
      id: 15,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 1.5,
      isVerify: seller,
      img: deros,
    },
    {
      id: 16,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4.5,
      isVerify: "",
      img: lebu,
    },
    {
      id: 17,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 4,
      isVerify: verified,
      img: potol,
    },
    {
      id: 18,
      price: 18,
      originalPrice: 20,
      productOff: "2%off",
      pName: "Kacha Morich (Green Chili) 250 ±15 gm",
      rating: 2.8,
      isVerify: seller,
      img: tomato,
    },
  ];
  const vegProducts = [
    "Kacha Bazar (172)",
    "Vegetables  (151)",
    "Daal / Chal (199)",
    "Atta/Maida (1016)",
    "Salt & Sugar (116)",
    "Salt & Sugar (116)",
    "Salt & Sugar (116)",
  ];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleRes = (view) => {
    if (view === 1) {
      setBgHide("left-[1px]");
      setLeftWidth("w-[317px]");
    } else {
    }
  };
  const handleClose = (view) => {
    if (view === 1) {
      setBgHide("left-[-1095px]");
      setLeftWidth("w-[310px]");
    }
  };

  const ratingColor =(statuss)=> {
    if (statuss <3) {
        return '#F4253F';
    }
    if (statuss <4 ) {
        return '#FB641B';
    }
    return '#026C51';
}

  return (
    <div className=" flex lg:px-[94px]  md:px-[94px]  mt-2">
      <div onClick={() => handleClose(1)} className={``}>
        <div onClick={() => handleClose(1)} className={``}></div>

        <div className={`${leftWidth}  lg:w-full lg:block md:block  z-[999]  `}>
          <div className="flex justify-between px-4 ">
            <div className="max-[600px]  lg:mt-[10px] hidden  mb-[16px] border  border-[#FB641B] py-[11px] px-[23px] rounded-full md:flex w-[176px] items-center">
              <Image
                className="h-[20px] w-[20px] lg:mt-[3px]"
                src={cate}
                alt="img"
              />
              <span className="ml-2 font-semibold text-[18px]">Categories</span>
            </div>
          </div>
          <div className={`${style.collectionsBoxSideBarShaddow} p-4`}>
            {/* ---------------------filters start---------------- */}
            <div className="px-4 lg:hidden md:hidden pt-10 pb-20">
              <div className="flex justify-between mb-[16px] ">
                <p className="font-semibold mb-[16px] text-[#001E00] ">
                  Filters
                </p>
                <p
                  className="text-[#287DF3] cursor-pointer"
                  onClick={handleclearAll}
                >
                  Clear all
                </p>
              </div>
              <div>
                <div id="filter" className=" grid grid-cols-3 mb-[16px] ">
                  <p
                    className={`bg-[#F2F3F7] w-[80px] text-[#686868] text-[10px] h-[21px] py-[-2px] px-2 mr-2 `}
                  >
                    {" "}
                    <span className="mr-1 cursor-pointer">X</span>
                    <span>{maxValue}</span>{" "}
                  </p>
                  {filters &&
                    filters.map((filter) => {
                      return (
                        <div key={filter.id}>
                          <p
                            className={`bg-[#F2F3F7] mb-[3px] w-[80px] text-[#686868] text-[10px] h-[21px] py-[-2px] px-2 mr-2 `}
                          >
                            {" "}
                            <span
                              className="mr-1 cursor-pointer"
                              onClick={() => handleCloseSeller(filter.id)}
                            >
                              X
                            </span>
                            <span>{filter.value}</span>{" "}
                          </p>
                        </div>
                      );
                    })}
                  {location &&
                    location.map((loc) => {
                      return (
                        <div key={loc.id}>
                          <p
                            className={`bg-[#F2F3F7] mb-[3px] w-[80px] text-[#686868] text-[10px] h-[21px] py-[-2px] px-2 mr-2 `}
                          >
                            {" "}
                            <span
                              className="mr-1 cursor-pointer"
                              onClick={() => handleCloseLocation(loc.id)}
                            >
                              X
                            </span>
                            <span>{loc.place}</span>{" "}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {/* ---------------------filters end---------------- */}

            <div className="">
              <ul>
                <li className="flex justify-between">
                  <p className="font-semibold text-[18px] text-[#001E00] ">
                    All Collecction
                  </p>
                  <Image className="h-2 mt-2 " src={v2} alt="img" />
                </li>
                {show
                  ? vegProducts &&
                    vegProducts
                      .map((vproduct, i) => {
                        return (
                          <li
                            className="mb-[16px] text-[14px] font-semibold text-[#001E00]"
                            key={i}
                          >
                            {vproduct}
                          </li>
                        );
                      })
                      .slice(0, 5)
                  : vegProducts &&
                    show === false &&
                    vegProducts.map((vproduct, i) => {
                      return (
                        <li
                          className="mb-[16px] text-[14px] font-semibold"
                          key={i}
                        >
                          {vproduct}
                        </li>
                      );
                    })}

                {show ? (
                  <li
                    className=" text-[14px] font-semibold mb-[16px] text-[#287DF3] cursor-pointer"
                    onClick={() => setShow(false)}
                  >
                    {vegProducts.length - 5} more...
                  </li>
                ) : (
                  <li
                    className="cursor-pointer text-[#287DF3] font-semibold text-[14px] mb-[16px]"
                    onClick={() => setShow(true)}
                  >
                    show less
                  </li>
                )}
              </ul>
            </div>
            <hr className="mb-[16px]" />

            {/*---------- filter section----------- */}

            <div className=" lg:block md:block hidden">
              <div className="flex justify-between mb-[16px]">
                <p className="font-semibold mb-[16px] text-[#001E00] ">
                  Filters
                </p>
                <p
                  className="text-[#287DF3] cursor-pointer"
                  onClick={handleclearAll}
                >
                  Clear all
                </p>
              </div>
              <div>
                <div
                  id="filter"
                  className=" grid grid-cols-3 mb-[16px] gap-[4px] "
                >
                  <p
                    className={`bg-[#F2F3F7] w-[80px] text-[#686868] text-[11px] h-[21px] py-[-2px] px-2 mr-2 `}
                  >
                    {" "}
                    <span className="mr-1 cursor-pointer">X</span>
                    <span>{maxValue}</span>{" "}
                  </p>
                  {filters &&
                    filters.map((filter) => {
                      return (
                        <div key={filter.id}>
                          <p
                            className={`bg-[#F2F3F7] mb-[3px] w-[83px] text-[#686868] text-[11px] h-[21px] py-[-2px] px-1  `}
                          >
                            {" "}
                            <span
                              className="mr-1 cursor-pointer"
                              onClick={() => handleCloseSeller(filter.id)}
                            >
                              X
                            </span>
                            <span>{filter.value}</span>{" "}
                          </p>
                        </div>
                      );
                    })}
                  {location &&
                    location.map((loc) => {
                      return (
                        <div key={loc.id}>
                          <p
                            className={`bg-[#F2F3F7] mb-[3px] w-[90px] text-[#686868] text-[11px] h-[21px] py-[-2px] px-2 mr-2 `}
                          >
                            {" "}
                            <span
                              className="mr-1 cursor-pointer"
                              onClick={() => handleCloseLocation(loc.id)}
                            >
                              X
                            </span>
                            <span>{loc.place}</span>{" "}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <hr className="mb-[16px]" />

            <div>
              <div className="flex justify-between">
                <p className="font-semibold mb-[16px] text-[#001E00] ">
                  Prices
                </p>
                <Image className="h-2 mt-2" src={v2} alt="img" />
              </div>
              <div className="container mb-[16px] range">
                <form>
                  <input
                    className="w-[250px]  accent-[#026C51]"
                    type="range"
                    id="range"
                    step={100}
                    max={100000}
                    onChange={(e) => handleRange(e.target.value)}
                  />
                </form>
              </div>
              <div className="flex justify-between mb-[16px]">
                <select className="w-[50px] border border-gray-400 rounded-md">
                  <option disabled selected>
                    {minValue}
                  </option>
                </select>
                <p1 className="mx-2">To</p1>
                <select className="w-[76px] border border-gray-400 rounded-md">
                  <option selected>{maxValue}</option>
                </select>
              </div>
            </div>
            <hr className="mb-[16px]" />

            {/* --------------brand section start----------------- */}

            <div className="mb-[16px] lg:hidden md:hidden block">
              <div className="flex justify-between">
                <p className="font-semibold mb-[16px] text-[#001E00]">Brands</p>
                <Image className="h-2 mt-2" src={v2} alt="img" />
              </div>
              <div className="border  rounded-md w-[136px] ml-4  px-[8px] mb-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="bg-[#026C51]"
                />
                <label
                  for="vehicle1"
                  className="text-[14px] font-semibold text-[#001E00] ml-2 mt-[1px]"
                >
                  No Brands
                </label>
                <br />
              </div>
            </div>

            {/* --------------brand section end----------------- */}
            <div className="">
              <div className="flex justify-between ">
                <p className="font-semibold mb-[16px] text-[#001E00]">Seller</p>
                <Image className="h-2 mt-2" src={v2} alt="img" />
              </div>

              <div className="mb-[16px]">
                <form className="">
                  <div className="border border-[#CDCDCD] rounded h-[32px] w-[136px] flex items-center px-2">
                    <input
                      type="checkbox"
                      className="accent-[#026C51]"
                      id="seller"
                      name="vehicle1"
                      onClick={(e) =>
                        handleSeller(e.target.checked, {
                          id: 1,
                          value: "NewSeller",
                        })
                      }
                      value="New Seller"
                    />
                    <label
                      for="vehicle1 "
                      className="text-[14px] ml-2 text-[#001E00] font-medium"
                    >
                      {" "}
                      New Seller
                    </label>
                    <br />
                  </div>
                  <div className="border border-[#CDCDCD] rounded h-[32px] w-[136px] flex items-center px-2 my-4">
                    <input
                      type="checkbox"
                      className="accent-[#026C51]"
                      id="verifiedSeller"
                      name="vehicle2"
                      onClick={(e) =>
                        handleSeller(e.target.checked, {
                          id: 2,
                          value: "VarifiedSeller",
                        })
                      }
                      value="Verified Seller"
                    />
                    <label
                      for="vehicle2"
                      className="text-[14px] ml-2  text-[#001E00]  font-medium"
                    >
                      {" "}
                      Verified Seller
                    </label>
                    <br />
                  </div>
                  <div className="border border-[#CDCDCD] rounded h-[32px] w-[136px] flex items-center px-2">
                    <input
                      type="checkbox"
                      className="accent-[#026C51]"
                      id="AssuredSeller"
                      name="vehicle3"
                      onClick={(e) =>
                        handleSeller(e.target.checked, {
                          id: 3,
                          value: "AssuredSeller",
                        })
                      }
                      value="Assured Seller"
                    />
                    <label
                      for="vehicle3"
                      className="text-[14px] ml-2 text-[#001E00]  font-medium"
                    >
                      {" "}
                      Assured Seller
                    </label>
                    <br />
                  </div>
                </form>
              </div>
            </div>
            <hr className="mb-[16px] border border-[#CDCDCD]" />

            <div>
              <div className="flex justify-between">
                <h3>Discount</h3>
                <Image className="h-2 mt-2" src={v2} alt="img" />
              </div>
              <div>
                <div className="container mb-[16px] range">
                  <form>
                    <input
                      className="w-[250px]  accent-[#026C51]"
                      type="range"
                      id="range"
                      step={100}
                      max={100000}
                      onChange={(e) => discountRange(e.target.value)}
                    />
                  </form>
                </div>
                <div className="flex justify-between mb-[16px]">
                  <select className="w-[50px] border border-gray-400 rounded-md">
                    <option disabled selected>
                      {minValue}
                    </option>
                  </select>
                  <p1 className="mx-2">To</p1>
                  <select className="w-[76px] border border-gray-400 rounded-md">
                    <option selected>{maxValue}</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="mb-[16px] border border-[#CDCDCD]" />

            <div>
              <div className="flex justify-between ">
                <p className="font-semibold mb-[16px] text-[#001E00]">
                  Location
                </p>
                <Image className="h-2 mt-2" src={v2} alt="img" />
              </div>

              <div className="mb-[16px]">
                <form>
                  <div className="flex justify-between mb-4">
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[98px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] w-[12px] border border-[#CDCDCD] rounded"
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 1,
                            place: "Dhaka",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] font-semibold text-[#001E00]"
                      >
                        {" "}
                        Dhaka
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[136px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] "
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 2,
                            place: "Chittagong",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] font-semibold text-[#001E00]"
                      >
                        Chittagong
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[98px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] w-[12px] border border-[#CDCDCD] rounded"
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 1,
                            place: "Barisal",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] font-semibold text-[#001E00]"
                      >
                        {" "}
                        Barisal
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[136px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] "
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 2,
                            place: "Rajshahi",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] -ml-4 font-semibold text-[#001E00]"
                      >
                        Rajshahi
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[98px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] w-[12px] border border-[#CDCDCD] rounded"
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 1,
                            place: "Khulna",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] font-semibold text-[#001E00]"
                      >
                        {" "}
                        Khulna
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[136px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] "
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 2,
                            place: "Rangpur",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] -ml-4 font-semibold text-[#001E00]"
                      >
                        Rangpur
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[98px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] w-[12px] border border-[#CDCDCD] rounded"
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 1,
                            place: "Sylhet",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] font-semibold text-[#001E00]"
                      >
                        {" "}
                        Sylhet
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                    <div className="border border-[#CDCDCD] rounded h-[32px] w-[136px] flex items-center justify-between px-2">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="accent-[#026C51] "
                        onClick={(e) =>
                          handleLocation(e.target.checked, {
                            id: 2,
                            place: "Mymensingh",
                          })
                        }
                      />
                      <label
                        for="vehicle1"
                        className="text-[14px] font-semibold text-[#001E00]"
                      >
                        Mymensingh
                      </label>
                      <Image className="" src={v3} alt="img" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <hr className="mb-[16px]" />
            {/* ------------brand------------- */}
            <div className="lg:mb-[16px] md:mb-[16px]  lg:block md:block hidden lg:pb-4 md:pb-4 ">
              <div className="flex justify-between">
                <p className="font-semibold mb-[16px] text-[#001E00]">Brands</p>
                <Image className="h-2 mt-2" src={v2} alt="img" />
              </div>
              <div className="border  rounded-md w-[136px]  ">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="accent-[#026C51]"
                />
                <label
                  for="vehicle1"
                  className="text-[14px] font-semibold  ml-2 mt-[1px]"
                >
                  No Brands
                </label>
                <br />
              </div>
            </div>
            {/* -------------button-------------------- */}
            <div className="flex justify-center gap-2 mb-40 lg:hidden md:hidden">
              <button className="btn bg-white border-[#B7B7B7]  w-[99px] mb-3  ">
                {/* <span className="text-white lg:text-[16px] md:text-[16px] text-[10px]  mr-[4px]">CLOSE</span> */}
                <span className="text-[#B7B7B7] text-[16px] ">Cancel</span>
              </button>
              <button className="btn bg-[#FB641B]  w-[99px]  ">
                {/* <span className="text-white lg:text-[16px] md:text-[16px] text-[10px]  mr-[4px]">CLOSE</span> */}
                <span className="text-white text-[16px] ">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*--------------------- right div----------------- */}
      <div className={``}>
        <div className="flex justify-between my-2 px-5">
          <p className="text-base font-medium">
            Home / <span className="text-[#287DF3]">Search Results</span>
          </p>
          <div className="flex items-center gap-2">
            <label
              for=""
              className="whitespace-nowrap text-lg font-semibold text-[#001E00]"
            >
              Sort By:
            </label>
            <select
              id=""
              className="border border-[#686868] rounded w-[161px] h-[40px] px-3"
            >
              <option className="border-none text-[#686868]" selected>
                Best Match
              </option>
              <option className="border-none text-[#686868]" value="US">
                Price low to High
              </option>
              <option className="border-none text-[#686868]" value="CA">
                Price High to low
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 px-5">
          {/* sm:w-[41%] md:w-[93%] lg:w-[47%] xl:w-[33%]  */}
          {searchProducts &&
            searchProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className={`${style.collectionCard} w-[222px]`}
                >
                  <div className="">
                    <div className="flex justify-center">
                      <Image
                        className="object-cover w-[220px] h-[154px]"
                        src={product.img}
                        width={220}
                        height={154}
                        alt="Shoes"
                      />
                    </div>

                    <div className="p-4">
                      <div className="flex flex-wrap items-center">
                        <h2 className="text-[#FB641B] text-[20px] font-semibold mr-1">
                          Tk {product.price}{" "}
                        </h2>
                        <div className=" text-[#707070] text-xs">
                          <span className="line-through font-semibold">
                            {product.originalPrice}
                          </span>
                          <span> ({product.productOff})</span>
                        </div>
                      </div>
                      <p className="text-[#001E00] font-semibold text-base my-2">
                        {product.pName}
                      </p>
                      <div className="flex items-center mb-[10px]">
                        <div style={{ 'backgroundColor': ratingColor(product.rating)}} className="rounded-[2px] px-[2] w-[35px] h-[16px] flex items-center justify-between mr-2">
                          <p className="text-xs text-white">{product.rating}</p>
                          <div className="">
                            <Image
                              className=""
                              src={star}
                              alt=""
                              width={12}
                            ></Image>
                          </div>
                        </div>
                        <p className="text-[14px] text-[#686868]">
                          24 Ratings & 5 Reviews
                        </p>
                      </div>
                      <div className="mb-[34px] flex items-center">
                        {product.isVerify ? (
                          <div className="flex items-center">
                            <p className="pr-2">Seller:</p>
                            <Image
                              className="h-6"
                              src={product.isVerify}
                              alt="logo image"
                            />
                          </div>
                        ) : (
                          <div className="h-6">
                            <p className="pr-2"></p>
                            
                          </div>  
                        )}
                      </div>
                      <div className="">
                        <button className="w-[186px] h-[38px] bg-[#FB641B] text-white flex justify-center items-center rounded-lg">
                          <p className="pr-1">Add to Cart</p>
                          <FaShoppingCart className="text-white h-[20px] w-[17px]"></FaShoppingCart>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex justify-center md:mb-[52px]">
          <button className="btn border-[#FB641B] border-2  bg-white text-[#FB641B] text-[24px] font-semibold  w-[235px] h-[72px] mt-[58px] rounded-none">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchDesktop;
