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
import { DatabaseCollection } from 'types/models'
import { ActionButton } from 'types/components'

const DatabaseCollectionsPage = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const router = useRouter()

  const [formValues, setFormValues] = useState<{
    [key: string]: number | string | boolean
  }>({})

  const handleSetValue = (key: string, value: number | string | boolean) => {
    setFormValues((prev) => ({ ...prev, [key]: value }))
  }

  const {
    collections: databaseCollections,
    deleteDatabaseCollections,
    postDatabaseCollections,
  } = useDatabaseCollection()

  const closeNewCollectionModal = () => setModalVisible(false)

  const submitNewDatabaseCollection: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault()

    postDatabaseCollections(formValues)
    setFormValues({})
    setModalVisible(false)
  }

  const databaseCollectionColumns: TableColumn<DatabaseCollection>[] = [
    { id: '1', label: 'title', name: 'name' },
    { id: '2', label: 'desc', name: 'desc' },
    {
      id: '3',
      label: 'delete',
      render: (row) => (
        <button
          onClick={(e) => deleteDatabaseCollections(row.id + '')}
          className="btn btn-outline btn-error"
        >
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
          onClick={(e) => router.push(`database-collections/${row.id}`)}
          className="btn btn-primary btn-outline"
        >
          edit
        </button>
      ),
      name: 'delete',
    },
  ]

  const databaseCollectionModalInputs: DynamicInputProps[] = [
    {
      type: InputType.text,
      name: 'name',
      label: 'collection name',
      required: true,
    },
    {
      name: 'desc',
      label: 'description',
      type: InputType.text,
    },
  ]

  const databaseCollectionModalActionButtons: ActionButton[] = [
    {
      label: 'save',
      className: 'btn-success',
      // isLoading: collectionPostMutation.isLoading,
      type: 'submit',
    },
    {
      label: 'cancel',
      className: 'btn-outline btn-error',
      onClick: (e) => {
        e.preventDefault()
        closeNewCollectionModal()
      },
    },
  ]

  return (
    <>
      <Head>
        <title>Data Dynamo - collections</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal // add collection modal
        isVisible={isModalVisible}
        setVisible={setModalVisible}
        title="Add new database collection"
      >
        <form onSubmit={submitNewDatabaseCollection}>
          <ModalContent
            elements={databaseCollectionModalInputs}
            handleSetValue={handleSetValue}
            values={formValues}
          />
          <ModalAction actionButtons={databaseCollectionModalActionButtons} />
        </form>
      </Modal>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <Card>
          <>
            <div className="card-actions items-center justify-between">
              <h2 className="card-title">Collections</h2>
              <div className="btn-group">
                <button
                  onClick={() => setModalVisible(true)}
                  className="btn btn-success"
                >
                  add collection
                </button>
                {/* <button className="btn btn-outline btn-error">delete</button> */}
              </div>
            </div>
            {/* <p className="mb-4 flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p> */}
            <Table
              columns={databaseCollectionColumns}
              data={databaseCollections || []}
            />
          </>
        </Card>
      </div>
    </>
  )
}

export default DatabaseCollectionsPage
