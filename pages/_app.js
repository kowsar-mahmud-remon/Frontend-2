import { Provider } from 'react-redux'
import MobileNavBar from '../components/MobileNavBar/MobileNavBar'
import Navication from '../components/Navication/Navication'
import SellerRightNav from '../components/sellerRightNav/SellerRightNav'
import SideButtons from '../components/SideButtons/SideButtons'
import { store } from '../store/store'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className="">
    <Provider store={store}>
      <SellerRightNav/>
      {/* <SideButtons/> */}
      <MobileNavBar/>
      <Navication />
      <div className='mr-6'>
        <Component {...pageProps} />
      </div>
    </Provider>
  </div>
}
