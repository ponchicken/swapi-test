import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Persons from './views/Persons.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      exact: true
    },
    {
      path: '/persons',
      name: 'persons',
      component: Persons
    }
  ]
})
