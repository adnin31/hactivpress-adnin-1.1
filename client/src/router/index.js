import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import getAllArticles from '@/components/getAllArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: getAllArticles
        }
      ]
    }
  ]
})
