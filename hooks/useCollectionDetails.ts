import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { useRouter } from 'next/router'
import { HttpResponse } from 'types/api'
import {
  DatabaseCollectionDetails,
  FieldDetails,
  FieldPayload,
} from 'types/models'

const URI = '__collection-fields'

const COLLECTION_URI = '__database-collections'

const useCollectionDetails = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const id = typeof router.query.id === 'string' ? router.query.id : undefined

  const queryCollectionById = useQuery({
    queryKey: ['single-collection', router.query.id],
    enabled: !!router.query.id,
    queryFn: () =>
      api<HttpResponse<DatabaseCollectionDetails>>(COLLECTION_URI, {
        params: { id },
      }),
  })

  const invalidateQuery = () => {
    queryClient.invalidateQueries(['single-collection', router.query.id])
  }

  const postMutation = useMutation({
    mutationFn: (data: FieldPayload) =>
      api.post<HttpResponse<FieldDetails>>(URI, data),

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

  const postField = async (newFiled: FieldPayload) => {
    const result = postMutation.mutate(newFiled)
  }

  const deleteField = (id: number) => {
    deleteMutation.mutate(id)
  }

  return {
    collection: queryCollectionById.data?.data?.data,
    postField,
    deleteField,
  }
}

export default useCollectionDetails
