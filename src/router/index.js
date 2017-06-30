import Vue from 'vue'
import Router from 'vue-router'
import Pos from '../views/pos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Pos
    }
  ]
})
