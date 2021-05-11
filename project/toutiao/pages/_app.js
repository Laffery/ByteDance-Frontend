import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'en-us'
  }, [])
  return <Component {...pageProps}/>
}

export default MyApp
