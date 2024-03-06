import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'
const AUTH_BASE_URL = 'http://localhost:8080/auth'
const LOGIN_URL = '/login'
const REGISTER_URL = '/register'

let tokenFetch = null
console.log("Token fetch: ", tokenFetch)
console.log(API_BASE_URL)

export const setAuthToken = (token) => {
    tokenFetch = token
    console.log("Token fetch: ", tokenFetch)
  if (tokenFetch && tokenFetch !== null && tokenFetch !== "") {
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenFetch}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export const login = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL.concat(LOGIN_URL)}`, userData)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const register = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL.concat(REGISTER_URL)}`, userData)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
