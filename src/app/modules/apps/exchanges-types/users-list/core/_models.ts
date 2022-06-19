import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  exchangeType?: string
  
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  exchangeType: '',
  
}
