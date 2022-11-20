import Card from '@components/Card/Card'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import Table from '@components/Table'
import ModalAction from '@components/Modal/ModalAction'
import useCollection from '@hooks/useCollections'
import Modal from '@components/Modal/ModalContainer/ModalContainer'
import ModalContent from '@components/Modal/ModalContent'
import { Column, ElementType } from 'types/method'
import { useRouter } from 'next/router'
import useCollectionFields from '@hooks/useCollectionFields'
import { JSONTree } from 'react-json-tree'

const EditCollection = () => {
  const router = useRouter()

  const collectionId = useMemo(() => {
    if (router.query.slug && Array.isArray(router.query.slug))
      return router.query.slug[1]
  }, [router.query])

  const onBackClick = ()=>{
    router.back()
  }

  //GET /posts?_embed=comments
  // GET /posts/1?_embed=comments

  const { data,testFunc} =
    useCollectionFields(collectionId)

  console.log({ data })

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <button onClick={onBackClick} className="btn btn-error mr-2">
          back
        </button>
        <button onClick={testFunc} className="btn btn-success">
          test
        </button>
   
        {/* <JSONTree data={data} /> */}
        <div className="divider"></div>
        <JSONTree data={data} />{' '}
      </div>
    </>
  )
}

export default EditCollection
