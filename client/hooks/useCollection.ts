import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'

type Collection = {
  id: number
  name: string
  desc: string
}

const useCollection = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['collections'],
    queryFn: () => api<Collection[]>('collections'),
  })

  const invalidateUserQuery = () => {
    queryClient.invalidateQueries(['collections'])
  }

  const postMutation = useMutation({
    mutationFn: (data: Collection) => api.post<Collection>('collections', data),
    onSuccess() {
      invalidateUserQuery()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete<number>('collections/' + id),
    onSuccess() {
      invalidateUserQuery()
    },
  })

  const deleteItem = (userId: number) => {
    deleteMutation.mutate(userId)
  }
  
  return {
    data: query.data?.data,
    postItem: postMutation.mutateAsync,
    deleteItem,
    query,
    postMutation,
    deleteMutation,
  }
}

export default useCollection
