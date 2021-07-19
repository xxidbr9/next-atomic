import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ISearchClinic extends WithSearchRequest {}

export type ClinicListType = {
  id?: string
  name?: string
  location_address?: string
  location_lat?: number
  location_long?: number
  phone_number?: string
  whatsapp_number?: string
  image_links?: string
}

type SearchClinicResponse = {
  clinics?: ClinicListType[]
  has_next_page?: boolean
  total_Clinic?: number
}

export async function searchClinicNetwork(
  data: ISearchClinic
): Promise<AxiosResponse<NewtorkResponse<SearchClinicResponse>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  const search = data.search || ''
  return ellaAxios.get('/v1/catalog/clinic', {
    params: {
      ...data,
      limit,
      page,
      search,
    },
  })
}
