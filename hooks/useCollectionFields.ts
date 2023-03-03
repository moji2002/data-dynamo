import { useMutation, useQueryClient } from '@tanstack/react-query'
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

const URI = 'collection-fields'

const useCollectionFields = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const id = typeof router.query.id === 'string' ? router.query.id : undefined

  const postMutation = useMutation({
    mutationFn: (data: CollectionField) => api.post<CollectionField>(URI, data),

    onSuccess() {
      // invalidateQuery()
      // fetchData()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete<number>(URI + id),
    onSuccess() {
      // invalidateQuery()
      // fetchData()
    },
  })

  const postField = async (newFiled: CollectionField) => {
    const result = postMutation.mutate(newFiled)
  }

  const deleteField = (id: number) => {
    deleteMutation.mutate(id)
  }

  return {
    postField,
    deleteField,
  }
}

export default useCollectionFields
