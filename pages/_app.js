import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import '../styles/style.scss'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('YIFVTXOS', {
      includedDomains: ['hernansartorio.com']
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return <Component {...pageProps} />
}
export default App
