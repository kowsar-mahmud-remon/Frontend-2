import { Tab } from '@headlessui/react';
import React from 'react';
import { FaAngleRight, FaInfoCircle } from 'react-icons/fa';
const MediaCenter = () => {

    return (
        <div className='mb-8'>
            <div className='flex items-center text-lg text-accent'>
                <span>Home</span> <FaAngleRight /> <span> Products</span> <FaAngleRight /><span className='text-black'>New Media Center</span>
            </div>
            <h2 className='text-2xl 2xl:text-3xl font-medium mb-[34px] mt-2 text-primary'>Media Center</h2>
            <div className='flex items-center gap-3 mb-[34px]'>
                <div className='text-[#287DF3] text-[16px] border-2 border-[#287DF3] rounded-full px-2 text-sm cursor-pointer' title='lorem ipsum title'><p>i</p></div>
                <p className='text-sm text-secondary'>Please notice the image size should less then 5.0 MB Only support png, jpg, jpeg</p>
            </div>
            <div className='py-6 px-4 border border-[#F2F2F2] shadow-small rounded-lg'>
                <Tab.Group>
                    <Tab.List>
                        <Tab>
                            {({ selected }) => (
                                /* Use the `selected` state to conditionally style the selected tab. */
                                <button
                                    className={` text-lg p-2
                                        ${selected ? 'text-[#287DF3] border-b-4 border-[#287DF3]' : undefined}
                                    `}
                                >
                                    Image
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    <div className="h-px w-full bg-[#B7B7B7] rounded-full"></div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className='pt-4 flex justify-between'>
                                <div>
                                    <button className='text-white py-2.5 px-[15px] bg-primary rounded'>Upload Image</button>
                                    <button className='text-primary py-2 px-3.5 ml-4 border border-primary rounded'>Create New Folder</button>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        <input type="date" className='border border-r-0 py-[10px] rounded-l px-3 text-accent' />
                                        <input type="date" className='border border-l-0 py-[10px] rounded-r px-3 text-accent' />
                                    </div>
                                    <input type="text" placeholder="Search picture name" className="input input-bordered w-[215px] rounded py-[9px] px-3 text-accent focus:border-primary" />
                                    <button className='text-primary py-[9px] px-3.5 border border-primary rounded'>Clear</button>
                                    <button className='text-white py-[10px] px-[15px] bg-primary rounded'>Search</button>
                                </div>
                            </div>
                            <p className='text-[#001E00] text-lg pt-8 pb-28'>Image</p>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};

export default MediaCenter;