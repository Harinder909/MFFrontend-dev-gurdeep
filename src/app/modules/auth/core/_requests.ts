import axios from 'axios'
import {useAuth} from './Auth'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/verify_token`
export const LOGIN_URL = `${API_URL}/auth/signin`
export const LOGIN_OTP = `${API_URL}/auth/signin_otp`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`
const uuid = 'qwertyuiop'
const fcmToken = 'hgjgjjhgjg'
const device = 'web'
// Server should return AuthModel
export function loginotp(ucc: string) {
  return axios.post<AuthModel>(LOGIN_OTP, {
    ucc,
    uuid,
    fcmToken,
    device,
  })
}

export function tokenlogin(token: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    token,
    uuid,
    fcmToken,
    device,
  })
}

export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
    uuid,
    fcmToken,
    device,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(auth: AuthModel) {
  return auth?.data
}
