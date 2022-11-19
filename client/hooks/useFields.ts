import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { Method } from 'types/method'





const useFields = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['fields'],
    queryFn: () => api<Method[]>('fields'),
  })

  const invalidateUserQuery = () => {
    queryClient.invalidateQueries(['fields'])
  }

  const postMutation = useMutation({
    mutationFn: (data: Method) => api.post<Method>('fields', data),
    onSuccess() {
      invalidateUserQuery()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete<number>('fields/' + id),
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

export default useFields
