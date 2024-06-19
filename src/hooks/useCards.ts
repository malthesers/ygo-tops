import { ICard } from '@/interfaces/card'
import axios from 'axios'
import useSWR from 'swr'
import useCardsQueryParams from './useCardsQueryParams'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import useQueryParamsStore from '@/stores/queryParamsStore'

const baseURL = 'https://ygo-records-api.onrender.com'

async function fetcher(url: string, params: any) {
  const res = await axios.get(baseURL + url, { params })
  // const res = await axios.get('https://ygo-records-api.onrender.com' + url)

  console.log(res.data)

  return res.data
}

interface ICardsResponse {
  length: number
  cards: ICard[]
}

export default function useCards() {
  // // const { queryParams } = useCardsQueryParams()
  // const [queryParamsString, setQueryParamsString] = useState<string>('')

  const queryParams = useQueryParamsStore((state) => state.queryParams)

  // useEffect(() => {
  //   console.log(queryParams)
  //   setQueryParamsString(queryString.stringify(queryParams))
  // }, [queryParams])

  // const { data, error, isLoading } = useSWR<ICardsResponse>(
  //   [`/cards?${queryParamsString}`],
  //   ([url, queryParams]) => fetcher(url, queryParams)
  // )
  // const { data, error, isLoading } = useSWR<ICardsResponse>(`/cards?${queryParamsString}`, fetcher)
  const { data, error, isLoading } = useSWR<ICardsResponse>(['/cards', queryParams], ([url, queryParams]) =>
    fetcher(url, queryParams)
  )

  return {
    length: data?.length,
    cards: data?.cards,
    isError: error,
    isLoading,
  }
}
