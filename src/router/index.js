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
]

const router = new VueRouter({
  routes
})

export default router
