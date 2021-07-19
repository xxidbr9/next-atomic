export enum BASE_ROUTES_TYPE {
  HOME = '/',
  BLOG = '/blog',
  PRODUCT = '/produk',
  CLINIC = '/klinik',
  TREATMENT = '/perawatan',
  RESERVATION = '/reservasi',
  ABOUT = '/about',
  SIGN_IN = '/masuk',
  SIGN_UP = '/daftar',
  CART = '/keranjang',
  SEARCH = '/search',
  RESELLER = '/reseller',
}

const BASE_ROUTES = {
  ...BASE_ROUTES_TYPE,
}

export default BASE_ROUTES
