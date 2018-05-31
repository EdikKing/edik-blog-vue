import Vue from 'vue'
import Router from 'vue-router'
import BlogLayout from '@/components/BlogLayout'
import Blog from 'components/blog/Blog'
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
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
