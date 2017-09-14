import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import jwtDecoded from 'jwt-decode'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allArticle: [],
    allCategory: [],
    allAuthor: []
  },
  mutations: {
    setAllArticle (state, payload) {
      state.allArticle = payload
    },
    setAllCategory (state, payload) {
      state.allCategory = payload
    },
    setAllAuthor (state, payload) {
      state.allAuthor = payload
    }
  },
  actions: {
    getAllArticle ({commit}) {
      console.log('getAllArticle')
      axios.get(`http://localhost:3000/api/articles`)
      .then(res => {
        commit('setAllArticle', res.data)
      })
    },
    getCategory ({commit}, id) {
      axios.get(`http://localhost:3000/api/articles/category/${id}`)
      .then(res => {
        commit('setAllCategory', res.data)
      })
    },
    getAuthor ({commit}, id) {
      axios.get(`http://localhost:3000/api/articles/author/${id}`)
      .then(res => {
        commit('setAllAuthor', res.data)
      })
    }
  }
})
