import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { FormEvent } from 'react'

type User = {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
}

const useUsers = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['users'],
    queryFn: () => api<User[]>('users'),
  })

  const invalidateUserQuery = () => {
    queryClient.invalidateQueries(['users'])
  }

  const postMutation = useMutation({
    mutationFn: (data: User) => api.post<User>('users', data),
    onSuccess() {
      invalidateUserQuery()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete<number>('users/' + id),
    onSuccess() {
      invalidateUserQuery()
    },
  })

  const submitNewUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fromData = new FormData(e.currentTarget)
    const payload = {} as any

    fromData.forEach((value, key) => {
      payload[key] = value
    })

    postMutation.mutate(payload)
  }

  const deleteUser = (userId: number) => {
    deleteMutation.mutate(userId)
  }
  return {
    data: query.data?.data,
    submitNewUser,
    deleteUser,
    query,
    postMutation,
    deleteMutation,
  }
}

export default useUsers
