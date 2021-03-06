import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import CinemaRouter from './cinema'
import MineRouter from './mine'

Vue.use(VueRouter)

const routes = [
  MovieRouter,
  CinemaRouter,
  MineRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
