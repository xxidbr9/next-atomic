import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ISearchTreatment extends WithSearchRequest {}

type TreatmentListType = {
  id?: string
  name?: string
  price?: number
  stock?: number
  image_link?: string
  types?: string[]
}

type SearchTreatmentResponse = {
  treatments?: TreatmentListType[]
  has_next_page?: boolean
  total_treatment?: number
}

export async function searchTreatmentNetwork(
  data: ISearchTreatment
): Promise<AxiosResponse<NewtorkResponse<SearchTreatmentResponse>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  const search = data.search || ''
  return ellaAxios.get('/v1/catalog/treatment', {
    params: {
      ...data,
      limit,
      page,
      search,
    },
  })
}
