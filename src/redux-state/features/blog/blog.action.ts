import { SearchBlogResponse } from '@network/blog/article'
import { ActionRedux } from '@utils/types/redux'
import actionTypes, { BlogConstantsTypes } from './blog.constant'
import { BlogStateType } from './blog.reducer'

export function setHeadlightBlog(
  data: SearchBlogResponse
): ActionRedux<BlogConstantsTypes, BlogStateType> {
  return {
    type: actionTypes.FETCH_HIGHLIGHT_BLOG,
    payload: {
      headlightBlog: {
        content: data.whats_on_articles[0],
        is_loading: false,
      },
    },
  }
}

export function setOtherBlog(
  data: SearchBlogResponse,
  page: number = 0,
  limit: number = 0
): ActionRedux<BlogConstantsTypes, BlogStateType> {
  return {
    type: actionTypes.FETCH_BLOG,
    payload: {
      blogs: {
        contents: data.whats_on_articles,
        has_next_page: data.has_next_page,
        is_loading: false,
        total: data.total_whats_on_article,
        limit,
        page,
        is_next_page_loading: false,
      },
    },
  }
}

export function setFeatureBlog(
  data: SearchBlogResponse
): ActionRedux<BlogConstantsTypes, BlogStateType> {
  return {
    type: actionTypes.FETCH_FEATURE_BLOG,
    payload: {
      featureBlog: {
        contents: data.whats_on_articles,
        is_loading: false,
      },
    },
  }
}

export function getNextOtherBlogPage(): ActionRedux<
  BlogConstantsTypes,
  BlogStateType
> {
  return {
    type: actionTypes.FETCH_BLOG_NEXT_PAGE,
    payload: {
      blogs: {
        is_next_page_loading: true,
      },
    },
  }
}

export function setNextOtherBlogPage(
  data: SearchBlogResponse,
  page: number = 0,
  limit: number = 0
): ActionRedux<BlogConstantsTypes, BlogStateType> {
  return {
    type: actionTypes.APPEND_BLOG,
    payload: {
      blogs: {
        contents: data.whats_on_articles,
        has_next_page: data.has_next_page,
        is_loading: false,
        is_next_page_loading: false,
        limit,
        page,
        total: data.total_whats_on_article,
      },
    },
  }
}
