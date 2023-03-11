import Image from 'next/image';
import React from 'react';
import img1 from "../../assets/images/Personal Protective img 1.jpg";
import img2 from "../../assets/images/Personal Protective img 2.jpg";
import img3 from "../../assets/images/Personal Protective img 3.jpg";
import img4 from "../../assets/images/Personal Protective img 4.jpg";
import img5 from "../../assets/images/Personal Protective img 5.jpg";
import img6 from "../../assets/images/Personal Protective img 6.jpg";
import styles from "../../styles/campaignManagementTwo.module.css";


const PersonalProtectiveEquipment = () => {
  const productDetails =
    [
      {
        _id: 1,
        img: img1
      },
      {
        _id: 2,
        img: img2,
        price: 13.90,
        product: 300
      },
    ];
  const productDetails2 =
    [
      {
        _id: 3,
        img: img3
      },
      {
        _id: 4,
        img: img4,
        price: 7.5,
        product: 10
      },
    ];
  const productDetails3 =
    [
      {
        _id: 5,
        img: img5
      },
      {
        _id: 6,
        img: img6,
        price: 1.49,
        product: 2
      },
    ];

  return (
    <div className='lg:max-w-[1426px] mx-auto my-4 px-2 lg:px-0'>

      <div className="flex flex-wrap gap-5">
        <div className="lg:w-[460px] mb-2">
          <div className="flex justify-between items-center mb-5 text-[#001E00] text-2xl font-bold">
            <p className='w-[360px]'>Personal Protective Equipment</p>
            <div className=" border-[3px] rounded-lg border-[#dcdee3] w-[85px] h-0"></div>
          </div>
          <div className={`flex justify-between px-6 ${styles.campaignManagementWithoutBorder}`}>
            {
              productDetails.map(details => <div key={details._id} className=" card">
                <figure>
                  <Image
                    className="rounded w-[160px] h-[160px] mx-auto"
                    src={details.img}
                    width={160}
                    height={160}
                    alt=""
                  />
                </figure>
                <div className=" text-[#001E00] text-center mt-4 mb-4">
                  {
                    details?.price ?
                      <>
                        <h2 className="text-base font-bold">$ {details.price}</h2>
                        <p className='text-base font-medium'>{details.product} pieces</p>
                      </>
                      :
                      <div className="card-actions flex justify-center">
                        <button
                          className="w-full btn lg:w-[150px] h-[45px] bg-[#FB641B] font-medium text-white rounded-full normal-case text-base pt-[10px]"
                        >View More
                        </button>
                      </div>
                  }

                </div>
              </div>
              )
            }
          </div>
        </div>

        <div className="lg:w-[460px] mb-2">
          <div className="flex justify-between items-center mb-5 text-[#001E00] text-2xl font-bold">
            <p className='w-[65px]'>LIVE</p>
            <div className=" border-[3px] rounded-lg border-[#dcdee3] w-[375px] h-0"></div>
          </div>
          <div className={`flex justify-between px-6 ${styles.campaignManagementWithoutBorder}`}>
            {
              productDetails2.map(details => <div key={details._id} className=" card">
                <figure>
                  <Image
                    className="rounded w-[160px] h-[160px] mx-auto"
                    src={details.img}
                    width={160}
                    height={160}
                    alt=""
                  />
                </figure>
                <div className=" text-[#001E00] text-center mt-4 mb-4">
                  {
                    details?.price ?
                      <>
                        <h2 className="text-base font-bold">$ {details.price}</h2>
                        <p className='text-base font-medium'>{details.product} pieces</p>
                      </>
                      :
                      <div className="card-actions flex justify-center">
                        <button
                          className="w-full btn lg:w-[150px] h-[45px] bg-[#FB641B] font-medium text-white rounded-full normal-case text-base pt-[10px]"
                        >View More
                        </button>
                      </div>
                  }

                </div>
              </div>
              )
            }
          </div>
        </div>

        <div className="lg:w-[460px] mb-2">
          <div className="flex justify-between items-center mb-5 text-[#001E00] text-2xl font-bold">
            <p className='w-[180px]'>Sample Center</p>
            <div className=" border-[3px] rounded-lg border-[#dcdee3] w-[260px] h-0"></div>
          </div>
          <div className={`flex justify-between px-6 ${styles.campaignManagementWithoutBorder}`}>
            {
              productDetails3.map(details => <div key={details._id} className=" card">
                <figure>
                  <Image
                    className="rounded w-[160px] h-[160px] mx-auto"
                    src={details.img}
                    width={160}
                    height={160}
                    alt=""
                  />
                </figure>
                <div className=" text-[#001E00] text-center mt-4 mb-4">
                  {
                    details?.price ?
                      <>
                        <h2 className="text-base font-bold">$ {details.price}</h2>
                        <p className='text-base font-medium'>{details.product} sets</p>
                      </>
                      :
                      <div className="card-actions flex justify-center">
                        <button
                          className="w-full btn lg:w-[150px] h-[45px] bg-[#FB641B] font-medium text-white rounded-full normal-case text-base pt-[10px]"
                        >View More
                        </button>
                      </div>
                  }

                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default PersonalProtectiveEquipment;