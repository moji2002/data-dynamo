import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { ElementType, Method } from 'types/method'
import qs from 'qs'
import { useEffect, useState } from 'react'

interface CollectionField extends Method {
  collectionId: string
}

const useCollectionFields = (id: string | undefined, queryParams: any = {}) => {
  const queryClient = useQueryClient()
  const [data, setData] = useState(null)

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

  useEffect(() => {
    if (!id) return

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
      fetchData()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete<number>('fields/' + id),
    onSuccess() {
      invalidateQuery()
      fetchData()
    },
  })

  // const newFiled: CollectionField = {
  //   collectionId: id || '',
  //   name: 'filed name for collection ' + id,
  //   label: 'hello',
  //   arguments: [
  //     {
  //       name: 'hello',
  //       type: ElementType.numberInput,
  //       default: 44,
  //       label: 'test label',
  //     },
  //   ],
  // }

  const postNewField = async (newFiled: CollectionField) => {
    const result = postMutation.mutate(newFiled)
    // console.log(result)
  }

  const deleteItem = (id: number) => {
    deleteMutation.mutate(id)
  }

  return {
    postNewField,
    deleteItem,
    data,
  }
}

export default useCollectionFields
