import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider, useDispatch } from 'react-redux';
import MobileNavBar from '../components/MobileNavBar/MobileNavBar';
import Navication from '../components/Navication/Navication';
import Footer from "../components/ProductPage/Footer";
import SideButtons from '../components/SideButtons/SideButtons';
import { store } from '../store/store';
import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {

  return (
    <div className="">
      <Provider store={store}>

        <SideButtons />
        <MobileNavBar />
        <div className=' '>
          <Navication />
        </div>
        <div className='md:mb-0 mb-20 lg:mr-[70px] md:mr-[70px]'>
          <Component {...pageProps} />
        </div>
        <div className=''>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </Provider>
    </div>
  );
}
