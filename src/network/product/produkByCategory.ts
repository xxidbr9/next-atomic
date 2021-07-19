import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ISearchProduct extends WithSearchRequest {
  id?: string
}

export type ProductType = {
  id?: string
  name?: string
  price?: number
  stock?: number
  image_links?: string[]
  types?: string[]
}

type SearchProductResponseByCategory = {
  products?: ProductType[]
  has_next_page?: boolean
  total_product?: number
}

export async function getProductNetworkByCategory(
  data: ISearchProduct
): Promise<AxiosResponse<NewtorkResponse<SearchProductResponseByCategory>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  const search = data.search || ''
  const id = data.id
  return ellaAxios.get(`/v1/catalog/product/category/${id}`, {
    params: {
      ...data,
      limit,
      page,
      search,
    },
  })
}
