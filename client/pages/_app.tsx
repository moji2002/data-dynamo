
import type { AppProps } from 'next/app'
import { useEffect, FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '../styles/globals.css'
import '../styles/chrome-bug.css'

const queryClient = new QueryClient()

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    // fix chrome bug
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      {/* <Head /> */}
      <QueryClientProvider client={queryClient}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  )
}

export default MyApp