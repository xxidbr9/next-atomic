import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import { infoBlogNetwork, InfoBlogResponse } from '@network/blog/article'
import Head from 'next/head'
import BRAND_NAME from '@utils/constants/brand'
import DetailBlogPage from '@components/templates/DetailBlogPage'

/* 
? TODO
[ ] Setup Detail Info Blog
[ ] Setup SEO meta
[ ] Setup Bunce rate
[ ] Styling
*/

type BlogDetailPageType = {
  data?: InfoBlogResponse
}

const DefaultBlogDetailPage: React.FC<BlogDetailPageType> = ({
  data,
  ...props
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {data.whats_on_article.title} | {BRAND_NAME}
        </title>
      </Head>
      <DetailBlogPage data={data} {...props} />
    </React.Fragment>
  )
}

export default DefaultBlogDetailPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = (await params?.slug[1]) as string
    const { data } = await infoBlogNetwork({ id })
    return {
      props: {
        data: data.data,
      },
    }
  } catch (error) {
    return {
      props: {
        error,
      },
      redirect: { destination: '/oops' },
    }
  }
}
