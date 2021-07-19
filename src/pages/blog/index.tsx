import React from 'react'
import BlogPage from '@components/templates/BlogPage'
import Head from 'next/head'
import BRAND_NAME from '@utils/constants/brand'

const DefaultBlogPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Blog | {BRAND_NAME}</title>
      </Head>
      <BlogPage />
    </React.Fragment>
  )
}

export default DefaultBlogPage
