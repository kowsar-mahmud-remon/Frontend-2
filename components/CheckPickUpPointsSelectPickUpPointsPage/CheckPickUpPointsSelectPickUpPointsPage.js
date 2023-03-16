 import React from 'react';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Image from 'next/image';
import vectorImg from '../../assets/images/Vector 3.png';
import vectorImg2 from '../../assets/images/Vector.png';


const CheckPickUpPointsSelectPickUpPointsPage = () => {
  const [hidden, setHidden] = useState(false);
  console.log(hidden);
  return (
    <div className="">
      <label htmlFor="my-modal-4" onClick={() => setHidden(!hidden)} className="btn">open modal</label>
      {
        hidden && (
          <OutsideClickHandler onOutsideClick={() => {
            setHidden(!hidden);
          }}>

            <div className="">

              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer bg-black bg-opacity-70">
                <label className="modal-box relative max-w-[780px]" htmlFor="">
                  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                  <div className="">
                    <label className="label mb-[38px]">
                      <span className="label-text text-base text-[#001E00]">Pick-up Points</span>
                    </label>

                    <div className="lg:flex">

                      <div className="lg:w-[360px] border border-[#026C51] rounded-xl lg:mr-4 pb-4 mb-4">
                        <div className="ml-[-1.3px] mt-[-1.3px]">
                          <Image
                            className='w-[15px] h-[8px] absolute ml-[6px] mt-[7px]'
                            src={vectorImg2}
                            alt=""
                            width={15}
                            height={8}
                          />
                          <Image
                            className='w-[45px] h-[32px]'
                            src={vectorImg}
                            alt=""
                            width={45}
                            height={32}
                          />
                        </div>

                        <div className="px-5">
                          <p className='text-[#001E00] mb-3'>Banglar Big Store LMP-MEP Keraniganj Collection Point</p>
                          <p className=' text-xs text-[#686868] mb-3'>+88 012 342 450 45</p>
                          <p className=' text-xs text-[#686868] mb-3'>9:00:00 - 6:00:00</p>
                          <p className=' text-xs text-[#686868] mb-3'>Ramgonj Tower-16/14, Giridhara, Matuail, <br />
                            Kodomtali, Dhaka-1362</p>
                        </div>

                      </div>

                      <div className="lg:w-[360px] px-5 pt-9 pb-4 mb-4 border border-[#686868] rounded-xl">
                        <p className='text-[#001E00] mb-3'> </p>
                        <p className=' text-xs text-[#686868] mb-3'>+88 012 342 450 45</p>
                        <p className=' text-xs text-[#686868] mb-3'>9:00:00 - 6:00:00</p>
                        <p className=' text-xs text-[#686868] mb-3'>Ramgonj Tower-16/14, Giridhara, Matuail, <br />
                          Kodomtali, Dhaka-1362</p>
                      </div>

                    </div>

                    <div className="modal-action mt-52 justify-between items-center mb-2">
                      <div className="flex items-center">
                        <AiFillQuestionCircle className='text-[#001E00] w-4 h-5 mr-2'></AiFillQuestionCircle>
                        <p className=' text-sm text-[#686868]'>Paperfly Keraniganj Sadar Collection Point-</p>
                      </div>
                      <label htmlFor="my-modal-4" className="btn bg-[#FB641B] text-white w-[172px] normal-case text-base font-medium">Confirm</label>
                    </div>

                  </div>



                </label>
              </label>
            </div>
          </OutsideClickHandler>
        )
      }
    </div >
  );
};

export default CheckPickUpPointsSelectPickUpPointsPage;