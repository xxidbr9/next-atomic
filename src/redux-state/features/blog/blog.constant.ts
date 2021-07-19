enum BLOG_CONSTANT {
  FETCH_BLOG = 'blog/FETCH_BLOG',
  FETCH_HIGHLIGHT_BLOG = 'blog/FETCH_HIGHLIGHT_BLOG',
  FETCH_FEATURE_BLOG = 'blog/FETCH_FEATURE_BLOG',
  APPEND_BLOG = 'blog/APPEND_BLOG',
  FETCH_BLOG_NEXT_PAGE = 'blog/FETCH_BLOG_NEXT_PAGE',
}

const blogConstants = {
  ...BLOG_CONSTANT,
}

export type BlogConstantsTypes = BLOG_CONSTANT
export default blogConstants
