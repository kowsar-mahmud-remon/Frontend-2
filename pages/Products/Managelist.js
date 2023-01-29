import Link from "next/link";

const ManageList = ({ menu, tabname, setActive, active }) => {


    const handleMenu = (menu) => {
        setActive(menu)
    }

    return (
        <div className='text-center '>
            <div className={`${menu?.text === active?.text ? "bg-[#F2F2F2] text-[#FB641B]  w-full py-4 " : ""}`}>
                <button className="h-full w-full hover:text-[#FB641B] text-[16px]"  onClick={() => handleMenu(menu)} href={menu?.href}>{menu?.text}</button>
            </div>
        </div>
    );
};

export default ManageList;