import React from 'react'
import Head from 'next/head'
import BRAND_NAME from '@utils/constants/brand'
import { NavbarNext } from '@components/molecules/Navbar'
import TreatmentPage from '@components/templates/TreatmentPage'

/* 
? TODO
[] Select
[] Data zero
[x] Menu Side
[x] Produk List
[x] Filter
[x] Pagination
*/
const DefaultTreatmentPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Treatment | {BRAND_NAME}</title>
      </Head>
      <NavbarNext totalCartItem={21} totalNotifItem={10} isLogin={false} />
      <div>
        <TreatmentPage />
      </div>
    </React.Fragment>
  )
}

export default DefaultTreatmentPage
