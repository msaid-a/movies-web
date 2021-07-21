import api from '../api'
import useSWR from "swr";

export const useGetDetail = (id: string) => {
    const {data, error, isValidating} = useSWR( 'detail-movies', async () =>  {
        const respone = await api.detailMovies.getDataDetail(id)
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}

export const useGetCreadits = (id: string) => {
    const {data, error, isValidating} = useSWR( 'creadits-movies', async () =>  {
        const respone = await api.detailMovies.getCreadits(id)
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}

export const useGetSimmilarMovies = (id: string) => {
    const {data, error, isValidating} = useSWR( 'simmilar-movies', async () =>  {
        const respone = await api.detailMovies.getSimilarMovies(id)
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}
