import Card from '@components/core/Card'
import Head from 'next/head'
import { FormEventHandler, useMemo, useState } from 'react'
import Table from '@components/core/Table'
import ModalAction from '@components/core/Modal/ModalAction'
import Modal from '@components/core/Modal/ModalContainer/ModalContainer'
import ModalContent from '@components/core/Modal/ModalContent'
import { DynamicInputProps, InputType } from 'types/method'
import { useRouter } from 'next/router'
import { TableColumn } from '@components/core/Table/types'
import { Field } from 'types/models'
import { ActionButton } from 'types/components'
import useCollectionFields, {
  CollectionField,
} from '@hooks/useCollectionFields'
import methods from 'constants/methods'
import useBuildCollection from '@hooks/useBuildCollection'

const EditCollections = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [isBuildModalVisible, setBuildModalVisible] = useState(false)
  const router = useRouter()
  const closeModal = () => setModalVisible(false)

  const [fieldFormValues, setFieldFormValues] = useState<{
    [key: string]: number | string | boolean
  }>({})

  const [buildValues, setBuildValues] = useState<{
    [key: string]: number | string | boolean
  }>({})

  const handleSetFieldFormValue = (
    key: string,
    value: number | string | boolean
  ) => {
    setFieldFormValues((prev) => ({ ...prev, [key]: value }))
  }

  const handleSetBuildFormValue = (
    key: string,
    value: number | string | boolean
  ) => {
    setBuildValues((prev) => ({ ...prev, [key]: value }))
  }

  const id = typeof router.query.id === 'string' ? router.query.id : undefined

  const { deleteField, postField, data } = useCollectionFields()
  const { buildDatabaseCollections } = useBuildCollection()

  const submitCollectionField: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault()
    if (!id) return

    const { methodName, title, ...rest } = fieldFormValues

    const payload: CollectionField = {
      title: title + '',
      methodName: methodName + '',
      arguments: JSON.stringify(rest),
      collectionId: +id,
    }

    postField(payload)
    setModalVisible(false)
    setFieldFormValues({})
  }

  const handleBuildCollections: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault()
    const quantity =
      typeof buildValues.quantity === 'string'
        ? +buildValues.quantity
        : undefined
        
    buildDatabaseCollections({
      collectionName: data?.collection.title,
      quantity: quantity,
    })

    setBuildModalVisible(false)
  }

  const collectionFieldsModalInputs: DynamicInputProps[] = useMemo(() => {
    const method = methods.find((m) => m.name === fieldFormValues['methodName'])
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
      },
      ...(method?.arguments ? method.arguments : []),
    ]
  }, [fieldFormValues['methodName']])

  const collectionFieldsModalActionButtons: ActionButton[] = [
    {
      label: 'save',
      className: 'btn-success',
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
  const buildModalActionButtons: ActionButton[] = [
    {
      label: 'ok',
      className: 'btn-success',
      type: 'submit',
    },
    {
      label: 'cancel',
      className: 'btn-outline btn-error',
      onClick: (e) => {
        e.preventDefault()
        setBuildModalVisible(false)
      },
    },
  ]

  const fieldColumns: TableColumn<Field>[] = [
    { id: '1', label: 'title', name: 'title' },
    { id: '2', label: 'method name', name: 'methodName' },
    {
      id: '3',
      label: 'delete',
      render: (row) => (
        <button onClick={(e) => deleteField(+row.id)} className="btn">
          delete
        </button>
      ),
      name: 'delete',
    },
  ]

  const buildCollectionModalInputs: DynamicInputProps[] = [
    {
      type: InputType.number,
      name: 'quantity',
      label: 'How many records do you want to create?',
    },
  ]

  return (
    <>
      <Head>
      <title>Mocker - JSON Placeholder | {data?.collection.title} 's fields</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal // add collection modal
        isVisible={isModalVisible}
        setVisible={setModalVisible}
        title="Add new field to collection"
      >
        <form onSubmit={submitCollectionField}>
          <ModalContent
            elements={collectionFieldsModalInputs}
            values={fieldFormValues}
            handleSetValue={handleSetFieldFormValue}
          />
          <ModalAction actionButtons={collectionFieldsModalActionButtons} />
        </form>
      </Modal>
      <Modal // build collection modal
        isVisible={isBuildModalVisible}
        setVisible={setBuildModalVisible}
        title="build collection"
      >
        <form onSubmit={handleBuildCollections}>
          <ModalContent
            elements={buildCollectionModalInputs}
            values={buildValues}
            handleSetValue={handleSetBuildFormValue}
          />
          <ModalAction actionButtons={buildModalActionButtons} />
        </form>
      </Modal>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <Card>
          <>
            <div className="card-actions items-center  justify-between">
              <h2 className="card-title">{data?.collection.title} 's fields</h2>
              <div className="btn-group">
                <button
                  onClick={() => setModalVisible(true)}
                  className="btn  btn-outline btn-success"
                >
                  add field
                </button>
                <button
                  className="btn btn-outline btn-primary "
                  onClick={() => setBuildModalVisible(true)}
                >
                  build table
                </button>
              </div>
            </div>
            {/* <p className="mb-4 flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p> */}
            <Table
              columns={fieldColumns}
              data={data?.collection.Fields || []}
            />
          </>
        </Card>
      </div>
    </>
  )
}

export default EditCollections
