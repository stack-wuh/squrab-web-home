import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }else {
    const position = {}

    if(to.hash) {
      position.selector = to.hash
      if(document.querySelector(to.hash)) {
        return position
      }
      return false
    }
    
    return new Promise(resolve => {
      if(to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      resolve(position)
    })
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import ('@/views'),
      redirect: '/home'
    },
    {
      path: '/',
      component: () => import ('@/views'),
      children: [
        {
          path: '/home',
          component: () => import ('@/views/IndexManage/main')
        },
        {
          path: '/footer',
          redirect: '/footer/news',
          component: ()  => import ('@/views/footerManage'),
          children: [
            {
              path: '/footer/self',
              component: () => import('@/views/footerManage/self'),
              meta: {
                scrollToTop: true
              }
            },
            {
              path: '/footer/law',
              component: () => import('@/views/footerManage/law'),
              meta: {
                scrollToTop: true
              }
            },
            {
              path: '/footer/news',
              component: () => import('@/views/footerManage/news'),
              meta: {
                scrollToTop: true
              }
            },
            {
              path: '/footer/port',
              component: () => import('@/views/footerManage/port'),
              meta: {
                scrollToTop: true
              }
            },
            {
              path: '/footer/port/social',
              meta: {
                isFullScreen: true,
                scrollToTop: true
              },
              component: () => import('@/views/footerManage/port/school')
            },
            {
              path: '/footer/port/school',
              meta: {
                scrollToTop: true,
                isFullScreen: true
              },
              component: () => import('@/views/footerManage/port/social')
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior
})

