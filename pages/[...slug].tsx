import Card from '@components/Card/Card'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import Table from '@components/Table'
import ModalAction from '@components/Modal/ModalAction'
import Modal from '@components/Modal/ModalContainer/ModalContainer'
import ModalContent from '@components/Modal/ModalContent'
import { TableColumn, InputType, Method, DynamicInputProp } from 'types/method'
import { useRouter } from 'next/router'
import useCollectionFields from '@hooks/useCollectionFields'
import methods from '../constants/methods'

interface CollectionField extends Method {
  collectionId: string
}

const CollectionsDetails = () => {
  const [isFieldModalVisible, setFieldModalVisible] = useState(false)
  const [methodProperties, setMethodProperties] = useState<any>({})
  const router = useRouter()

  console.log(methodProperties)

  const collectionId = useMemo(() => {
    if (router.query.slug && Array.isArray(router.query.slug))
      return router.query.slug[1]
  }, [router.query])

  const {
    data: fields,
    postNewField,
    deleteItem,
  } = useCollectionFields(collectionId)


  const closeModal = () => {
    setFieldModalVisible(false)
  }

  const onEdit = (id: string) => {
    const selectedMethod = fields?.find((field) => field.id === id)
    setMethodProperties(selectedMethod)
    setFieldModalVisible(true)
  }

  const FieldsTableColumns: TableColumn[] = [
    { id: '1', name: 'label' },
    { id: '2', name: 'name', label: 'method name' },
    { id: '3', name: 'desc' },
    {
      id: '4',
      render: (row) => (
        <button onClick={(e) => deleteItem(row.id)} className="btn">
          delete
        </button>
      ),
      name: 'delete',
    },
    {
      id: '5',
      render: (row) => (
        <button onClick={(e) => onEdit(row.id)} className="btn btn-primary">
          edit
        </button>
      ),
      name: 'edit',
    },
  ]

  const selectedMethod = methods.find(
    (method) => method.name === methodProperties['name']
  )

  const submitNewField = async () => {
    const { name, label, ...rest } = methodProperties
    const payload: CollectionField = {
      collectionId: collectionId || '',
      name: name || '',
      label: label,
      arguments: rest,
    }

    const result = await postNewField(payload)

    closeModal()
  }

  const fieldModalButtonsData = [
    {
      label: 'save',
      className: 'btn-success',
      // isLoading: collectionPostMutation.isLoading,
      onClick: submitNewField,
    },
    {
      label: 'cancel',
      className: 'btn-outline btn-error',
      onClick: closeModal,
    },
  ]



  const modalInputs: DynamicInputProp[] = [
    {
      name: 'label',
      type: InputType.text,
      label: 'field label',
    },
    {
      name: 'name',
      type: InputType.select,
      label: 'field type',
      selectInputItems: methods.map((method) => ({
        label: method.label || method.name,
        value: method.name,
      })),
    },

    ...(!!selectedMethod?.arguments ? selectedMethod.arguments : []),
  ]

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal // field modal
        isVisible={isFieldModalVisible}
        setVisible={setFieldModalVisible}
        title="collection details"
      >
        <ModalContent
          values={methodProperties}
          setValues={setMethodProperties}
          elements={modalInputs}
        />
        <ModalAction buttonsData={fieldModalButtonsData} />
      </Modal>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <Card>
          <>
            <div className="card-actions items-center justify-between">
              <h2 className="card-title">Collection Details</h2>
              <div className="btn-group">
                <button
                  onClick={() => setFieldModalVisible(true)}
                  className="btn  btn-outline btn-success"
                >
                  add field
                </button>
                <button className="btn btn-outline btn-error">delete</button>
              </div>
            </div>
            {/* <p className="mb-4 flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p> */}
            <Table columns={FieldsTableColumns} data={fields || []} />
          </>
        </Card>
      </div>
    </>
  )
}

export default CollectionsDetails
