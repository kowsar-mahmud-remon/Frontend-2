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

import NavicationWithSideNavLayout from '../layouts/NavicationWithSideNavLayout';
import Category from '../components/Category/Category';
import AddProducts from '../components/AddProducts/AddProducts';

import MediaCenter from '../components/MediaCenter/MediaCenter';

import OrderPlace from '../components/OrderPlace/OrderPlace';
import SellerProductsModal from '../components/SellerProductsModal/SellerProductsModal';
import AllCategory from '../components/allCategory/AllCategory';
import VdoStory from '../components/VdoStory/VdoStory';





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
          {/* <MediaCenter /> */}
          {/* <AddProducts /> */}
          <div className={`flex bg-white flex-col h-[146px] lg:h-[396px] xl:flex-row xl:h-[396px] 2xl:h-[466px]  shadow-xl shadow-block-900 w-[100%] object-cover`}>
            {
              items.length && <Carosel data={items} />
            }
            
          </div>
        </div>
        <div>
          <VdoStory/>
        </div>
        <div>
          <AllCategory />
        </div>
      </NavicationWithSideNavLayout>
    </>
  );
}
