import React from 'react'
import Head from 'next/head'
import BRAND_NAME from '@utils/constants/brand'
import { NavbarNext } from '@components/molecules/Navbar'
import ProductPage from '@components/templates/ProductPage'

/* 
? TODO
[] Select
[] Data zero
[x] Menu Side
[x] Produk List
[x] Filter
[x] Pagination
*/
const DefaultProductPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Product | {BRAND_NAME}</title>
      </Head>
      <NavbarNext totalCartItem={21} totalNotifItem={10} isLogin={false} />
      <div>
        <ProductPage />
      </div>
    </React.Fragment>
  )
}

export default DefaultProductPage
