import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {User, UsersQueryResponse} from './_models'
import {getAuth} from '../../../../auth/core/AuthHelpers'
const auth = getAuth()
const API_URL = process.env.REACT_APP_API_URL
//const INVESTMENT_URL = `${API_URL}/admin/exchange_types`
const GET_INVESTMENT_URL = `${API_URL}/customer/get_investments`
const GET_SINGLE_INVESTMENT_URL = `${API_URL}/customer/get_investment`
const UPDATE_INVESTMENT = `${API_URL}/customer/update_investment`
const config = {
  headers: {
    'Content-type': 'application/json',
    'x-access-token': auth ? auth.data.token : '',
  },
}
const getInvestments = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${GET_INVESTMENT_URL}?${query}`, config)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}
//const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${GET_INVESTMENT_URL}?userId=${auth?.data.id}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${GET_SINGLE_INVESTMENT_URL}?investmentId=${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUser = (user: User): Promise<User | undefined> => {
  console.log("Hello world!");
  return axios
    .put(`${UPDATE_INVESTMENT}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getInvestments,
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
}
