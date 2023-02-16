/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import supportIcon from "../../assets/images/support_Icon.png";
import modalLogo from "../../assets/images/homeSlider/Banglar BigBazar Full logo-01 2.png";
import flagBD from "../../assets/images/flag(BD).png";
import one from "../../assets/images/mobleBottomNav/1.png";
import two from "../../assets/images/mobleBottomNav/2.png";
import three from "../../assets/images/mobleBottomNav/3.png";
import four from "../../assets/images/mobleBottomNav/4.png";
import five from "../../assets/images/mobleBottomNav/5.png";
import six from "../../assets/images/mobleBottomNav/6.png";
import seven from "../../assets/images/mobleBottomNav/7.png";
import eight from "../../assets/images/mobleBottomNav/8.png";
import nine from "../../assets/images/mobleBottomNav/9.png";
import ten from "../../assets/images/mobleBottomNav/10.png";
import eleven from "../../assets/images/mobleBottomNav/11.png";
import twelve from "../../assets/images/mobleBottomNav/12.png";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

   // to close the modal when click the link
   function handleClick() {
    setShowModal(false);
    setIsOpen(false);
  }

  const options = [
    {
      name: "Home",
      href: "/",
      img: (
        <>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0678 6.13314L7.28412 0.221895C7.21438 0.151584 7.13141 0.0957768 7.04 0.0576923C6.94858 0.0196078 6.85053 0 6.7515 0C6.65248 0 6.55443 0.0196078 6.46301 0.0576923C6.3716 0.0957768 6.28863 0.151584 6.21889 0.221895L0.435178 6.14064C0.295226 6.28172 0.184696 6.4492 0.110006 6.63335C0.035315 6.8175 -0.00204776 7.01465 8.65414e-05 7.21336V13.4997C-0.000494699 13.8837 0.146197 14.2533 0.409954 14.5324C0.67371 14.8115 1.03445 14.9789 1.41788 15H3.75087V8.24858C3.75087 8.04963 3.82991 7.85882 3.97059 7.71814C4.11127 7.57746 4.30208 7.49842 4.50103 7.49842H9.00198C9.20093 7.49842 9.39174 7.57746 9.53242 7.71814C9.6731 7.85882 9.75214 8.04963 9.75214 8.24858V15H12.0851C12.4686 14.9789 12.8293 14.8115 13.0931 14.5324C13.3568 14.2533 13.5035 13.8837 13.5029 13.4997V7.21336C13.5035 6.81048 13.3475 6.42314 13.0678 6.13314Z"
              fill="#B7B7B7"
            />
          </svg>
        </>
      ),
    },
    {
      name: "Orders",
      href: "/myOrders",
      img: (
        <>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 2.80497C0 1.77565 0.837917 0.940578 1.87497 0.937509V3.28594C1.87497 3.54839 2.0887 3.75003 2.35312 3.75003H10.7719C11.0363 3.75003 11.2501 3.54186 11.2501 3.28594V0.937509H11.2444C11.7414 0.935983 12.2187 1.13184 12.5713 1.48204C12.9239 1.83223 13.1231 2.30807 13.1251 2.80497V13.1325C13.1251 14.1637 12.2842 15 11.2444 15H1.88088C1.3839 15.0015 0.906608 14.8057 0.554014 14.4555C0.201419 14.1053 0.00220071 13.6294 0.000219685 13.1325L0 2.80497ZM2.8125 7.03125C2.8125 7.28258 3.02241 7.50003 3.28116 7.50003H9.84365C10.0967 7.50003 10.3123 7.29 10.3123 7.03125C10.3123 6.78003 10.1024 6.56258 9.84365 6.56258H3.28116C3.02808 6.56258 2.8125 6.7725 2.8125 7.03125ZM2.8125 10.7812C2.8125 11.0325 3.02241 11.25 3.28116 11.25H9.84365C10.0967 11.25 10.3123 11.04 10.3123 10.7812C10.3123 10.53 10.1024 10.3125 9.84365 10.3125H3.28116C3.02808 10.3125 2.8125 10.5225 2.8125 10.7812ZM9.84374 8.4375H3.28125C3.02239 8.4375 2.81258 8.64731 2.81258 8.90616C2.81258 9.16513 3.02239 9.37494 3.28125 9.37494H9.84374C10.1026 9.37494 10.3124 9.16513 10.3124 8.90616C10.3124 8.64731 10.1026 8.4375 9.84374 8.4375Z"
              fill="#B7B7B7"
            />
          </svg>
        </>
      ),
    },
    {
      name: "Categories",
      href: "/mobileCategories",
      img: (
        <>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8.22656"
              width="6.77396"
              height="6.77396"
              rx="1.32752"
              fill="#B7B7B7"
            />
            <rect
              x="8.22656"
              y="8.22656"
              width="6.77396"
              height="6.77396"
              rx="1.32752"
              fill="#B7B7B7"
            />
            <rect
              width="6.77396"
              height="6.77396"
              rx="1.32752"
              fill="#B7B7B7"
            />
            <rect
              y="8.22656"
              width="6.77396"
              height="6.77396"
              rx="1.32752"
              fill="#B7B7B7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6099 8.70898C11.8771 8.70898 12.0937 8.92561 12.0937 9.19284L12.0937 14.0314C12.0937 14.2986 11.8771 14.5152 11.6099 14.5152C11.3427 14.5152 11.126 14.2986 11.126 14.0314L11.126 9.19284C11.126 8.92561 11.3427 8.70898 11.6099 8.70898Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5156 11.6138C14.5156 11.881 14.299 12.0977 14.0318 12.0977L9.19323 12.0977C8.926 12.0977 8.70937 11.881 8.70937 11.6138C8.70937 11.3466 8.926 11.1299 9.19323 11.1299L14.0318 11.1299C14.299 11.1299 14.5156 11.3466 14.5156 11.6138Z"
              fill="white"
            />
          </svg>
        </>
      ),
    },
    {
      name: "Cart",
      href: "/",
      img: (
        <>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9639 2.92861C15.8388 2.73218 15.6246 2.5893 15.3924 2.5893L4.10702 2.0714L3.71417 0.53573C3.62487 0.214375 3.35707 0 3.01777 0L0.714201 0.000124558C0.321355 0.000124558 0 0.32148 0 0.714325C0 1.10717 0.321355 1.42853 0.714201 1.42853H2.46412L4.42841 9.07115L3.94637 11.0712C3.89281 11.2854 3.94637 11.5176 4.07143 11.6783C4.2143 11.8569 4.41074 11.9461 4.62495 11.9461H13.3747C13.7675 11.9461 14.0889 11.6247 14.0889 11.2319C14.0889 10.839 13.7675 10.5177 13.3747 10.5177H5.5535L5.74993 9.69621L12.8926 9.3569C13.1604 9.33909 13.3926 9.17829 13.4997 8.94623L15.9995 3.58925C16.1068 3.39282 16.0888 3.14284 15.9639 2.92859L15.9639 2.92861Z"
              fill="#B7B7B7"
            />
          </svg>
        </>
      ),
    },
    {
      name: "Menu",
      href: "",
      img: (
        <>
          <svg
            onClick={() => setIsOpen(!isOpen)}
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.59062 0H17.579C18.4152 0 19.0993 0.684173 19.0993 1.52031C19.0993 2.35644 18.4152 3.04061 17.579 3.04061H1.59062C0.754486 3.04061 0.0703125 2.35644 0.0703125 1.52031C0.0703125 0.684173 0.754486 0 1.59062 0Z"
              fill="#B7B7B7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.59062 5.98047H17.579C18.4152 5.98047 19.0993 6.66464 19.0993 7.50078C19.0993 8.33691 18.4152 9.02108 17.579 9.02108H1.59062C0.754486 9.02108 0.0703125 8.33691 0.0703125 7.50078C0.0703125 6.66464 0.754486 5.98047 1.59062 5.98047Z"
              fill="#B7B7B7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.59062 11.959H17.579C18.4152 11.959 19.0993 12.6432 19.0993 13.4793C19.0993 14.3154 18.4152 14.9996 17.579 14.9996H1.59062C0.754486 14.9996 0.0703125 14.3154 0.0703125 13.4793C0.0703125 12.6432 0.754486 11.959 1.59062 11.959Z"
              fill="#B7B7B7"
            />
          </svg>
        </>
      ),
    },
  ];
 
  return (
    <div className="w-full md:hidden relative ">
      <div className="fixed left-0 bottom-0 z-[150] w-full bg-white boxShadowTop">
        <div className="h-14 flex justify-center items-center">
          {options.map((option, index) => (
            <div key={index} className="mx-auto ">
              <Link
                href={option.href}
                className="text-[8px] flex flex-col justify-center items-center hover:text-[#287DF3]"
              >
                <div>{option.img}</div>
                {option.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* for side menu */}
      <div className="">
        <nav className="relative  z-[101] flex items-center justify-between px-4 py-0   w-full top-0 shadow">
          <div
            className={`${
              isOpen ? "" : "hidden"
            } md:flex md:items-center md:w-auto absolute right-[0px] top-[0px]   bg-white w-full`}
            style={{
              transition: "all 0.1s ease",
              transform: `translateX(${isOpen ? "0" : "100%"})`,
            }}
          >
            {/* menu items */}
            <div className="text-sm md:flex-grow py-3 px-3 mt-[40px] ">
              <p className="font-bold text-[20px]">Menu</p>
              <Link
                href="/profile"
                className="flex items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <Image src={one} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  Profile
                </span>
              </Link>
              <Link
                href="/#"
                className="flex justify-between items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <div className="flex">
                  <Image src={two} width={24} height={24} alt="" />
                  <span className="text-[#001E00] text-[16px] ml-[16px]">
                    Language
                  </span>
                </div>
                <select className="bg-transparent text-end text-[14px] text-[#686868]">
                  <option value="bn">English</option>
                  <option value="bn">Bangla</option>
                </select>
              </Link>
              <Link
                href="/acounttype"
                className="flex justify-between items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <div className="flex">
                  <Image src={three} width={24} height={24} alt="" />
                  <span className="text-[#001E00] text-[16px] ml-[16px]">
                    Account Type
                  </span>
                </div>
                <span className="text-end text-[14px] text-[#686868]">
                  General Shopping
                </span>
              </Link>
              <Link
                href="/trackorder"
                className="flex items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <Image src={four} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  Track Order
                </span>
              </Link>
              <Link
                href="/bbsaffiliate"
                className="flex items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <Image src={five} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  BBS Affiliate
                </span>
              </Link>
              <Link
                href="/support"
                className="flex items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <Image src={six} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  Support
                </span>
              </Link>
              <Link
                href="/faq"
                className="flex items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <Image src={seven} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  FAQ
                </span>
              </Link>
              <Link
                href="/livechat"
                className="flex items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <Image src={eight} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  Live Chat
                </span>
              </Link>
              <Link
                href="/about"
                className="flex items-center mt-[16px]  border-b border-[#F2F2F2] pb-[16px]"
              >
                <Image src={nine} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  About
                </span>
              </Link>
              <label
                onClick={() => setShowModal(true)}
                href="/logout"
                className="flex items-center mt-[16px]"
              >
                <Image src={ten} width={24} height={24} alt="" />
                <span className="text-[#001E00] text-[16px] ml-[16px]">
                  Log Out
                </span>
              </label>

              {/* for login modal */}

              <div>
                {showModal && (
                  <div className="fixed inset-0   h-screen bg-black  bg-opacity-60 ">
                    {showModal && (
                      <div className="flex flex-col mt-[50%]">
                        <div
                          className="bg-white  rounded-md w-[90%] mx-auto pb-[69px]"
                          
                          ref={modalRef}
                        >
                          <Image
                            className="mb-[60px] mt-[45px] mx-auto"
                            src={modalLogo}
                            width={174}
                            height={51}
                            alt=""
                          />
                          <div className="grid grid-cols-1 gap-2 items-center justify-center ">
                            <Link
                              className="btn bg-[#FB641B] text-white text-[16px] mb-[12px] w-[178px] mx-auto"
                              href="/login"
                              onClick={() => handleClick("")}
                            >
                              Login
                            </Link>
                            <p className="text-[#688686] text-center mb-[24px] text-[18px]">
                              Already have an account?
                              <Link
                                className="text-[#287DF3] ml-[3px]"
                                href="/login"
                                onClick={() => handleClick("")}
                              >
                                Login
                              </Link>{" "}
                            </p>
                            <Link
                              className="btn bg-[#FB641B] text-white  text-[16px] mb-[12px] w-[178px] mx-auto "
                              href="/registation"
                              onClick={() => handleClick("")}
                            >
                              Register
                            </Link>
                            <p className="text-[#001E00] text-center mb-[30px] text-[18px]">
                              You have no account?{" "}
                              <Link
                                className="text-[#287DF3] ml-[3px] "
                                href="/login"
                                onClick={() => handleClick("")}
                              >
                                Register
                              </Link>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* for blur */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 blur-md" /> */}
              <div className="flex justify-between mt-[54px] mb-[160px]">
                <Link href="/#">
                  <Image src={eleven} width={179} height={56} alt="" />
                </Link>
                <Link href="/#">
                  <Image src={twelve} width={179} height={56} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavBar;
