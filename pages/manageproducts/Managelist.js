import Link from "next/link";

const ManageList = ({
  menu,
  tabname,
  setActive,
  active,
  setItem,
  products,
}) => {
  console.log("prod", products);
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
    <div className="text-center text-[#707070]">
      <div
        className={`${
          menu?.text === active?.text
            ? "bg-[#F2F2F2] border-b-2 border-[#FB641B]  w-full py-4 text-[#FB641B]"
            : ""
        }`}
      >
        <button
          className="h-full w-full text-sm font-medium"
          onClick={() => handleMenu(menu)}
          href={menu?.href}
        >
          {menu?.text}
        </button>
      </div>
    </div>
  );
};

export default ManageList;
