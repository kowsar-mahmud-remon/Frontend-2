import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Navication from '../components/Navication/Navication';
import Carosel from '../components/Carosel/Carosel';
import SideNav from '../components/SideNav/SideNav';
import Image from 'next/image';
import slideImg from '../assets/images/slideImg.png';
import rightHeroMid from '../assets/images/right_hero/hero_mid.png';
import rightHeroBottm from '../assets/images/right_hero/hro_bottm.png';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import logo from '../assets/images/logo/main_logo.png';
import logoDic from '../assets/images/logo/logo_dic.png';

import NavicationWithSideNavLayout from '../layouts/NavicationWithSideNavLayout'
import Category from '../components/Category/Category'
import AddProducts from '../components/AddProducts/AddProducts'
import OrderPlace from '../components/OrderPlace/OrderPlace';
import SellerProductsModal from '../components/SellerProductsModal/SellerProductsModal';

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://banglar-big-store.onrender.com/api/slides/slides");
    const data = await res.json();
    if (!data.result) {
      return {
        props: {
          items: []
        }
      };
    }
    return {
      props: {
        items: data.result
      },
      revalidate: 600
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        items: []
      }
    };
  }
};

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavicationWithSideNavLayout >
        <div className={`${styles.homeBody} w-[100%] `} >
          {/* <Category /> */}
          <AddProducts />
          <div className={`flex bg-white flex-col h-[310px] lg:h-[366px] xl:flex-row xl:h-[366px] 2xl:h-[466px]  shadow-xl shadow-block-900 w-[100%] p-4 `}>
            {
              items.length && <Carosel data={items} />
            }
            <div className={`${styles.rightHeroSection} pl-4`} >
              <div>
                <div>
                  <Image alt='' src={logo} />
                  <Image alt='' src={logoDic} />

                </div>
                <div >
                  <p className='text-[001E00] text-[13px] lg:text-[16px] font-medium lg:font-semibold'>Order Online and enjoy</p>
                  <button className='bg-[#026C51] flex items-center gap-2 2xl:gap-2 mt-1 2xl:mt-5 rounded-full py-1 px-5 text-[#ffffff] text-[12px] lg:text-[16px] font-medium lg:font-bold'>
                    Marketplace
                    <FaArrowAltCircleRight />
                  </button>
                  <button className='btn btn-primary'>btn</button>
                </div>
              </div>
              <Image alt='' src={rightHeroMid} />
              <Image alt='' src={rightHeroBottm} />
            </div>
          </div>
        </div>
      </NavicationWithSideNavLayout>
      {/* <div >
        <Navication />
        <div className={`${styles.homeBody} my-7 mx-12`}>
          <SideNav />
          <div className='w-[100%]'>
            <div className={`flex bg-white h-[466px] w-[100%] p-4 ml-5`}>
              <Carosel />
              <div className={`${styles.rightHeroSection} pl-4`} >
                <div>
                  <div>
                    <Image alt='' alt='' src={logo} />
                    <Image alt='' alt='' src={logoDic} />

                  </div>
                  <div className=''>
                    <p className='text-[001E00] font-semibold'>Order Online and enjoy</p>
                    <button className='bg-[#026C51] flex items-center gap-2 mt-5 rounded-full py-1 px-5 text-[#ffffff] font-bold'>
                      Marketplace 
                      <FaArrowAltCircleRight />
                    </button>
                  </div>
                </div>
                <Image alt='' alt='' src={rightHeroMid} />
                <Image alt='' alt='' src={rightHeroBottm} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
