import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ISearchTreatment extends WithSearchRequest {
  id?: string
}

type TreatmentListType = {
  id?: string
  name?: string
  price?: number
  stock?: number
  image_link?: string
  types?: string[]
}

type SearchTreatmentResponseByCategory = {
  treatments?: TreatmentListType[]
  has_next_page?: boolean
  total_treatment?: number
}

export async function getTreatmentNetworkByCategory(
  data: ISearchTreatment
): Promise<AxiosResponse<NewtorkResponse<SearchTreatmentResponseByCategory>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  const search = data.search || ''
  const id = data.id
  return ellaAxios.get(`/v1/catalog/treatment/category/${id}`, {
    params: {
      ...data,
      limit,
      page,
      search,
    },
  })
}
