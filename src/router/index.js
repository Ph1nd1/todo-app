import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Guide from '../views/Guide';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Guide',
    name: 'Guide',
    component: Guide,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router