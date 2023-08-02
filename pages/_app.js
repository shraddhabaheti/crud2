import Navbar from '../component/Navbar'
import '../styles/globals.css'
import '../styles/style.css'
import Layout from '../src/Layout'
import { compose } from 'redux'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

