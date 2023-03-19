import React from 'react';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Image from 'next/image';
import vectorImg from '../../assets/images/Vector 3.png';
import vectorImg2 from '../../assets/images/Vector.png';
import style from "../../styles/campaignManagementTwo.module.css";



const CheckPickUpPointsSelectPickUpPointsPage = () => {
  const [hidden, setHidden] = useState(false);
  // console.log(hidden);
  const [isQuestion, setIsQuestion] = useState(false);

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
                <label className="modal-box relative max-w-[780px] scrollbar-hide" htmlFor="">
                  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-4 top-2 mt-4">✕</label>

                  <div className="">
                    <label className="label mb-[38px]">
                      <span className="label-text text-base text-[#001E00] font-medium">Pick-up Points</span>
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
                          <p className='text-[#001E00] mb-3 font-medium text-base'>Banglar Big Store LMP-MEP Keraniganj Collection Point</p>
                          <p className=' text-xs text-[#686868] mb-3'>+88 012 342 450 45</p>
                          <p className=' text-xs text-[#686868] mb-3'>9:00:00 - 6:00:00</p>
                          <p className=' text-xs text-[#686868] mb-3'>Ramgonj Tower-16/14, Giridhara, Matuail, <br />
                            Kodomtali, Dhaka-1362</p>
                        </div>

                      </div>

                      <div className="lg:w-[360px] px-5 pt-9 pb-4 mb-4 border border-[#686868] rounded-xl">
                        <p className='text-[#001E00] mb-3 font-medium text-base'>Banglar Big StorePaperfly Keraniganj Sadar Collection Point</p>
                        <p className=' text-xs text-[#686868] mb-3'>+88 012 342 450 45</p>
                        <p className=' text-xs text-[#686868] mb-3'>9:00:00 - 6:00:00</p>
                        <p className=' text-xs text-[#686868] mb-3'>Ramgonj Tower-16/14, Giridhara, Matuail, <br />
                          Kodomtali, Dhaka-1362</p>
                      </div>

                    </div>

                    {
                      isQuestion ? <div className={`w-[307px] lg:w-[391px] p-4 lg:mt-[50px] absolute lg:relative mt-[-270px] bg-white ${style.inputShadowWithOutBorder}`}>
                        <p className='text-base text-[#001E00] font-medium'>What is Banlar Big Store Pick-up Point?</p>
                        <p className='px-[5px] pt-3 text-xs text-[#686868]'>Banglar Big Store Pick-up Point is a convenient collection service that allows you to collect your parcels at a location close to you without having to pay for the delivery.
                          How Banglar Big Store Pick-up Point works: - Select ‘pick-up point’ as the delivery option during checkout - Choose one of the many pick-up locations available and pay for your order via a pre-payment method - Wait to be notified via SMS and collect your parcel at your convenience
                          Note: You will receive an OTP via SMS once your parcel is ready for collection. The OTP must be presented at the point of collection. Kindly collect your parcel within 3 working days to avoid any cancellation of your order. Your parcel will be returned to the seller if left uncollected.</p>
                      </div>
                        :
                        ""
                    }


                    <div className={`modal-action block lg:flex lg:flex-row-reverse justify-between items-center text-center mb-2 ${isQuestion ? "mt-0" : "lg:mt-[250px]"}`}>

                      <label htmlFor="my-modal-4" className="btn bg-[#FB641B] text-white w-[172px] normal-case text-base font-medium mb-10 lg:mb-0">Confirm</label>

                      <div onClick={() => setIsQuestion(!isQuestion)} className="flex items-center  cursor-pointer">
                        <AiFillQuestionCircle className='text-[#001E00] w-4 h-5 mr-2'></AiFillQuestionCircle>
                        <p className=' text-sm text-[#686868]'>Paperfly Keraniganj Sadar Collection Point-</p>
                      </div>

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