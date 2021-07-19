export interface ResponseSuccess<T> {
  data?: T | null,
  message?: string
}

export interface ResponseFail {
  error?: Error | string
}

export interface NewtorkResponse<T> extends ResponseSuccess<T>, ResponseFail { }


export interface WithSearchRequest {
  search?: string
  page?: number
  limit?: number
}