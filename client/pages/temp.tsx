import Card from '@components/Card/Card'
import Layout from '@components/DefaultLayout'
import Modal from '@components/ModalContainer'
import Head from 'next/head'
import { useRef, useState } from 'react'
import CollectionTable from '@components/CollectionTable'
import Drawer from '@components/Drawer'
import FieldsTable from '@components/FieldsTable'
import ModalAction from '@components/Modal/ModalAction'
import ModalContent from '@components/ModalContent'
import methods from 'constants/methods'
import useCollection from '@hooks/useCollection'

const Collections = () => {
  const [isCollectionModalVisible, setCollectionModalVisible] = useState(false)
  const [isFieldModalVisible, setFieldModalVisible] = useState(false)

  const {
    data: collections,
    deleteItem: deleteCollection,
    postItem: postCollection,
    postMutation: collectionPostMutation,
  } = useCollection()

  const [values, setValues] = useState<any>({})

  const createNewCollection = async () => {
    const result = await postCollection(values)
    if (result.status === 201) {
      setCollectionModalVisible(false)
    }
  }

  const collectionModal = {
    elements: [
      {
        name: 'name',
        label: 'collection name',
        type: 'string',
      },
      {
        name: 'desc',
        label: 'description',
        type: 'string',
      },
    ],
    actionButtons: [
      {
        name: 'save',
        className: 'btn-success',
        isLoading: collectionPostMutation.isLoading,
        onClick: createNewCollection,
      },
      {
        name: 'cancel',
        className: 'btn-outline btn-error',
        onClick: () => setCollectionModalVisible(false),
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
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
              </div>{' '}
              <p className="mb-4 flex-grow-0">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <CollectionTable rows={collections} />
            </>
          </Card>
          <Card>
            <>
              <div className="card-actions items-center justify-between">
                <h2 className="card-title">Fields</h2>

                <div className="btn-group">
                  <button
                    onClick={() => setFieldModalVisible(true)}
                    className="btn  btn-outline btn-success"
                  >
                    add field
                  </button>
                  <button className="btn  btn-outline btn-error">delete</button>
                </div>
              </div>
              <p className="mb-4 flex-grow-0">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <FieldsTable headers={fieldsHeaders} rows={fieldRows} />
            </>
          </Card>
        </div>
      </Layout>
      {/* 
      <Modal
        isOpen={isFieldModalVisible} // add filed modal
        setIsOpen={setFieldModalVisible}
        title="Create new filed"
      >
        <ModalContent
          elements={addCollectionModalElements}
          setValues={setValues}
        />
        <ModalAction actionButtons={newFieldModalActionButtons} />
      </Modal> */}
      <Modal // add collection modal
        isOpen={isCollectionModalVisible}
        setIsOpen={setCollectionModalVisible}
        title="add new collection"
      >
        <ModalContent
          setValues={setValues}
          elements={collectionModal.elements}
        />
        <ModalAction actionButtons={collectionModal.actionButtons} />
      </Modal>
    </>
  )
}

export default Collections

const collectionRows = [
  { id: '1', name: 'users', desc: 'User resources are available.' },
  { id: '2', name: 'product', desc: 'Product resources are available' },
]

const fieldsHeaders = ['name', 'method', 'desc']

const fieldRows = [
  {
    name: 'id',
    method: 'natural',
    desc: 'the id of the table',
  },
  {
    name: 'firstName',
    method: 'first',
    desc: 'the first name of the user',
  },
]