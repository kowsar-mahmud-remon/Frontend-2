import Link from 'next/link';
import React from 'react';

const Mangeitem = ({ menu }) => {
    console.log(menu);
    return (
      <div className='text-center hover:bg-[#F2F2F2] py-3'>
        <Link href={menu.href}>{menu.text}</Link>
      </div>
    );
};

export default Mangeitem;