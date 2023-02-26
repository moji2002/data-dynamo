import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from 'libs/api'
import { InputType, Method } from 'types/method'
import { useRouter } from 'next/router'

interface CollectionField extends Method {
  collectionId: string
  id: string
}

const URI = 'collection-fields'

const useCollectionFields = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const query = useQuery({
    queryKey: ['fields'],
    queryFn: () =>
      api<{ fields: CollectionField[] }>(URI, {
        params: { id: router.query.id },
      }),
  })


  const invalidateQuery = () => {
    queryClient.invalidateQueries(['fields', 'collections'])
  }

  const postMutation = useMutation({
    mutationFn: (data: CollectionField) =>
      api.post<CollectionField>('fields', data),

    onSuccess() {
      invalidateQuery()
      // fetchData()
    },
  })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => api.delete<number>('fields/' + id),
    onSuccess() {
      invalidateQuery()
      // fetchData()
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
  }

  const deleteItem = (id: number) => {
    deleteMutation.mutate(id)
  }

  return {
    postNewField,
    deleteItem,
    data: query.data?.data,
  }
}

export default useCollectionFields
