import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        icon: 'home',
        topLevel: true
      }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Hello,
      meta: {
        icon: 'chat',
        topLevel: true
      }
    },
    {
      path: '/user',
      name: 'User',
      component: Hello,
      meta: {
        icon: 'person',
        topLevel: false
      }
    },
    {
      path: '/setings',
      name: 'Settings',
      component: Hello,
      meta: {
        icon: 'settings',
        topLevel: true
      }
    },
    {
      path: '/block',
      name: 'Block',
      component: Hello,
      meta: {
        icon: 'block',
        topLevel: false
      }
    },
    {
      path: '/sleep',
      name: 'Sleep',
      component: Hello,
      meta: {
        icon: 'sleep',
        topLevel: false
      }
    }
  ]
})
