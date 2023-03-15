import Image from "next/image";
import { handleCategorySideNav } from "../../features/category/categorySlice";
import CatIcon from "../../assets/images/Group 2399.png";
import { useDispatch } from "react-redux";



const SideNavigationNavBar = () => {
  const dispatch = useDispatch();
  const options = [
    {
      title: "Just For You",
      total: "",
    },
    {
      title: "FlashSale",
      total: "",
    },
    {
      title: "Top Offer",
      total: "300",
    },
    {
      title: "Daily Deals",
      total: "20",
    },
    {
      title: "Recently Viewed",
      total: "300",
    },
    {
      title: "Top ranking",
      total: "",
    },
    {
      title: "New arrivals",
      total: "",
    },
  ];
  return (
    <div className="hidden md:block">
      <div className="mb-6 flex items-center">
        <div className="w-72">
          <button
            className="cursor-pointer flex justify-center items-center py-3 mr-32 px-8 rounded-full border border-[#FB641B]"
            onClick={() => dispatch(handleCategorySideNav())}
          >
            <Image src={CatIcon} alt="icon" />
            <p className="ml-3 text-[18px] font-[660]">Categories</p>
          </button>
        </div>
        <div className="ml-5 w-full flex xl:flex-wrap ">
          {options.map((option, index) => (
            <div key={index} className="xl:mr-6 xl:mb-3 lg:mr-4 lg:mb-2 md:mr-2 md:mb-2">
              <button className="lg:px-[25px] md:px-[10px] lg:py-3 md:py-2 rounded-full btn-shadow">
                <div className="flex justify-center items-center">
                  <p className="md:font-bold font-[600] xl:text-[17px] text-[#001E00] lg:text-[16px] md:text-[14px]">{option.title}</p>
                  {parseInt(option.total) > 200 ? (
                    <p className="text-xs font-semibold text-[#FB641B] ml-1">
                      200+
                    </p>
                  ) : (
                    <p className="text-xs font-bold text-[#FB641B] ml-1">
                      {option.total}
                    </p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavigationNavBar;