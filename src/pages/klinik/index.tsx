import React from 'react'
import Head from 'next/head'
import BRAND_NAME from '@utils/constants/brand'
import ClinicPage from '@components/templates/ClinicPage'

/* 
? TODO
[] Select
[] Data zero
[x] Menu Side
[x] Produk List
[x] Filter
[x] Pagination
*/
const DefaultClinicPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Clinic | {BRAND_NAME}</title>
      </Head>
      <ClinicPage />
    </React.Fragment>
  )
}

export default DefaultClinicPage
