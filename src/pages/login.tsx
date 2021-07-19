import Button from '@components/atoms/Button';
import { loginNetwork } from '@network/auth/auth';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@utils/constants/token';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr';


/**
 * THIS IS SIMPLE EXAMPLE FOR HANDLE NETWROK / REST:API
 *  */
const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async data => {
    loginNetwork({ password: data.password, username: data.username })
      .then(resp => {
        Cookies.set(ACCESS_TOKEN_KEY, resp.data.data.access_token)
        Cookies.set(REFRESH_TOKEN_KEY, resp.data.data.access_token)
      })
      .catch(err => console.log("error bos"))
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username", { required: true })} className="border-2" />
        <input type="text" {...register("password", { required: true })} className="border-2" />
        <Button onClick={handleSubmit(onSubmit)}>Masuk</Button>
      </form>
    </div>
  )
}

export default LoginPage
