import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ICategoryProduct extends WithSearchRequest {}

type CategoryListType = {
  id?: string
  name?: string
  price?: number
  image_links?: string
}

type SearchProductResponse = {
  product_categories?: CategoryListType[]
  has_next_page?: boolean
  total_product?: number
}

export async function categoryOfProductNetwork(
  data: ICategoryProduct
): Promise<AxiosResponse<NewtorkResponse<SearchProductResponse>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  return ellaAxios.get('/v1/catalog/product-category', {
    params: {
      ...data,
      limit,
      page,
    },
  })
}
