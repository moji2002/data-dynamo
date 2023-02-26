import Card from '@components/core/Card'
import Head from 'next/head'
import { FormEventHandler, useMemo, useState } from 'react'
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
import methods from 'constants/methods'

const EditCollections = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const closeModal = () => setModalVisible(false)

  const [selectedMethodName, setSelectedMethodName] = useState('')

  console.log({ selectedMethodName })

  // const router = useRouter()

  // console.log(props);

  const { collection } = useDatabaseCollection()
  // useCollectionFields()

  const submitCollectionField: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault()
    setSelectedMethodName('')

    // postDatabaseCollections(new FormData(e.currentTarget))
    setModalVisible(false)

    // const result = await postCollection(new FormData(e.currentTarget))
    // if (result.status === 201) {
    //   setCollectionModalVisible(false)
    // }
  }

  // console.log({collection});

  // const collectionFieldsColumns: TableColumn<DatabaseCollectionItem>[] = [
  //   { id: '1', label: 'name', name: 'name' },
  //   { id: '2', label: 'desc', name: 'desc' },
  //   {
  //     id: '3',
  //     label: 'delete',
  //     render: (row) => (
  //       <button
  //         // onClick={(e) => deleteDatabaseCollections(row.id)}
  //         className="btn"
  //       >
  //         delete
  //       </button>
  //     ),
  //     name: 'delete',
  //   },
  //   {
  //     id: '4',
  //     label: 'edit',
  //     render: (row) => (
  //       <button
  //         // onClick={(e) => router.push(`database-collections/${row.id}`)}
  //         className="btn btn-primary"
  //       >
  //         edit
  //       </button>
  //     ),
  //     name: 'delete',
  //   },
  // ]

  const collectionFieldsModalInputs: DynamicInputProps[] = useMemo(() => {
    const method = methods.find((m) => m.name === selectedMethodName)
    const list = methods.map((m) => ({
      label: m.label || m.name,
      value: m.name,
    }))

    return [
      { type: InputType.text, name: 'title', label: 'Field Name' },
      {
        type: InputType.select,
        name: 'methodName',
        label: 'Field type',
        list: list,
        onChange: (e) => setSelectedMethodName(e.target.value),
        value: selectedMethodName,
      },
      ...(method?.arguments ? method.arguments : []),
    ]
  }, [selectedMethodName])

  // const collectionFieldsModalInputs: DynamicInputProps[] = [
  //   { type: InputType.text, name: 'name', label: 'Field Name' },

  //   {
  //     type: InputType.select,
  //     name: 'type',
  //     label: 'Field type',
  //     list: methods.map((m) => ({ label: m.label || m.name, value: m.name })),
  //     onChange: (e) => setSelectedMethodName(e.target.value),
  //     value: selectedMethodName,
  //   },
  //   { type: InputType.number, name: 'hh' },
  // ]

  const collectionFieldsModalActionButtons: ActionButton[] = [
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
        closeModal()
      },
    },
  ]

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal // add collection modal
        isVisible={isModalVisible}
        setVisible={setModalVisible}
        title="Add new field to collection"
      >
        <form onSubmit={submitCollectionField}>
          <ModalContent elements={collectionFieldsModalInputs} />
          <ModalAction actionButtons={collectionFieldsModalActionButtons} />
        </form>
      </Modal>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <Card>
          <>
            <div className="card-actions items-center  justify-between">
              <h2 className="card-title">Collections</h2>
              <div className="btn-group">
                <button
                  onClick={() => setModalVisible(true)}
                  className="btn  btn-outline btn-success"
                >
                  add field
                </button>
                {/* <button className="btn btn-outline btn-error">delete</button> */}
              </div>
            </div>
            {/* <p className="mb-4 flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p> */}
            {/* <Table
              columns={databaseCollectionColumns}
              data={databaseCollections || []}
            /> */}
          </>
        </Card>
      </div>
    </>
  )
}

export default EditCollections
