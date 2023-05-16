import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/database-collections')
  })

  return (
    <>
      <Head>
        <title>Data Dynamo - tool for generating fake api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Home
