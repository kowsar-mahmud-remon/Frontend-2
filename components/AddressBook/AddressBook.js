import Image from "next/image";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import arrow from "/assets/images/arrow.png";
import plus from "/assets/images/plus.png";
import AddressBookModal from "../../components/AddressBook/AddressBookModal";
import EditAddress from "../../components/AddressBook/EditAddress";
import AddNewAddress from "../../components/AddressBook/AddNewAddress";
import { useRouter } from "next/router";

const AddressBook = () => {
  const router = useRouter()
  return (
    <>
      <AddressBookModal></AddressBookModal>
      <AddNewAddress></AddNewAddress>
      <EditAddress></EditAddress>
      <div className="lg:w-[924px] md:w-[924px] w-full mx-auto my-7">
        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <button className="flex items-center lg:hidden block" onClick={() => router.back()}>
              <Image
                className="w-4 lg:-mr-4 md:-mr-4 mr-3 lg:ml-0 md:ml-0 ml-2 lg:invisible md:invisible visible"
                src={arrow}
                alt=""
              ></Image>
              <h1 className="text-2xl font-semibold lg:text-[#FB641B] md:text-[#FB641B] text-[#001E00]">
                Address Book
              </h1>
            </button>
            <div className="lg:block hidden">
              <Image
                className="w-4 lg:-mr-4 md:-mr-4 mr-3 lg:ml-0 md:ml-0 ml-2 lg:invisible md:invisible visible"
                src={arrow}
                alt=""
              ></Image>
              <h1 className="text-2xl font-semibold lg:text-[#FB641B] md:text-[#FB641B] text-[#001E00]">
                Address Book
              </h1>
            </div>
          </div>

          <div className="flex items-center lg:visible md:visible invisible">
            <Image className="w-[14px] mr-2" src={plus} alt="" />
            <button className="text-base text-[#686868] font-medium">
              <label htmlFor="my-modal-2" className="cursor-pointer">
                Add New Address
              </label>
            </button>
          </div>
        </div>
        <div
          className={`p-6 w-full grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 pb-72 rounded-lg h-[479px] bg-[#FFFFFF] ${style.boxshaddow}`}
        >
          <div className="p-4 mb-2 rounded-lg border-[#707070] border address-card mr-4 lg:w-[428px] md:w-[428px] w-full">
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-base text-[#001E00] ">
                Abdul Korim
              </h1>
              <div>
                <label
                  htmlFor="my-modal-1"
                  className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer"
                >
                  Edit
                </label>
              </div>
            </div>
            <p className="py-3 text-[#686868]">++88 012 342 450 45</p>
            <p className="text-[#686868]">
              Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362
            </p>

            <div className="flex mt-5">
              <p className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer">
                Home
              </p>
              <p className="text-[#707070] bg-[#F2F3F7] text-[12px]  px-2 rounded ml-4">
                Default Shipping Address
              </p>
              <p className="text-[#707070] text-[12px] bg-[#F2F3F7] px-2 rounded ml-4">
                Default Shipping Address
              </p>
            </div>
          </div>
          <div className="p-4 mb-2 rounded-lg border-[#707070] border address-card mr-4 lg:w-[428px] md:w-[428px] w-full">
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-base text-[#001E00] ">
                Abdul Korim
              </h1>
              <div>
                <label
                  htmlFor="my-modal-1"
                  className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer"
                >
                  Edit
                </label>
              </div>
            </div>
            <p className="py-3 text-[#686868]">++88 012 342 450 45</p>
            <p className="text-[#686868]">
              Bashundhara City Shopping Complex, 3 No Tejturi Bazar West
            </p>

            <div className="flex mt-5">
              <p className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer">
                Office
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:invisible md:invisible visible">
          <Image className="w-[14px] mr-2" src={plus} alt="" />
          <button className="text-base text-[#686868] font-medium">
            <label htmlFor="my-modal-2" className="cursor-pointer">
              Add New Address
            </label>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddressBook;
