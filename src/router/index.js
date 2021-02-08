import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateSondage from "@/views/CreateSondage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CreateSondage',
    component: CreateSondage
  },
  {
    path: '/sondage/:id',
    name: 'Sondage',
    component: () => import(/* webpackChunkName: "Sondage" */ '../views/Sondage.vue')
  },
  {
    path: '/result/:id',
    name: 'ResultSondage',
    component: () => import(/* webpackChunkName: "ResultSondage" */ '../views/ResultSondage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
