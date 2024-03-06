import { createStore } from 'vuex'
import router from './router/index.js'
import { login, register, setAuthToken } from './utils/fetch.js'

const store = createStore({
  state: {
    isAuthenticated: false,
    token: null
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    clearAuthData(state) {
      state.isAuthenticated = false
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions: {

    async registerUser({ commit }, userData) {
      try {
        const { tokenResponse } = register(userData)
        if (tokenResponse != null && tokenResponse !== "") {
          commit('setAuthentication', true)
          commit('setToken', tokenResponse)
          setAuthToken(tokenResponse)
          console.log('User registered successfully: ')
          router.push('/home')
        } else {
          console.error('Error, user not found')
        }
      } catch (error) {
        console.error('Error during user registration: ', error)
      }
    },

    async loginUser({ commit }, userData) {
      try {
        const { tokenResponse } = login(userData)
        if (tokenResponse != null && tokenResponse !== "") {
          commit('setAuthentication', true)
          commit('setToken', tokenResponse)
          setAuthToken(tokenResponse)
          console.log('User logged successfully:')
          router.push('/home')
        } else {
          console.error('Error, user not found')
        }
      } catch (error) {
        console.error('Error during user login:', error)
      }
    },

    logout({ commit }) {
      try {
        commit('clearAuthData')
        setAuthToken(null)
        console.log('Log out')
        router.push('/')
      } catch (error) {
        console.log('Error during log out: ', error)
      }
    },

    checkAuth({ commit }) {
      const token = localStorage.getItem('token')
      if (token && token !== "") {
        console.log('Checked auth')
        commit('setAuthentication', true)
        commit('setToken',token)
        setAuthToken(token)
      } else {
        console.log('Token not found')
        setAuthToken(null)
      }
    }

  },

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    token: (state) => state.token
  },

})
store.dispatch('checkAuth');
export default store;
