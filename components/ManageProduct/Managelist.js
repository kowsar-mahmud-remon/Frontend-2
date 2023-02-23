import Link from "next/link";

const ManageList = ({ menu, setActive, active, setItem, products,item }) => {
  
  const handleMenu = (menu) => {
    setActive(menu);
    if (menu.text == "All") {
      setItem(products);
      return;
    }

    const allData = products.filter((user) => user.status === menu.text);
    

    setItem(allData);
  };
  

  return (
    <div className="text-center text-[#707070] text-[16px]">
      <div
        className={`${
          menu?.text === active?.text
            ? "bg-[#FFFFFF] border-b-[2px]  border-[#FB641B] whitespace-nowrap  w-[80%] mx-auto  text-[#FB641B] font-semibold"
            : ""
        }`}
      >
        <button
          className=" w-full text-base  py-[13px]"
          onClick={() => handleMenu(menu)}
          href={menu?.href}
        >
          
          {menu?.text + "(0)" } 
        </button>
      </div>
    </div>
  );
};

export default ManageList;
