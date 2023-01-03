import Link from 'next/link';
import React, { useState } from 'react';

const Mangeitem = ({ menu }) => {

  const [active, setActive] = useState(null);
  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <div className='py-3 hover:bg-[#F2F2F2] text-center '>
      <div className={active ? "bg-[#F2F2F2] text-[#FB641B]": ""}>
        <Link onClick={() => handleMenu(menu._id)} href={menu.href}>{menu.text}</Link>
      </div>
    </div>
  );
};

export default Mangeitem;