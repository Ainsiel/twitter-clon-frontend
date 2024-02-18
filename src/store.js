import { createStore } from "vuex";
import axios from "axios";
import router from "./router/index.js";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async registerUser({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users",
          userData
        );
        commit("setUser", response.data);
        router.push('/');
        console.log("User registered successfully:", response.data);
      } catch (error) {
        console.error("Error during user registration:", error);
      }
    },
    async loginUser({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/login",
          userData
        );
        if (response.data != null) {
          commit("setUser", response.data);
          router.push('/home');
          console.log("User logged successfully:", response.data);
        } else {
          console.error("Error, user not found")
        }
      } catch (error) {
        console.error("Error during user login:", error);
      }
    },
  },

  getters: {
    user: (state) => state.user,
  },
});