import api from '../api'
import useSWR from "swr";


export const useGetNowPlaying = () => {
    const {data, error, isValidating, mutate} = useSWR( 'now-playing', async () =>  {
        const respone = await api.moviesApi.getNowPlaying()
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating, mutate}
}

export const useGetUpComming = () => {
    const {data, error, isValidating} = useSWR( 'up-comming', async () =>  {
        const respone = await api.moviesApi.getUpComming()
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}

export const useGetPopular = () => {
  const {data, error, isValidating} = useSWR( 'popular-movies', async () =>  {
      const respone = await api.moviesApi.getPopular()
      return respone
    },
    {revalidateOnFocus : false}
  )
  return {data, error, isValidating}
}

export const useGetTopRated = () => {
  const {data, error, isValidating} = useSWR( 'top-rated', async () =>  {
      const respone = await api.moviesApi.getTopRated()
      return respone
    },
    {revalidateOnFocus : false}
  )
  return {data, error, isValidating}
}