import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import OutsideClickHandler from 'react-outside-click-handler';
import vectorRight from "../../assets/images/vectorRight.png";
import img from "../../assets/images/image 66.png";
import delivery from '../../assets/images/fast-delivery 1.png';
import delivery2 from '../../assets/images/cash-on-delivery 2.png';



const CampaignManagementThree = ({ hidden, setHidden }) => {
  return (
    <div className="">
      {
        hidden && (
          <OutsideClickHandler onOutsideClick={() => {
            setHidden(!hidden);
          }}>

            <div className="">
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className=" modal cursor-pointer bg-black bg-opacity-70">
                <label className=" modal-box relative max-w-[642px] scrollbar-hide rounded-lg" htmlFor="">

                  <div className="mt-[47px]">

                    <div className="flex justify-center">

                      <div className="text-center">
                        <Image
                          className='w-[102px] h-[106px] mb-8 mx-auto'
                          src={vectorRight}
                          alt=""
                          width={102}
                          height={106}
                        />

                        <p className='text-[#001E00] text-2xl mb-4 font-bold'>Your Campaign Under Review</p>
                        <p className='text-lg text-[#686868] w-[463px]'>Please note that it can take up to 2 hours for your campaign to be published</p>
                      </div>

                    </div>

                    <div className="flex justify-center">
                      <div className="mb-[55px] mx-auto">
                        <div className="lg:flex mt-8 mb-8">
                          <Image
                            className='w-[241px] h-[182px] mb-2 lg:mr-4 object-cover shadow-xl'
                            src={img}
                            alt="Picture of the author"
                            width={241}
                            height={182}
                          />

                          <div className="">
                            <p className=' text-xl font-bold text-[#001E00]'>Tomato (Local) 500 ±30 gm</p>

                            <div className="mt-4 flex">
                              <p className='text-base text-[#001E00] mr-4 font-medium'>Brand: <span className='text-[#686868]'>No Brand</span></p>
                              <p className='text-base text-[#001E00] font-medium'>Color: <span className='text-[#686868]'>Red Color</span></p>
                            </div>

                            <div className=" text-[#707070] flex lg:block justify-between mt-4">
                              <div className="flex items-center">
                                <p className=' text-2xl text-[#FB641B] font-medium mb-2 mr-4'>TK 60</p>
                                <p className='text-base line-through mb-2 mr-4'>Tk 80</p>
                                <p className='text-base mb-4'>(20 % off)</p>
                              </div>
                            </div>

                            <div className="items-center mt-4">
                              <div className="flex items-center mb-4">
                                <Image
                                  className='w-[28px] h-[28px] mr-3'
                                  src={delivery}
                                  alt="Picture of the author"
                                  width={28}
                                  height={28}
                                />
                                <p className='text-base text-[#686868]'>24 Hours To 72 Hours Delivery Time</p>
                              </div>
                              <div className="flex items-center">
                                <Image
                                  className='w-[28px] h-[28px] mr-3'
                                  src={delivery2}
                                  alt="Picture of the author"
                                  width={28}
                                  height={28}
                                />
                                <p className='text-base text-[#686868]'>Cash on Delivery Available</p>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="lg:w-[435px] flex lg:justify-end items-center mb-4">
                          <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign Will Be Promoted:</p>
                          <div className="flex w-[172px] border border-[#B7B7B7] justify-between rounded">
                            <p className='pl-[16px] py-[10px] text-[#001E00] text-base font-medium'>3</p>
                            <p className='pr-[16px] py-[10px] text-[#707070]'>Days</p>
                          </div>
                        </div>

                        <div className="lg:w-[435px] flex lg:justify-end items-center mb-4">
                          <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign for Pay:</p>
                          <div className="flex w-[172px] border border-[#B7B7B7] justify-between rounded text-[#707070]">
                            <p className='pl-[16px] py-[10px]'>Tk 100</p>
                            <p className='pr-[16px] py-[10px]'>Daily</p>
                          </div>
                        </div>

                        <div className="lg:w-[435px] flex lg:justify-end items-center mb-4">
                          <p className='text-[#001E00] mr-4 text-base font-medium'>Campaign Bid Strategy:</p>
                          <div className="flex w-[172px] border border-[#B7B7B7] justify-between rounded text-[#707070]">
                            <p className='pl-[16px] py-[10px] text-base text-[#001E00] font-medium'>Social</p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>



                </label>
                <div className="flex justify-center absolute bottom-[0px]">
                  <label htmlFor="my-modal-4" className="btn bg-[#FB641B] text-white w-[264px] h-[72px] normal-case text-2xl font-normal">Ok</label>
                </div>

              </label>

            </div>

          </OutsideClickHandler>
        )
      }
    </div >
  );
};

export default CampaignManagementThree;