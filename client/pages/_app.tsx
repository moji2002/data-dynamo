import '../styles/globals.css'
import '../styles/chrome-bug.css'

import type { AppProps } from 'next/app'
import {
  useEffect,
  FC,
   PropsWithChildren
} from 'react'

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    // fix chrome bug
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      {/* <Head /> */}
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
