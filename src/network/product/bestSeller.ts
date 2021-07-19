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

type SearchProductLastAsBestSellerResponse = {
  products?: ProductType[]
  has_next_page?: boolean
  total_product?: number
}

export async function getProductLastAsBestSeller(
  data: ISearchProduct
): Promise<
  AxiosResponse<NewtorkResponse<SearchProductLastAsBestSellerResponse>>
> {
  return ellaAxios.get(`/v1/catalog/product/latest`, {
    params: {
      ...data,
    },
  })
}
