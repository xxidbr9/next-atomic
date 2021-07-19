import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@utils/constants/token'
import axios from 'axios'

import Cookies from 'js-cookie'

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URI
const ellaAxios = axios.create({
  baseURL,
})

/* 
? TODO
[ ] add logic handler for storing the token and remove it
*/
const removeCookies = err => {
  Cookies.remove(ACCESS_TOKEN_KEY)
  Cookies.remove(REFRESH_TOKEN_KEY)
  return Promise.reject(err)
}

/* 
? TODO
[ ] Check response if response token is expired
*/
const errorCallback = (err: any) => {
  return new Promise((resolve, reject) => {
    const originalReq = err.config
    if (
      err.response.status === 400 &&
      err.config &&
      !err.config.__isRetryRequest
    ) {
      originalReq._retry = true

      let res = fetch(`${baseURL}/v1/account/access-token/refresh`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({
          refresh_token: Cookies.get(REFRESH_TOKEN_KEY),
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          originalReq.headers['Authorization'] = 'Bearer ' + res.access_token
          return axios(originalReq)
        })
        .catch(err => removeCookies(err))
      return resolve(res)
    }

    return reject(err)
  })
}

/* 
? TODO 
[ ] Check and Identify the response value 
[ ] Add logic to refresh the token before expire
*/
const responseCallback = (response: any): any => response

ellaAxios.interceptors.response.use(responseCallback, errorCallback)
export default ellaAxios
