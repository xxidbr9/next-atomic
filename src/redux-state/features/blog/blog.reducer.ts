import { ActionRedux } from '@utils/types/redux'
import { HYDRATE } from 'next-redux-wrapper'
import actionTypes, { BlogConstantsTypes } from './blog.constant'

/* 
? TODO 
[ ] Remind nando to create tagging system in backend
*/

type TagType = {
  id?: string
  slug?: string
  name?: string
}

type BlogType = {
  id?: string
  slug?: string
  title?: string
  tagline?: string
  image_link?: string
  creation_time?: string
  tags?: TagType[]
}

type BlogsType = {
  contents?: BlogType[]
  page?: number
  limit?: number
  total?: number
  is_loading?: boolean
  has_next_page?: boolean
  is_next_page_loading?: boolean
}

type HeadlightBlogType = {
  content?: BlogType
  is_loading: boolean
}

type FeatureBlogType = {
  contents?: BlogType[]
  is_loading: boolean
}

export type BlogStateType = {
  blogs?: BlogsType
  headlightBlog?: HeadlightBlogType
  featureBlog?: FeatureBlogType
}

const initialState: BlogStateType = {
  headlightBlog: {
    is_loading: true,
    content: {
      creation_time: '',
      id: '',
      image_link: '',
      slug: '',
      tagline: '',
      tags: [],
      title: '',
    },
  },
  blogs: {
    page: 0,
    limit: 10,
    total: 0,
    contents: [],
    is_loading: true,
    has_next_page: false,
    is_next_page_loading: false,
  },
  featureBlog: {
    contents: [],
    is_loading: true,
  },
}

function reducer(
  state: BlogStateType = initialState,
  action: ActionRedux<BlogConstantsTypes & typeof HYDRATE, BlogStateType>
): BlogStateType {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case actionTypes.FETCH_BLOG:
      return {
        ...state,
        ...{ blogs: action.payload.blogs },
      }

    case actionTypes.FETCH_HIGHLIGHT_BLOG:
      return {
        ...state,
        ...{ headlightBlog: action.payload.headlightBlog },
      }

    case actionTypes.FETCH_FEATURE_BLOG:
      return {
        ...state,
        ...{ featureBlog: action.payload.featureBlog },
      }

    case actionTypes.FETCH_BLOG_NEXT_PAGE:
      return {
        ...state,
        ...{
          blogs: {
            ...state.blogs,
            is_next_page_loading: action.payload.blogs.is_next_page_loading,
          },
        },
      }

    case actionTypes.APPEND_BLOG:
      return {
        ...state,
        ...{
          blogs: {
            contents: [
              ...state.blogs.contents,
              ...action.payload.blogs.contents,
            ],
            has_next_page: action.payload.blogs.has_next_page,
            page: action.payload.blogs.page,
          },
        },
      }

    default:
      return state
  }
}

export default reducer
