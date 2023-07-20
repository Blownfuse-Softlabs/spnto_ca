import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useRestaurant = (id) => {
  const {data, error, isLoading} = useSWR(id, fetcher)

  return {
    restaurant: data,
    isLoading,
    isError: error
  }
}

export default useRestaurant