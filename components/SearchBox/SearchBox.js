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
import hearts from "../../assets/images/hearts.png";
import hearted from "../../assets/images/herted.png";
import shoping from "../../assets/images/cart.png";
import menu from "../../assets/images/menu.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross2 } from "react-icons/rx";

const SearchBox = () => {
  const [show, setShow] = useState(true);
  const [leftWidth, setLeftWidth] = useState("w-[310px]");
  const [rightWidth, setRightWidth] = useState("w-full");
  const [index, setDropdown] = useState(false);
  const [text, setText] = useState(false);
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

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
    {
      id: 1,
      name: "Kacha Bazar (172)",
    },
    {
      id: 2,
      name: "Vegetables  (151)",
    },
    {
      id: 3,
      name: "Daal / Chal (199)",
    },
    {
      id: 4,
      name: "Atta/Maida (1016)",
    },
    {
      id: 5,
      name: "Salt & Sugar (116)",
    },
    {
      id: 6,
      name: "Salt & Sugar (116)",
    },
    {
      id: 7,
      name: "Atta/Maida (1016)",
    },
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

  const ratingColor = (statuss) => {
    if (statuss < 3) {
      return "#F4253F";
    }
    if (statuss < 4) {
      return "#FB641B";
    }
    return "#026C51";
  };

  const clickHandler = (index) => {
    setDropdown(index);
  };
  const handleBtn = (text) => {
    setText(text);
    console.log(text);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      padding: 0,
      margin: 0,
      zIndex: 100,
    },
    EZDrawer__overlay: {
      backgroundColor: "#FB641B",
    },
  };

  return (
    <div className=" flex lg:pl-[94px] md:pl-[94px] pr-4  mt-2">
      <div onClick={() => handleClose(1)} className={``}>
        <div onClick={() => handleClose(1)} className={``}></div>

        <div
          className={`${leftWidth}  lg:w-full lg:block md:block  z-[999]  hidden`}
        >
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
          <div className={`${style.collectionsBoxSideBarShaddow}`}>
            {/* ---------------------filters start---------------- */}
            <div className="lg:hidden md:hidden pt-10 pb-20">
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

            <div className="px-4 pt-4">
              <ul>
                <li className="flex justify-between">
                  <p className="font-semibold text-[18px] pb-4 text-[#001E00] ">
                    All Collecction
                  </p>
                  <Image className="h-2 mt-2 " src={v2} alt="img" />
                </li>
                {show
                  ? vegProducts &&
                    vegProducts
                      .map((vproduct) => {
                        return (
                          <li
                            onClick={() => handleBtn(vproduct.id)}
                            className={` ${
                              text === true
                                ? "mb-[16px] text-2xl font-semibold text-[#026C51] cursor-pointer"
                                : "mb-[16px] text-[14px] lg:text-sm md:text-sm text-xs font-semibold cursor-pointer"
                            } `}
                            key={vproduct.id}
                          >
                            {vproduct.name}
                          </li>
                        );
                      })
                      .slice(0, 5)
                  : vegProducts &&
                    show === false &&
                    vegProducts.map((vproduct) => {
                      return (
                        <li
                          onClick={() => handleBtn(vproduct.id)}
                          className={` ${
                            text === true
                              ? "mb-[16px] text-[14px] lg:text-sm md:text-sm text-xs font-semibold text-[#026C51] cursor-pointer"
                              : "mb-[16px] text-[14px] lg:text-sm md:text-sm text-xs font-semibold cursor-pointer"
                          } `}
                          key={vproduct.id}
                        >
                          {vproduct.name}
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
            <hr className="mb-[16px] border border-[#CDCDCD]" />

            {/*---------- filter section----------- */}

            <div className="px-4">
              <div className=" lg:block md:block hidden">
                <div className="flex items-center justify-between mb-[16px]">
                  <p className="font-semibold text-lg text-[#001E00]">Filters</p>
                  <p
                    className="text-[#287DF3] font-medium cursor-pointer"
                    onClick={handleclearAll}
                  >
                    Clear all
                  </p>
                </div>
                <div>
                  <div id="filter" className="flex flex-wrap gap-2 mb-4">
                    <div className="flex bg-[#F2F3F7] px-2 py-1 text-[14px] text-[#686868] items-center rounded">
                      <span
                        className="mr-1 cursor-pointer"
                        onClick={() => handleCloseSeller(filter.id)}
                      >
                        <RxCross2></RxCross2>
                      </span>
                      <span>{maxValue}</span>{" "}
                    </div>
                    {filters &&
                      filters.map((filter) => {
                        return (
                          <div key={filter.id}>
                            <div className="flex bg-[#F2F3F7] px-2 py-1 text-[14px] text-[#686868] items-center rounded">
                              <span
                                className="mr-1 cursor-pointer"
                                onClick={() => handleCloseSeller(filter.id)}
                              >
                                <RxCross2></RxCross2>
                              </span>
                              <span>{filter.value}</span>{" "}
                            </div>
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
            </div>
            <hr className="mb-[16px] border border-[#CDCDCD]" />

            <div className="px-4">
              <div className="flex justify-between">
                <p className="font-semibold text-lg mb-[16px] text-[#001E00] ">
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
                <select className=" border border-[#CDCDCD] h-[32px] px-2 rounded">
                  <option selected>Min</option>
                </select>
                <p1 className="mx-2">To</p1>
                <select className=" border border-[#CDCDCD] h-[32px] px-2 rounded">
                  <option selected>{maxValue}</option>
                </select>
              </div>
            </div>
            <hr className="mb-[16px] border border-[#CDCDCD]" />

            {/* --------------brand section start----------------- */}

            <div className="">
              <div className="mb-[16px] lg:hidden md:hidden block">
                <div className="flex justify-between">
                  <p className="font-semibold text-lg mb-[16px] text-[#001E00]">
                    Brands
                  </p>
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
            </div>

            {/* --------------brand section end----------------- */}
            <div className="px-4">
              <div className="flex justify-between ">
                <p className="font-semibold mb-[16px] text-lg text-[#001E00]">Seller</p>
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

            <div className="px-4">
              <div className="flex justify-between pb-4">
                <h3 className="font-semibold text-lg text-[#001E00]">Discount</h3>
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
                  <select className=" border border-[#CDCDCD] h-[32px] px-2 rounded">
                    <option selected>Min</option>
                  </select>
                  <p1 className="mx-2">To</p1>
                  <select className=" border border-[#CDCDCD] h-[32px] px-2 rounded">
                    <option selected>{maxValue}</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="mb-[16px] border border-[#CDCDCD]" />

            <div className="px-4">
              <div className="flex justify-between ">
                <p className="font-semibold mb-[16px] text-lg text-[#001E00]">
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
            <hr className="mb-[16px] border border-[#CDCDCD]" />
            {/* ------------brand------------- */}
            <div className="px-4">
              <div className="lg:mb-[16px] md:mb-[16px]  lg:block md:block hidden lg:pb-4 md:pb-4 ">
                <div className="flex justify-between">
                  <p className="font-semibold mb-[16px] text-lg text-[#001E00]">
                    Brands
                  </p>
                  <Image className="h-2 mt-2" src={v2} alt="img" />
                </div>
                <div className="border border-[#CDCDCD] rounded h-[32px] w-[98px] flex items-center justify-between px-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    className="accent-[#026C51]"
                  />
                  <label
                    for="vehicle1"
                    className="text-[14px] font-semibold text-[#001E00] "
                  >
                    No Brand
                  </label>
                  <br />
                </div>
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
        <div className="flex items-center justify-between my-2 px-5">
          <div className="flex items-center">
            <p className="text-base font-medium lg:block md:block hidden">
              Home /
            </p>
            <p className="text-[#287DF3] text-base font-medium pl-1">
              {" "}
              Search Results
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label
              for=""
              className="whitespace-nowrap lg:text-lg md:text-lg text-base font-semibold text-[#001E00]"
            >
              Sort By:
            </label>
            <select
              id=""
              className="border border-[#686868] rounded lg:w-[161px] lg:h-[40px] px-3 md:w-[161px] md:h-[40px] w-[110px] h-6 lg:text-base md:text-base text-xs"
            >
              <option
                className="border-none text-[#686868] lg:text-base md:text-base text-xs px-3"
                selected
              >
                Best Match
              </option>
              <option
                className="border-none text-[#686868] lg:text-base md:text-base text-xs px-3"
                value="US"
              >
                Price low to High
              </option>
              <option
                className="border-none text-[#686868] lg:text-base md:text-base text-xs px-3"
                value="CA"
              >
                Price High to low
              </option>
            </select>

            <div>
              <button
                className="lg:hidden md:hidden block"
                onClick={toggleDrawer}
              >
                <Image src={menu} alt="" width={18} height={17}></Image>
              </button>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                style
                direction="right"
                size={317}
                overlayOpacity={0.6}
                className="bla bla bla overflow-scroll lg:hidden md:hidden block scrollbar-hide w-[317px]"
              >
                <div>
                  <div className="pt-[42px]">
                    <div className="px-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-base text-[#001E00] ">
                          Filters
                        </p>
                        <p
                          className="text-[#287DF3] text-sm font-medium cursor-pointer"
                          onClick={handleclearAll}
                        >
                          Clear all
                        </p>
                      </div>
                      <div className="pt-3">
                        <div id="filter" className="flex flex-wrap gap-2 mb-4">
                          <p className="flex bg-[#F2F3F7] px-2 py-1 text-[14px] text-[#686868] items-center rounded">
                            <span
                              className="mr-1 cursor-pointer"
                              onClick={() => handleCloseSeller(filter.id)}
                            >
                              <RxCross2></RxCross2>
                            </span>
                            <span>{maxValue}</span>{" "}
                          </p>
                          {filters &&
                            filters.map((filter) => {
                              return (
                                <div key={filter.id} className="">
                                  <div className="flex bg-[#F2F3F7] px-2 py-1 text-[14px] text-[#686868] items-center rounded">
                                    <span
                                      className="mr-1 cursor-pointer"
                                      onClick={() =>
                                        handleCloseSeller(filter.id)
                                      }
                                    >
                                      <RxCross2></RxCross2>
                                    </span>
                                    <span>{filter.value}</span>{" "}
                                  </div>
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
                                      onClick={() =>
                                        handleCloseLocation(loc.id)
                                      }
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
                  </div>
                  <hr className="mb-4 border-[#B7B7B7]" />

                  <div>
                    <div className="px-4">
                      <ul>
                        <li className="flex justify-between">
                          <p className="font-semibold text-base pb-2 text-[#001E00] ">
                            All Collecction
                          </p>
                          <Image className="h-2 mt-2 " src={v2} alt="img" />
                        </li>
                        {show
                          ? vegProducts &&
                            vegProducts
                              .map((vproduct) => {
                                return (
                                  <li
                                    onClick={() => handleBtn(vproduct.id)}
                                    className={` ${
                                      text === true
                                        ? "mb-2 text-2xl font-semibold text-[#026C51] cursor-pointer"
                                        : "mb-2 lg:text-sm md:text-sm text-xs font-medium cursor-pointer"
                                    } `}
                                    key={vproduct.id}
                                  >
                                    {vproduct.name}
                                  </li>
                                );
                              })
                              .slice(0, 5)
                          : vegProducts &&
                            show === false &&
                            vegProducts.map((vproduct) => {
                              return (
                                <li
                                  onClick={() => handleBtn(vproduct.id)}
                                  className={` ${
                                    text === true
                                      ? "mb-2 lg:text-sm md:text-sm text-xs font-medium text-[#026C51] cursor-pointer"
                                      : "mb-2 lg:text-sm md:text-sm text-xs font-medium cursor-pointer"
                                  } `}
                                  key={vproduct.id}
                                >
                                  {vproduct.name}
                                </li>
                              );
                            })}

                        {show ? (
                          <li
                            className=" text-xs font-medium mb-2 text-[#287DF3] cursor-pointer"
                            onClick={() => setShow(false)}
                          >
                            {vegProducts.length - 5} more...
                          </li>
                        ) : (
                          <li
                            className="cursor-pointer text-[#287DF3] font-semibold text-[14px] mb-2"
                            onClick={() => setShow(true)}
                          >
                            show less
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <hr className="mb-4 border-[#B7B7B7]" />
                  <div className="px-4">
                    <div className="flex justify-between">
                      <p className="font-semibold mb-2 text-[#001E00] ">
                        Prices
                      </p>
                      <Image className="h-2 mt-2" src={v2} alt="img" />
                    </div>
                    <div className="container mb-2 range">
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
                    <div className="flex justify-between mb-4">
                      <select className=" border border-[#B7B7B7] w-[53px] h-[24px] px-1 rounded text-xs">
                        <option selected>Min</option>
                      </select>
                      <p1 className="mx-2">To</p1>
                      <select className="border border-[#B7B7B7] w-[83px] h-[24px] px-1 rounded text-xs">
                        <option selected>{maxValue}</option>
                      </select>
                    </div>
                  </div>
                  <hr className="mb-4 border-[#B7B7B7]" />

                  <div className="px-4">
                    <div className="mb-[16px] lg:hidden md:hidden block">
                      <div className="flex justify-between">
                        <p className="font-semibold mb-[16px] text-base text-[#001E00]">
                          Brands
                        </p>
                        <Image className="h-2 mt-2" src={v2} alt="img" />
                      </div>
                      <div className="border border-[#CDCDCD] rounded h-[32px] w-[106px] flex items-center px-2">
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
                          className="text-xs ml-2 text-[#001E00] font-medium"
                        >
                          {" "}
                          New Seller
                        </label>
                        <br />
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4 border-[#B7B7B7]" />
                  <div className="px-4">
                    <div className="flex justify-between ">
                      <p className="font-semibold mb-[16px] text-[#001E00]">
                        Seller
                      </p>
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
                            className="text-xs ml-2 text-[#001E00] font-medium"
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
                            className="text-xs ml-2  text-[#001E00]  font-medium"
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
                            className="text-xs ml-2 text-[#001E00]  font-medium"
                          >
                            {" "}
                            Assured Seller
                          </label>
                          <br />
                        </div>
                      </form>
                    </div>
                  </div>
                  <hr className="mb-4 border-[#B7B7B7]" />

                  <div className="px-4">
                    <div className="flex justify-between ">
                      <p className="font-medium mb-[16px] text-[#001E00]">
                        Location
                      </p>
                      <Image className="h-2 mt-2" src={v2} alt="img" />
                    </div>

                    <div className="mb-[16px]">
                      <form>
                        <div className="flex gap-3 mb-4">
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
                              className="text-xs font-semibold text-[#001E00]"
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
                              className="text-xs -ml-1 font-semibold text-[#001E00]"
                            >
                              Chittagong
                            </label>
                            <Image className="" src={v3} alt="img" />
                          </div>
                        </div>
                        <div className="flex gap-3 mb-4">
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
                              className="text-xs font-semibold text-[#001E00]"
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
                              className="text-xs -ml-5 font-semibold text-[#001E00]"
                            >
                              Rajshahi
                            </label>
                            <Image className="" src={v3} alt="img" />
                          </div>
                        </div>
                        <div className="flex gap-3 mb-4">
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
                              className="text-xs font-semibold text-[#001E00]"
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
                              className="text-xs -ml-5 font-semibold text-[#001E00]"
                            >
                              Rangpur
                            </label>
                            <Image className="" src={v3} alt="img" />
                          </div>
                        </div>
                        <div className="flex gap-3 mb-4">
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
                              className="text-xs font-semibold text-[#001E00]"
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
                              className="text-xs font-semibold text-[#001E00]"
                            >
                              Mymensingh
                            </label>
                            <Image className="" src={v3} alt="img" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="flex pl-[35px] gap-6 mb-20 mt-6 ">
                    <button className="w-[99px] h-10 border border-[#B7B7B7] rounded text-[#B7B7B7] font-medium">
                      Cancel
                    </button>
                    <button className="w-[99px] h-10 bg-[#FB641B] rounded text-[#ffffff] font-medium">
                      Submit
                    </button>
                  </div>
                </div>
              </Drawer>
            </div>  
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 px-5">
          {/* sm:w-[41%] md:w-[93%] lg:w-[47%] xl:w-[33%]  */}
          {searchProducts &&
            searchProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className={`${style.collectionCard} lg:w-[222px] md:w-[222px] w-full rounded`}
                >
                  <div className="relative mx-auto w-full">
                    <div className="flex justify-center">
                      <Image
                        className="object-cover lg:w-[222px] md:w-[222px] w-[180px] h-[154px]"
                        src={product.img}
                        width={220}
                        height={154}
                        alt="Shoes"
                      />
                    </div>
                    <div
                      onClick={() => clickHandler(product.id)}
                      className={`w-7 h-7 flex justify-center items-center rounded-full ${style.love} absolute right-3 top-3`}
                    >
                      {index === product.id ? (
                        <Image
                          className="p-1 w-[26px] h-[26px] mt-1 cursor-pointer"
                          src={hearted}
                          alt=""
                        ></Image>
                      ) : (
                        <Image
                          className="p-1 w-[26px] h-[26px] mt-1 cursor-pointer"
                          src={hearts}
                          alt=""
                        ></Image>
                      )}
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
                        <div
                          style={{
                            backgroundColor: ratingColor(product.rating),
                          }}
                          className="rounded-[2px] px-[2] w-[35px] h-[16px] flex items-center justify-between mr-2"
                        >
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
                      <div className="flex justify-center">
                        <button className="w-[186px] h-[38px] bg-[#FB641B] text-white flex justify-center items-center rounded-lg">
                          <p className="pr-1">Add to Cart</p>
                          <Image
                            src={shoping}
                            width={24}
                            height={20}
                            alt=""
                          ></Image>
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

export default SearchBox;
