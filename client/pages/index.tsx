import Card from '@components/Card/Card'
import Layout from '@components/Layout'
import Modal from '@components/Modal'
import Head from 'next/head'
import { useState } from 'react'
import CollectionTable from '@components/CollectionTable'
import Drawer from '@components/Drawer'
import FieldsTable from '@components/FieldsTable'
import ModalContent from '@components/ModalContent'

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(true)
  const [isDrawerOpen, setDrawerOpen] = useState(true)

  const modalActionButtons = [
    {
      name: 'save',
      className: 'btn-success',
      onClick: () => setModalOpen(false),
    },
    {
      name: 'cancel',
      className: 'btn-outline btn-error',
      onClick: () => setModalOpen(false),
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
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        title="Payment successful"
      >
        <ModalContent actionButtons={modalActionButtons} />
      </Modal>
    </>
  )
}

export default Home

const collectionRows = [
  { id: '1', name: 'users', desc: 'User resources are available.' },
  { id: '2', name: 'product', desc: 'Product resources are available' },
]

const fieldsHeaders = [
  'id',
  'firstName',
  'lastName',
  'age',
  'gender',
  'email',
  'phone',
]

const fieldRows = [
  {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    age: 50,
    gender: 'male',
    email: 'atuny0@sohu.com',
    phone: '+63 791 675 8914',
  },
  {
    id: 2,
    firstName: 'Sheldon',
    lastName: 'Quigley',
    age: 28,
    gender: 'male',
    email: 'hbingley1@plala.or.jp',
    phone: '+7 813 117 7139',
  },
  {
    id: 3,
    firstName: 'Terrill',
    lastName: 'Hills',
    age: 38,
    gender: 'male',
    email: 'rshawe2@51.la',
    phone: '+63 739 292 7942',
  },
  {
    id: 4,
    firstName: 'Miles',
    lastName: 'Cummerata',
    age: 49,
    gender: 'male',
    email: 'yraigatt3@nature.com',
    phone: '+86 461 145 4186',
  },
  {
    id: 5,
    firstName: 'Mavis',
    lastName: 'Schultz',
    age: 38,
    gender: 'male',
    email: 'kmeus4@upenn.edu',
    phone: '+372 285 771 1911',
  },
]
