import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ICategoryTreatment extends WithSearchRequest {}

type CategoryListType = {
  id?: string
  name?: string
  price?: number
  image_links?: string
}

type SearchTreatmentResponse = {
  treatment_categories?: CategoryListType[]
  has_next_page?: boolean
  total_Treatment?: number
}

export async function categoryOfTreatmentNetwork(
  data: ICategoryTreatment
): Promise<AxiosResponse<NewtorkResponse<SearchTreatmentResponse>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  return ellaAxios.get('/v1/catalog/treatment-category', {
    params: {
      ...data,
      limit,
      page,
    },
  })
}
