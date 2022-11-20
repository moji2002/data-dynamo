import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { Method } from 'types/method'
import qs from 'qs'
import { useEffect, useState } from 'react'

interface CollectionField extends Method {
  collectionId: string
}

const useCollectionFields = (id: string | undefined, queryParams: any = {}) => {
  const queryClient = useQueryClient()

  //   Filter

  // Use . to access deep properties

  // GET /posts?title=json-server&author=typicode
  // GET /posts?id=1&id=2
  // GET /comments?author.name=typicode

  // const query = useQuery({
  //   queryKey: ['fields'],
  //   queryFn: () =>
  //     api<CollectionField[]>('fields?' + qs.stringify({ collectionId: id })),

  // })

  // const query = useQuery({
  //   queryKey: ['collections'],

  //   queryFn: () =>
  //     api<CollectionField[]>(
  //       'collections/' + id + '?' + qs.stringify({ _embed: 'fields' })
  //     ),
  // })

  // console.log(query);

  const [data, setData] = useState(null)

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      try {
        const result = await api(
          'fields/' + '?' + qs.stringify({ collectionId: id })
        )
        if (result.status === 200) {
          setData(result.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])

  const invalidateQuery = () => {
    queryClient.invalidateQueries(['fields', 'collections'])
  }

  const postMutation = useMutation({
    mutationFn: (data: CollectionField) =>
      api.post<CollectionField>('fields', data),

    onSuccess() {
      invalidateQuery()
    },
  })

  // const deleteMutation = useMutation({
  //   mutationFn: (id: number) => api.delete<number>('fields/' + id),
  //   onSuccess() {
  //     invalidateQuery()
  //   },
  // })

  // const deleteItem = (userId: number) => {
  //   deleteMutation.mutate(userId)
  // }

  const newFiled: CollectionField = {
    collectionId: id || '',
    name: 'filed name for collection ' + id,
    label: 'hello',
  }
  const testFunc = async () => {
    const result = postMutation.mutate(newFiled)
    console.log(result)
  }

  return {
    testFunc,
    data,
  }
}

export default useCollectionFields
