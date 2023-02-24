import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { DatabaseCollectionItem } from '../types/types'
import { useRouter } from 'next/router'

const URI = 'database-collections'

const useDatabaseCollection = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const queryAllCollections = useQuery({
    enabled: !router.query.id,
    queryKey: ['collections'],
    queryFn: () => api<{ collections: DatabaseCollectionItem[] }>(URI),
  })

  const queryCollectionById = useQuery({
    queryKey: ['collections'],
    enabled: !!router.query.id,
    queryFn: () =>
      api<{ collections: DatabaseCollectionItem }>(URI, {
        params: { id: router.query.id },
      }),
  })

  const invalidateQuery = () => {
    queryClient.invalidateQueries(['collections'])
  }

  const postMutation = useMutation({
    mutationFn: (data: any) => api.post<any>(URI, data),
    onSuccess() {
      invalidateQuery()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete<number>(URI, { params: { id } }),
    onSuccess() {
      invalidateQuery()
    },
  })

  const deleteDatabaseCollections = (id: string) => {
    deleteMutation.mutate(id)
  }
  const postDatabaseCollections = (data: any) => {
    postMutation.mutate(data)
  }

  return {
    collection: queryCollectionById.data?.data,
    allCollections: queryAllCollections.data?.data.collections,
    deleteDatabaseCollections,
    postDatabaseCollections,
  }
}

export default useDatabaseCollection
