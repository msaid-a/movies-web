import api from '../api'
import useSWR from "swr";

export const useGetNowPlaying = () => {
    const {data, error, isValidating} = useSWR( 'now-playing', async () =>  {
        const respone = await api.moviesApi.getNowPlaying()
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}

export const useGetUpComming = () => {
    const {data, error, isValidating} = useSWR( 'top-rate', async () =>  {
        const respone = await api.moviesApi.getUpComming()
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}