import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'load data',
    films: [],
    people: [],
    peopleData: {}
  },
  mutations: {
    filmsPending: state => state.status = 'pending...',
    filmsSuccess: (state, data) => {
      state.status = 'data loaded'
      state.films = data.results
    },
    filmsError: state => {
      state.status = 'error in data loading'
    },
    peoplePending: state => state.status = 'pending...',
    peopleSuccess: (state, data) => {
      state.status = 'data loaded'
      state.peopleData = data
      state.people = data.results
    },
    peopleError: state => {
      state.status = 'error in data loading'
    },

  },
  actions: {
    loadFilms ({ commit }) {
      commit('filmsPending')
      fetch('https://swapi.co/api/films')
        .then(res => res.json())
        .then(data => commit('filmsSuccess', data))
        .catch(ex => commit('filmsError', ex))
    },
    loadPeople ({ commit }, payload = {}) {
      commit('peoplePending')
      fetch(payload.url || 'https://swapi.co/api/people')
        .then(res => res.json())
        .then(data => commit('peopleSuccess', data))
        .catch(ex => commit('peopleError', ex))
    }
  }
})
