import Card from '@components/Card/Card'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import Table from '@components/Table'
import ModalAction from '@components/Modal/ModalAction'
import Modal from '@components/Modal/ModalContainer/ModalContainer'
import ModalContent from '@components/Modal/ModalContent'
import { Column, ElementType, Method, Element } from 'types/method'
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

  const collectionId = useMemo(() => {
    if (router.query.slug && Array.isArray(router.query.slug))
      return router.query.slug[1]
  }, [router.query])

  const {
    data: fields,
    postNewField,
    deleteItem,
  } = useCollectionFields(collectionId)

  console.log('fields', fields)

  const closeModal = () => {
    setFieldModalVisible(false)
  }

  const collectionFieldsColumns: Column[] = [
    { id: '1', label: 'name', name: 'name' },
    { id: '2', label: 'desc', name: 'desc' },
    {
      id: '3',
      label: 'delete',
      render: (row) => (
        <button onClick={(e) => deleteItem(row.id)} className="btn">
          delete
        </button>
      ),
      name: 'delete',
    },
    {
      id: '4',
      label: 'edit',
      render: (row) => (
        <button onClick={(e) => console.log(row)} className="btn btn-primary">
          edit
        </button>
      ),
      name: 'edit',
    },
  ]

  const selectedMethod = methods.find(
    (method) => method.name === methodProperties['method_name']
  )

  // console.log({ selectedMethod })

  const submitNewField = async () => {
    const { method_name, method_label, ...rest } = methodProperties
    const payload: CollectionField = {
      collectionId: collectionId || '',
      name: method_name || '',
      label: method_label,
      arguments: rest,
    }

    // console.log(modalState)
    const result = await postNewField(payload)

    // console.log(result)
    closeModal()
    setTimeout(() => setMethodProperties({}), 300)
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

  useEffect(() => {
    setMethodProperties({ method_name: methodProperties['method_name'] })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methodProperties['method_name']])

  const fieldsModalElements: Element[] = [
    {
      name: 'method_label',
      type: ElementType.textInput,
      label: 'field label',
    },
    {
      name: 'method_name',
      type: ElementType.selectInput,
      label: 'field type',
      selectInputItems: methods.map((method) => ({
        label: method.label || method.name,
        value: method.name,
      })),
    },

    ...(!!selectedMethod?.arguments ? selectedMethod.arguments : []),
  ]

  // console.log('fields', fields)

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
          elements={fieldsModalElements}
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
            <Table columns={collectionFieldsColumns} data={fields || []} />
          </>
        </Card>
      </div>
    </>
  )
}

export default CollectionsDetails
