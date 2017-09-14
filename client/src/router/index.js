import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import getAllArticles from '@/components/getAllArticle'
import getAllCategory from '@/components/getCategory'
import getAuthor from '@/components/getAuthor'
import addarticles from '@/components/addArticles'
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
        },
        {
          path: '/category/:id',
          component: getAllCategory
        },
        {
          path: '/author/:id',
          component: getAuthor
        },
        {
          path: '/addarticles',
          component: addarticles
        }
      ]
    }
  ]
})
