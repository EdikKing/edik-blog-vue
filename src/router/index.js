import Vue from 'vue'
import Router from 'vue-router'
import BlogLayout from '@/components/blog/BlogLayout'
import Blog from 'components/blog/Blog'
import Article from 'components/blog/Article'
import UserLayout from 'components/user/UserLayout'

import Add from '@/components/user/AddArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BlogLayout',
      component: BlogLayout,
      children: [
        {
          path: '',
          component: Blog
        },
        {
          path: 'article',
          component: Article
        }
      ]
    },
    {
      path: '/user',
      name: 'UserLayout',
      component: UserLayout,
      children: [
        {
          path: '/',
          name: 'add',
          component: Add
        },
        {
          path: 'article',
          component: Article
        }
      ]
    }
  ]
})
