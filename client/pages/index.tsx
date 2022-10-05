import Card from '@components/Card/Card'
import Layout from '@components/Layout'
import Navbar from '@components/Navbar'
import Modal from '@components/Modal'
import Head from 'next/head'
import { useState } from 'react'
import Table from '@components/Table'
import Drawer from '@components/Drawer'

const collectionRows = [
  { id: '1', name: 'users', desc: 'User resources are available.' },
  { id: '2', name: 'product', desc: 'Product resources are available' },
]

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(true)
  const [isDrawerOpen, setDrawerOpen] = useState(true)

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drawer isDrawerOpen={isDrawerOpen}>
        <Layout>
          <div className="">
            <Card>
              <>
                <h2 className="card-title">Collections</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Table rows={collectionRows} />
              </>
            </Card>
            <Card>
              <>
                <h2 className="card-title">Fields</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
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
        <>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </p>
          </div>

          <div className="mt-4">
            <div className="card-actions justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="btn btn-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
        </>
      </Modal>
    </>
  )
}

export default Home
