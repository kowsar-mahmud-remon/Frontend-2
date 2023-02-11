

const ShoppingTypeNav = () => {
    const options = [
      "General Shopping",
      "Instant Shopping",
      "Live Shopping",
      "Wholesale Shopping",
    ];
    return (
      <div className="h-[88px] border-t-2">
        <div className="flex justify-center items-center h-full">
          {options.map((option, index) => (
            <div key={index} className="md:ml-6 ml-1">
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