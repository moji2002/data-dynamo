import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/collections')
  })

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Home
