import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'
const AUTH_BASE_URL = 'http://localhost:8080/auth'

const LOGIN_URL = '/login'
const REGISTER_URL = '/register'

const PROFILE_URL = '/profiles'
const PROFILE_USER_URL = '/user'

const TWEET_URL = '/tweets'
const FOR_YOU_URL = '/ForYou'
const FOLLOWING_URL = '/Following'

let tokenFetch = null

export const setAuthToken = (token) => {
  tokenFetch = token
  if (tokenFetch && tokenFetch !== null && tokenFetch !== '') {
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenFetch}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export const login = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL.concat(LOGIN_URL)}`, userData)
    return response.data.token
  } catch (error) {
    throw error.response.data
  }
}

export const register = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL.concat(REGISTER_URL)}`, userData)
    return response.data.token
  } catch (error) {
    throw error.response.data
  }
}

export const getProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL.concat(PROFILE_URL).concat(PROFILE_USER_URL)}`)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const getForYouTweets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL.concat(TWEET_URL).concat(FOR_YOU_URL)}`)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const getFollowingTweets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL.concat(TWEET_URL).concat(FOLLOWING_URL)}`)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}