import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import jwtDecoded from 'jwt-decode'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allArticle: []
  },
  mutations: {
    setAllArticle (state, payload) {
      state.allArticle = payload
    }
  },
  actions: {
    getAllArticle ({commit}) {
      console.log('getAllArticle')
      axios.get(`http://localhost:3000/api/articles`)
      .then(res => {
        commit('setAllArticle', res.data)
      })
    }
  }
})
