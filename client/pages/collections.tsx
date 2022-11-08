import Card from '@components/Card/Card'
import Layout from '@components/Layout'
import Modal from '@components/Modal'
import Head from 'next/head'
import { useRef, useState } from 'react'
import CollectionTable from '@components/CollectionTable'
import Drawer from '@components/Drawer'
import FieldsTable from '@components/FieldsTable'
import ModalAction from '@components/ModalAction'
import ModalContent from '@components/ModalContent'
import methods from 'constants/methods'

const Collections = () => {
  const [isModalOpen, setModalOpen] = useState(true)
  const [isDrawerOpen, setDrawerOpen] = useState(true)

  const [values, setValues] = useState({})

  const handleClick = (e) => {
    // console.log(e)

    // console.log(values)
    setModalOpen(false)
  }

  const newFieldModalActionButtons = [
    {
      name: 'save',
      className: 'btn-success',
      onClick: onSaveClick,
    },
    {
      name: 'cancel',
      className: 'btn-outline btn-error',
      onClick: () => setModalOpen(false),
    },
  ]

  const addCollectionModalElements = [
    {
      name: 'collectionName',
      label: 'collection name',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
  ]

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Drawer isDrawerOpen={isDrawerOpen}>
        <Layout>
          <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
            <Card>
              <>
                <div className="card-actions items-center  justify-between">
                  <h2 className="card-title">Collections</h2>
                  <div className="btn-group">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="btn  btn-outline btn-success"
                    >
                      add collection
                    </button>
                    <button className="btn btn-outline btn-error">
                      delete
                    </button>
                  </div>
                </div>{' '}
                <p className="mb-4 flex-grow-0">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <CollectionTable rows={collectionRows} />
              </>
            </Card>
            <Card>
              <>
                <div className="card-actions items-center justify-between">
                  <h2 className="card-title">Fields</h2>

                  <div className="btn-group">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="btn  btn-outline btn-success"
                    >
                      add field
                    </button>
                    <button className="btn  btn-outline btn-error">
                      delete
                    </button>
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
      </Drawer>

      <Modal
        isOpen={isModalOpen} // add collection modal
        setIsOpen={setModalOpen}
        title="Create new collection"
      >
        <ModalContent
          elements={addCollectionModalElements}
          setValues={setValues}
        />
        <ModalAction actionButtons={newFieldModalActionButtons} />
      </Modal>
      <Modal // add collection modal
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        title="add new collection"
      >
        <ModalContent elements={methods[0].options} />
        <ModalAction actionButtons={newFieldModalActionButtons} />
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
