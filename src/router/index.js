import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import person from '@/components/person'
import shelf from '@/components/shelf'
import bytheme from '@/components/bytheme'
// import ShowBooks from '@/components/ShowBooks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/shelf',
      name: 'shelf',
      component: shelf
    },
    {
      path: '/bytheme',
      name: 'bytheme',
      component: bytheme  
    }
  ]
})
