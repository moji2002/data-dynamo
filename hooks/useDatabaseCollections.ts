import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { DatabaseCollectionItem } from '../types/types'

const URI = 'database-collections'

const useDatabaseCollection = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['collections'],
    queryFn: () => api<{ collections: DatabaseCollectionItem[] }>(URI),
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
    databaseCollections: query.data?.data.collections,
    deleteDatabaseCollections,
    postDatabaseCollections,
  }
}

export default useDatabaseCollection
