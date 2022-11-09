import type { AppProps } from 'next/app'
import { useEffect, FC, PropsWithChildren } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '../styles/globals.css'
import '../styles/chrome-bug.css'
import DefaultLayout from '@components/DefaultLayout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'always',
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || DefaultLayout

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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
