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
import useCollectionFields, {
  CollectionField,
} from '@hooks/useCollectionFields'
import methods from 'constants/methods'

const EditCollections = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const router = useRouter()
  const closeModal = () => setModalVisible(false)

  const [formValues, setFormValues] = useState<{
    [key: string]: number | string | boolean
  }>({})

  // console.log(formValues);

  const handleSetValue = (key: string, value: number | string | boolean) => {
    setFormValues((prev) => ({ ...prev, [key]: value }))
  }

  const id = typeof router.query.id === 'string' ? router.query.id : undefined

  const { collection } = useDatabaseCollection()
  const { deleteField, postField } = useCollectionFields()
  // useCollectionFields()

  const submitCollectionField: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault()
    if (!id) return

    const { methodName,title, ...rest } = formValues

    const payload: CollectionField = {
      title:title+'',
      methodName: methodName + '',
      arguments: JSON.stringify(rest),
      collectionId: +id,
    }

    postField(payload)
    setModalVisible(false)
    setFormValues({})
  }

  const collectionFieldsModalInputs: DynamicInputProps[] = useMemo(() => {
    const method = methods.find((m) => m.name === formValues['methodName'])
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
  }, [formValues['methodName']])

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
          <ModalContent
            elements={collectionFieldsModalInputs}
            values={formValues}
            handleSetValue={handleSetValue}
          />
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
