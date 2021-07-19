export type ActionRedux<T, P> = {
  type: T
  payload?: P
  error?: Error
}
