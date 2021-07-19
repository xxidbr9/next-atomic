import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ISearchTreatment extends WithSearchRequest {}

export type TreatmentOfTheMonthType = {
  id?: string
  name?: string
  price?: number
  stock?: number
  image_link?: string
  types?: string[]
}

type SearchTreatmentResponse = {
  treatments?: TreatmentOfTheMonthType[]
  has_next_page?: boolean
  total_treatment?: number
}

export async function getTreatmentOfTheMonthNetwork(
  data: ISearchTreatment
): Promise<AxiosResponse<NewtorkResponse<SearchTreatmentResponse>>> {
  return ellaAxios.get('/v1/catalog/treatment/latest', {
    params: {
      ...data,
    },
  })
}
