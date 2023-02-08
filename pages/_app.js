import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import MobileNavBar from '../components/MobileNavBar/MobileNavBar'
import Navication from '../components/Navication/Navication'
import Footer from "../components/ProductPage/Footer";
import SideButtons from '../components/SideButtons/SideButtons'
import { store } from '../store/store'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {

  return (
    <div className="">
      <Provider store={store}>
        {/* <SellerRightNav/> */}
        <SideButtons />
        <MobileNavBar />
        <Navication />
        <div>
          <Component {...pageProps} />
        </div>
        <div className='hidden lg:block'>
          <Footer />
        </div>
      </Provider>
    </div>
  );
}
