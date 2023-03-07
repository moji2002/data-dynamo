import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { useRouter } from 'next/router'

export interface CollectionField {
  id?: number
  title: string
  methodName: string
  arguments?: string
  collectionId: number
  createdAt?: string
  updatedAt?: string
}

type QueryResponseModel = {
  collection: {
    Fields: CollectionField[]
    name: string
    desc: string
  }
}

const URI = '__collection-fields'

const COLLECTION_URI = '__database-collections'

const useCollectionFields = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const id = typeof router.query.id === 'string' ? router.query.id : undefined

  const queryCollectionById = useQuery({
    queryKey: ['single-collection', router.query.id],
    enabled: !!router.query.id,
    queryFn: () =>
      api<QueryResponseModel>(COLLECTION_URI, {
        params: { id },
      }),
  })

  const invalidateQuery = () => {
    queryClient.invalidateQueries(['single-collection', router.query.id])
  }

  const postMutation = useMutation({
    mutationFn: (data: CollectionField) => api.post<CollectionField>(URI, data),

    onSuccess() {
      invalidateQuery()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete<number>(URI, { params: { id } }),
    onSuccess() {
      invalidateQuery()
    },
  })

  const postField = async (newFiled: CollectionField) => {
    const result = postMutation.mutate(newFiled)
  }

  const deleteField = (id: number) => {
    deleteMutation.mutate(id)
  }

  return {
    data: queryCollectionById.data?.data,
    postField,
    deleteField,
  }
}

export default useCollectionFields
