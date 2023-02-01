const AddressBook = () => {
  return (
    <div className="w-[924px] mx-auto my-7">
      <div className="flex justify-between mb-8">
        <h1 className="text-2xl text-[#FB641B]">Address Book</h1>
        <h1 className="text-base text-[#686868] cursor-pointer">
          <span className="text-[#F4253F]">+</span> Add New Address
        </h1>
      </div> 
      <div className="card p-6 mx-auto grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 pb-72 rounded-lg h-[479px] bg-[#FFFFFF] shadow-lg">
        <div className="p-4 mb-2 rounded-lg border-[#707070] border address-card mr-4 w-[428px]">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-base text-[#001E00] ">
              Abdul Korim
            </h1>
            <div>
              <p className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer">
                Edit
              </p>
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
        <div className="p-4 mb-2 rounded-lg border-[#707070] border address-card mr-4 w-[428px]">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-base text-[#001E00] ">
              Abdul Korim
            </h1>
            <div>
              <p className="text-[#287DF3] bg-[#F2F3F7] text-[12px] px-2 rounded cursor-pointer">
                Edit
              </p>
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
    </div>
  );
};

export default AddressBook;
