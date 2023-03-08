import { useMutation } from '@tanstack/react-query'
import api from 'libs/api'

const URI = '__build-table'

const useBuildCollection = () => {
  const postMutation = useMutation({
    mutationFn: ({
      collectionName,
      quantity,
    }: {
      collectionName: string
      quantity: number
    }) =>
      api.post<any>(
        URI,
        {},
        {
          params: {
            collectionName,
            quantity,
          },
        }
      ),
  })

  return {
    buildDatabaseCollections: postMutation.mutate,
  }
}

export default useBuildCollection
