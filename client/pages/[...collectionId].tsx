import Card from '@components/Card/Card'
import Head from 'next/head'
import { useState } from 'react'
import Table from '@components/Table'
import ModalAction from '@components/Modal/ModalAction'
import useCollection from '@hooks/useCollection'
import Modal from '@components/Modal/ModalContainer/ModalContainer'
import ModalContent from '@components/Modal/ModalContent'
import { Column, ElementType } from 'types/method'
import { useRouter } from 'next/router'

const EditCollection = () => {
 const router = useRouter()
 console.log(router);
 
 

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      </>
  )
}

export default EditCollection
