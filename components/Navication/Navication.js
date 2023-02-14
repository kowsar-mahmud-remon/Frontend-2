/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/componentsStyles/Navication.module.css";
import logo from "../../assets/images/logo/main_logo.png";
import logoDis from "../../assets/images/logo/main_logo.png";
import flagBD from "../../assets/images/flag(BD).png";
import supportIcon from "../../assets/images/support_Icon.png";
import advertise from "../../assets/images/navication/add.png";
import modalLogo from "../../assets/images/homeSlider/Banglar BigBazar Full logo-01 2.png";
import Select from "react-select";
import Link from "next/link";
import { RiMapPinFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillMicFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import TopNavBar from "../TopNavBar/TopNavBar";
import ShoppingTypeNav from "../ShoppingTypeNav/ShoppingTypeNav";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useGetMeQuery } from "../../features/auth/authApi";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";
import { store } from "../../store/store";
import { FiSearch } from "react-icons/fi";
import bangladesh from "../../assets/countries/bangladesh.png";
import usa from "../../assets/countries/usa.png";
const Navication = () => {
  const [searchText, setSearchText] = useState("");
  const [recognitionStarted, setRecognitionStarted] = useState(false);
  const [recognitionColor, setRecognitionColor] = useState("#686868");

  const [cookies, setCookie] = useCookies(["banglarBigStore"]);
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);

  const languages = [
    {
      value: "english",
      label: "English",
      image: usa,
    },
    {
      value: "bangla",
      label: "Bangla",
      image: bangladesh,
    },
  ];


  useEffect(() => {
    if (accessToken) {
      fetch("https://banglar-big-store.onrender.com/api/user/getMe", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.user)
          if (data?.user?._id) {
            dispatch(userLoggedIn({ token: cookies?.banglarBigStore, user: data?.user }))
          }
        });
    }

    if (cookies?.banglarBigStore)
      dispatch(userLoggedIn({ token: cookies?.banglarBigStore }));
  }, [dispatch, cookies, accessToken]);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    if (recognitionStarted) {
      recognition.start();
      setRecognitionColor("#026C51");
    }
    recognition.addEventListener("result", (e) => {
      setRecognitionColor("#686868");
      setSearchText(e.results[0][0].transcript);
      setRecognitionStarted(false);
    });
  }, [recognitionStarted]);

  const handleVoice = () => {
    setRecognitionStarted(true);
  };

  // for modal
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleModalClose = (event) => {
    if (showModal && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleModalClose);

    return () => {
      document.removeEventListener("mousedown", handleModalClose);
    };
  }, [handleModalClose]);

  return (
    <section className="shadow-md    z-20 shadow-block-900 relative">
      <TopNavBar />

      <div className="flex items-center h-[80px] gap-3 px-[20px] lg:px-[40px] 2xl:px-[50px]  bg-[#ffffff] justify-between text-[#026C51]">
        <div className="flex justify-center first-line:">
          <Link href="/">
            <Image
              width={180}
              height={48}
              src={logo} alt="img" />

          </Link>
        </div>

        <div className={`${styles.navSearch}`}>
          <div className="flex items-center w-full justify-between bg-transparent">
            <input
              className="pl-[16px] bg-white outline-none border-0"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="what are you looking for...."
            />
            <BsFillMicFill
              onClick={() => handleVoice()}
              className={`mx-3 text-2xl cursor-pointer`}
              style={{ color: recognitionColor }}
            />
          </div>
          <button style={{
            display: "flex"
          }} className="items-center gap-2 justify-center">
            <FiSearch
              className="text-[17px] text-white block md:hidden"
            />
            Search</button>
        </div>
        <div
          className={` ${styles.nanMenu} md:flex item-center items-center hidden`}
        >
          <button className="flex items-center border-2 rounded-md border-[#001E00] py-1 px-4 text-sm xl:text-lg font-semibold">
            <Image src={supportIcon} alt="img" className="mt-[3px] mr-1 " />
            Support
          </button>

          <div className="flex item-center items-center mx-3">
            {/* <Image alt="" src={flagBD} />
            <select className="bg-transparent">
              <option value="bn">BN</option>
              <option value="bn">EN</option>
            </select> */}
            <Select
              className={`${styles.languageChange} border-none flex-1 md:flex-none justify-end`}
              classNamePrefix="select"
              options={languages}
              isSearchable={false}
              styles={{
                control: (base) => ({
                  ...base,
                  border: 0,
                  // This line disable the blue border
                  boxShadow: "none",
                  backgroundColor: "#f7f7f7",
                }),
              }}
              defaultValue={languages[0]}
              formatOptionLabel={(option) => (
                <div className="flex items-center gap-2">
                  {option.image ? (
                    <Image
                      style={{
                        width: "30px",
                        objectFit: "contain",
                      }}
                      src={option.image}
                      alt={option.label}
                      className="w-5 md:max-w-none"
                    />
                  ) : (
                    ""
                  )}
                  <span className="text-[14px] md:text-[14px]">{option.label}</span>
                </div>
              )}
            />
          </div>

          <label
            htmlFor="my-modal-4"
            onClick={() => setShowModal(true)}
            className="flex item-center cursor-pointer"
          >
            Login
            <FaUserAlt className="m-[4px]" />
          </label>

          {/* for login modal */}

          <div>
            {showModal && (
              <div
                className="fixed top-[130px]  right-[45px] bg-white  m-auto p-4 border rounded-md border-black lg:w-[720px] md:w-[500px] "
                ref={modalRef}
              >
                <Image
                  className="mb-[60px] mt-[20px]"
                  src={modalLogo}
                  width={232}
                  height={69}
                  alt=""
                />
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    className="btn bg-[#FB641B] text-white text-[18px]"
                    href="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="btn bg-[#F2F3F7] border border-[#B7B7B7] text-[18px]"
                    href="/registation"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.buttonSearchWraper} bg-[#FFFFFF] hidden`}>
        <div className=" flex h-[40px] w-[90%] bg-[#FFFFFF] border-solid border-2 border-[#026C51] rounded-full  text-lg font-semibold overflow-hidden ">
          <div className="flex items-center border-r-[3px] w-[auto] border-[#026C51] text-[#026C51] my-1">
            <RiMapPinFill className="mx-1 xl:mx-4 text-[20px] sm:text-[30px] " />
            <span className="text-[12px] xl:text-[16px]">Location</span>
            <IoIosArrowDown className="mr-1 xl:mr-5 text-[20px] " />
          </div>
          <div className="flex items-center w-[50%] ml-1 xl:ml-5">
            <input
              type="text"
              placeholder="Finding Your Product...."
              className=" border-none outline-none  w-[100%]"
            />
          </div>
          <div className="flex items-center ml-auto w-[auto]">
            <BsFillMicFill className="mx-1 xl:mx-3 text-md xl:text-2xl" />
            <button className="bg-[green] h-[100%] text-[#fff] text-[12px] xl:text-[16px]x px-2 xl:px-5">
              Search
            </button>
          </div>
        </div>
      </div>
      <ShoppingTypeNav />
    </section>
  );
};

export default Navication;
