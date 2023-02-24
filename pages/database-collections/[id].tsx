import Card from '@components/core/Card'
import Head from 'next/head'
import { FormEventHandler, useState } from 'react'
import Table from '@components/core/Table'
import ModalAction from '@components/core/Modal/ModalAction'
import useDatabaseCollection from '@hooks/useDatabaseCollections'
import Modal from '@components/core/Modal/ModalContainer/ModalContainer'
import ModalContent from '@components/core/Modal/ModalContent'
import { DynamicInputProps, InputType } from 'types/method'
import { useRouter } from 'next/router'
import { TableColumn } from '@components/core/Table/types'
import { DatabaseCollectionItem } from 'types/types'
import { ActionButton } from 'types/components'
import useCollectionFields from '@hooks/useCollectionFields'

const EditCollections = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  // const router = useRouter()

  // console.log(props);
  
const {collection} = useDatabaseCollection()
  // useCollectionFields()

console.log({collection});
  

  

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  )
}

export default EditCollections
