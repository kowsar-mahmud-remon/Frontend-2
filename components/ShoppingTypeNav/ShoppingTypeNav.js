

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
            <div key={index} className="ml-6">
              <button
                className="py-3 px-6 rounded-full bg-[#F2F3F7]"
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ShoppingTypeNav;