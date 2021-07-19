import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ISearchProduct extends WithSearchRequest {}

type ProductListType = {
  id?: string
  name?: string
  price?: number
  stock?: number
  image_links?: string[]
  types?: string[]
}

type SearchProductResponse = {
  products?: ProductListType[]
  has_next_page?: boolean
  total_product?: number
}

export async function searchProductNetwork(
  data: ISearchProduct
): Promise<AxiosResponse<NewtorkResponse<SearchProductResponse>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  const search = data.search || ''
  return ellaAxios.get('/v1/catalog/product', {
    params: {
      ...data,
      limit,
      page,
      search,
    },
  })
}
