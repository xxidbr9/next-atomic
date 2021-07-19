import ellaAxios from "@utils/libs/axios"
import { NewtorkResponse } from "@utils/types/network"
import { AxiosResponse } from "axios"


interface ILogin {
  username: string,
  password: string
}

type AuthResponse = {
  access_token: string,
  refresh_token: string
}

export async function loginNetwork(data: ILogin): Promise<AxiosResponse<NewtorkResponse<AuthResponse>>> {
  return ellaAxios.post("/v1/account/login", {
    username: data.username,
    password: data.password
  })
}

