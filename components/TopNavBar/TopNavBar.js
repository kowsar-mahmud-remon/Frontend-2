import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const TopNavBar = () => {
  const options = [
    "Track Order",
    "BBS Affiliate",
    "Get The App",
    
  ];
  return (
    <div className="bg-[#026C51] h-12 px-24 hidden lg:block">
      <div className="text-white flex justify-end items-center h-full">
        {options.map((option, index) => (
          <div key={index}>
            <Link className="ml-8" href="/">
              {option}
            </Link>
          </div>
        ))}
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="ml-8 flex items-center">
            <p>The Language</p>
            <FaAngleDown className="mt-1"></FaAngleDown>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
