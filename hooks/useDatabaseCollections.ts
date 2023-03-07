import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { DatabaseCollectionItem } from '../types/models'
import { useRouter } from 'next/router'

const URI = '__database-collections'

const useDatabaseCollection = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const queryAllCollections = useQuery({
    enabled: !router.query.id,
    queryKey: ['collections', router.query.id],
    queryFn: () => api<{ Fields: DatabaseCollectionItem[] }>(URI),
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
    allCollections: queryAllCollections.data?.data.collections,
    deleteDatabaseCollections,
    postDatabaseCollections,
  }
}

export default useDatabaseCollection
