import { Provider } from 'react-redux'
import Navication from '../components/Navication/Navication'
import { store } from '../store/store'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Navication />
      <Component {...pageProps} />
    </Provider>
  </>
}
