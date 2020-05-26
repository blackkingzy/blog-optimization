import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

import Blog from '@/views/blog'
import Photo from '@/views/photo'
import BlogContent from '@/views/blog/components/Content'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'Layout', //因为当某个路由有子级路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
      component: Layout,
      redirect: '/blog/zhangyue?sort=newlist',
      children: [
        {
          path: 'blog',
          component: Blog,
          children: [
            {
              path: '',
              component: BlogContent
            },
            {
              path: ':label',
              component: BlogContent
            }
          ]
        }
      ]
    },
    {
      path: '/photo',
      component: Layout,
      children: [
        { path: '', name: 'photo', component: Photo }
        // ...其他子路由
      ]
    },
    {
      path: '/video',
      name: 'video',
      component: Layout
    }
    // ...其他子路由
    // {
    //   path: '/photoUpload',
    //   name: 'photoUpload',
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ '@/components/photo/PhotoUpload.vue'
    //     )
    // },
  ]
})
