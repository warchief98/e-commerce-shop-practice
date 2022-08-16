import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Stocks from '@/components/stocks/Stocks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home,
  },
  {
    path:'/portfolio',
    component:Portfolio,
  },
  {
    path:'/stocks',
    component:Stocks,
  },
]

const router = new VueRouter({
  routes
})

export default router
