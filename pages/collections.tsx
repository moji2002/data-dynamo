import Card from '@components/Card/Card'
import Head from 'next/head'
import { useState } from 'react'
import Table from '@components/Table'
import ModalAction from '@components/Modal/ModalAction'
import useCollection from '@hooks/useCollections'
import Modal from '@components/Modal/ModalContainer/ModalContainer'
import ModalContent from '@components/Modal/ModalContent'
import { InputType } from 'types/method'
import { useRouter } from 'next/router'

const CollectionsPage = () => {
  const [isCollectionModalVisible, setCollectionModalVisible] = useState(false)
  const [modalState, setModalState] = useState<any>({})
  const router = useRouter()

  const {
    data: collections,
    deleteItem: deleteCollection,
    postItem: postCollection,
    postMutation: collectionPostMutation,
  } = useCollection()

  const closeNewCollectionModal = () => setCollectionModalVisible(false)

  const createNewCollection = async () => {
    const result = await postCollection(modalState)
    if (result.status === 201) {
      setCollectionModalVisible(false)
    }
  }

  const collectionColumns = [
    { id: '1', label: 'name', name: 'name' },
    { id: '2', label: 'desc', name: 'desc' },
    {
      id: '3',
      label: 'delete',
      render: (row) => (
        <button onClick={(e) => deleteCollection(row.id)} className="btn">
          delete
        </button>
      ),
      name: 'delete',
    },
    {
      id: '4',
      label: 'edit',
      render: (row) => (
        <button
          onClick={(e) => router.push(`collections/${row.id}`)}
          className="btn btn-primary"
        >
          edit
        </button>
      ),
      name: 'delete',
    },
  ]

  const collectionModalProperties = {
    elements: [
      {
        name: 'name',
        label: 'collection name',
        type: 'string' as InputType,
      },
      {
        name: 'desc',
        label: 'description',
        type: 'string' as InputType,
      },
    ],
    buttonsData: [
      {
        label: 'save',
        className: 'btn-success',
        isLoading: collectionPostMutation.isLoading,
        onClick: createNewCollection,
      },
      {
        label: 'cancel',
        className: 'btn-outline btn-error',
        onClick: closeNewCollectionModal,
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal // add collection modal
        isVisible={isCollectionModalVisible}
        setVisible={setCollectionModalVisible}
        title="add new collection"
      >
        <ModalContent
          values={modalState}
          setValues={setModalState}
          elements={collectionModalProperties.elements}
        />
        <ModalAction buttonsData={collectionModalProperties.buttonsData} />
      </Modal>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <Card>
          <>
            <div className="card-actions items-center  justify-between">
              <h2 className="card-title">Collections</h2>
              <div className="btn-group">
                <button
                  onClick={() => setCollectionModalVisible(true)}
                  className="btn  btn-outline btn-success"
                >
                  add collection
                </button>
                <button className="btn btn-outline btn-error">delete</button>
              </div>
            </div>
            {/* <p className="mb-4 flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p> */}
            <Table columns={collectionColumns} data={collections || []} />
          </>
        </Card>
      </div>
    </>
  )
}

export default CollectionsPage
