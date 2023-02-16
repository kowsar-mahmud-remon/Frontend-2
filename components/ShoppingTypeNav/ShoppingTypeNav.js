

const ShoppingTypeNav = () => {
    const options = [
      "General Shopping",
      "Instant Shopping",
      "Live Shopping",
      "Wholesale Shopping",
    ];
    return (
      <div className="h-[88px] border-t-2">
        <div className="flex justify-center items-center h-full gap-2">
          {options.map((option, index) => (
            <div key={index} className="">
              <button className="md:font-[400] font-[600] md:text-[14px] text-[8px] md:py-3 py-2 md:px-6 px-[10px] rounded-full bg-[#F2F3F7]">
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ShoppingTypeNav;