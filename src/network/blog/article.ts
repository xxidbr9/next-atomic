import ellaAxios from '@utils/libs/axios'
import { NewtorkResponse, WithSearchRequest } from '@utils/types/network'
import { AxiosResponse } from 'axios'

export default null

interface ISearchBlog extends WithSearchRequest {}

export type BlogType = {
  id?: string
  title?: string
  tagline?: string
  image_link?: string
  creation_time?: string
}

/* 
? TODO
[ ] Remind nando to create tagging system on the backend
 */
export type SearchBlogResponse = {
  whats_on_articles?: BlogType[]
  total_whats_on_article?: number
  has_next_page?: boolean
}

export async function searchBlogNetwork(
  data: ISearchBlog
): Promise<AxiosResponse<NewtorkResponse<SearchBlogResponse>>> {
  const limit = data.limit || 10
  const page = data.page || 1
  return ellaAxios.get('/v1/catalog/whats-on-article', {
    params: {
      ...data,
      limit,
      page,
    },
  })
}

interface IInfoBlog {
  id?: string
}
export type InfoBlogType = BlogType & {
  content?: string
}
export type InfoBlogResponse = {
  whats_on_article?: InfoBlogType
}
export async function infoBlogNetwork(
  data: IInfoBlog
): Promise<AxiosResponse<NewtorkResponse<InfoBlogResponse>>> {
  return ellaAxios.get(`/v1/catalog/whats-on-article/${data.id}`)
}
