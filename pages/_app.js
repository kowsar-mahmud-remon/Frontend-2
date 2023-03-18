import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider, useDispatch } from 'react-redux';
import MobileNavBar from '../components/MobileNavBar/MobileNavBar';
import Navication from '../components/Navication/Navication';
import Footer from "../components/ProductPage/Footer";
import SideButtons from '../components/SideButtons/SideButtons';
import { store } from '../store/store';
import '../styles/globals.css';


export default function App({ Component, pageProps }) {

  return (
    <div className="">
      <Provider store={store}>

        <SideButtons />
        <MobileNavBar />
        <div className='lg:block hidden'>
          <Navication />
        </div>
        <div className='md:mb-0 mb-20 lg:mr-[70px] md:mr-[70px]'>
        <div className='md:mb-0 mb-20 lg:mr-[80px]'>
          <Component {...pageProps} />
        </div>
        <div className='hidden lg:block'>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </Provider>
    </div>
  );
}
