import Image from "next/image";
import style from "/styles/componentsStyles/box-shaddow.module.css";
import arrow from "/assets/images/arrow.png";
import plus from "/assets/images/plus.png";
import AddressBookModal from "../../components/AddressBook/AddressBookModal";
import EditAddress from "../../components/AddressBook/EditAddress";
import AddNewAddress from "../../components/AddressBook/AddNewAddress";
import { useRouter } from "next/router";
import YourDeliveryModal from "./YourDeliveryModal";
import EditYourDelivery from "./CustomModalAddNew/EditYourDelivery";
import { useState } from "react";
import DeletedAndEditModal from "./RawCusotomModal/DeletedAndEditModal";

const AddressBook = () => {
  const [edit, setEdit] = useState(false);
  const router = useRouter();

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(true);
  };

  const editClose = () => {
    setEdit(false);
  };

  const addressUser = [
    {
      id: 1,
      name: "Abdul Korim",
      number: "+88 012 342 450 45",
      address: "Ramgonj Tower-16/14, Giridhara, Matuail, Kodomtali, Dhaka-1362",
      home: "Home",
      shipingAddress: "Default Shipping Address",
      shipingAddress2: "Default Shipping Address",
    },
    {
      id: 2,
      name: "Abdul Korim",
      number: "+88 012 342 450 45",
      address: "Bashundhara City Shopping Complex, 3 No Tejturi Bazar West",
      home: "Office",
      shipingAddress: "",
      shipingAddress2: "",
    },
  ];

  return (
    <>
      <AddressBookModal></AddressBookModal>
      <AddNewAddress></AddNewAddress>
      <DeletedAndEditModal
        editClose={editClose}
        edit={edit}
      ></DeletedAndEditModal>
      <YourDeliveryModal></YourDeliveryModal>
      <div className=" max-w-[924px] mx-[24px] lg:mx-[0px]  lg:mr-[20px]">
        <div className="flex justify-between lg:mb-8  md:mb-8 mb-2">
          <div className="flex items-center">
            <button
              className="flex items-center lg:hidden"
              onClick={() => router.back()}
            >
              <Image
                className="w-4 lg:-mr-4 md:-mr-4 mr-3 lg:ml-0 md:ml-0 ml-2 lg:invisible md:invisible visible"
                src={arrow}
                alt=""
              ></Image>
              <h1 className="lg:text-2xl md:text-2xl lg:-mt-5 -mt-0 text-xl font-semibold lg:text-[#FB641B] md:text-[#FB641B] text-[#001E00] whitespace-nowrap">
                Address Book
              </h1>
            </button>
            <div className="lg:block hidden">
              <Image
                className="w-4 lg:-mr-4 md:-mr-4 mr-3 lg:ml-0 md:ml-0 ml-2 lg:invisible md:invisible visible"
                src={arrow}
                alt=""
              ></Image>
              <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold lg:text-[#FB641B] md:text-[#FB641B]  lg:-mt-5 -mt-0 text-[#001E00] whitespace-nowrap">
                Address Book
              </h1>
            </div>
          </div>

          <div className="flex items-center lg:visible md:visible invisible">
            <Image className="w-[14px] mr-2" src={plus} alt="" />
            <button className="text-base text-[#686868] font-medium">
              <label htmlFor="your-delivary" className="cursor-pointer">
                Add New Address
              </label>
            </button>
          </div>
        </div>
        <div
          className={`lg:p-6 md:p-6 rounded-lg flex flex-wrap lg:pb-72 gap-5 bg-[#FFFFFF] lg:shadow-[0px_6px_28px_rgba(0,0,0,0.16)] md:shadow-[0px_6px_28px_rgba(0,0,0,0.16)]`}
        >
          {addressUser &&
            addressUser.map((user) => {
              const {
                id,
                name,
                number,
                address,
                home,
                shipingAddress,
                shipingAddress2,
              } = user;
              return (
                <>
                  <div
                    className={`p-4 rounded-lg lg:border-[#707070] lg:border md:border-[#707070] md:border   address-card  lg:w-[428px] md:w-[428px] w-[376px] ${style.resBoxShaddow}`}
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="font-medium text-base text-[#001E00] ">
                        {name}
                      </h1>
                      <div>
                        <button onClick={() => setEdit(true)}>
                          <label
                            htmlFor="my-modal-1"
                            className="text-[#287DF3] bg-[#F2F3F7] text-sm px-2 rounded cursor-pointer"
                          >
                            Edit
                          </label>
                        </button>
                      </div>
                    </div>
                    <p className="py-3 text-[#686868]">++88 012 342 450 45</p>
                    <p className="text-[#686868]">{address}</p>

                    <div className="flex gap-3 flex-wrap mt-5">
                      <p className="text-[#287DF3] bg-[#F2F3F7] text-sm px-2 rounded cursor-pointer">
                        {home}
                      </p>
                      {shipingAddress ? (
                        <p className="text-[#707070] bg-[#F2F3F7]  text-[12px]  px-2 rounded">
                          {shipingAddress}
                        </p>
                      ) : (
                        ""
                      )}
                      {shipingAddress2 ? (
                        <p className="text-[#707070] bg-[#F2F3F7]  text-[12px]  px-2 rounded">
                          {shipingAddress2}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          {/* <div className="p-4 rounded-lg border-[#707070] border address-card  w-[428px] ">
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-base text-[#001E00] ">
                Abdul Korim
              </h1>
              <div>
                <button onClick={handleModal}>
                  <label
                    htmlFor="my-modal-1"
                    className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer"
                  >
                    Edit
                  </label>
                </button>
              </div>
            </div>
            <p className="py-3 text-[#686868]">++88 012 342 450 45</p>
            <p className="text-[#686868] ">
              Bashundhara City Shopping Complex, 3 No Tejturi Bazar West
            </p>

            <div className="flex mt-5">
              <p className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer">
                Office
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex items-center mt-[24px] lg:mt-[0px] lg:invisible md:invisible visible">
          <Image className="w-[14px] mr-2" src={plus} alt="" />
          <button className="text-base text-[#686868] font-medium">
            <label htmlFor="your-delivary" className="cursor-pointer">
              Add New Address
            </label>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddressBook;
