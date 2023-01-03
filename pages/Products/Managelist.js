import Link from "next/link";

const ManageList = ({ menu, tabname, setActive, active }) => {

    console.log(menu.text, active);

    const handleMenu = (menu) => {
        setActive(menu)
    }

    return (
        <div className='text-center '>
            <div className={menu.text === active.text ? "bg-[#F2F2F2] text-[#FB641B]  w-full py-4 " : ""}>
                <Link className="h-full w-full hover:text-[#FB641B] text-[16px]"  onClick={() => handleMenu(menu)} href={menu.href}>{menu.text}</Link>
            </div>
        </div>
    );
};

export default ManageList;