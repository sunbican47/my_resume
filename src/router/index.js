import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import home from '@/components/Home'
import tow from '@/components/Tow'

import step from '@/components/Step'
import skill from '@/components/Skill'
import demo from '@/components/Hello'
import three from '@/components/Three'

import contact from '@/components/Experience/Contact'
import production from '@/components/Experience/Production'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'home',
      path:'/home',
      meta:{index:1},  //定义层级，可以去比较是向前还是向后的动画
      component:home
    },{
      name:'tow',
      path:'/tow',
      meta:{index:2},
      component:tow
    },{
      name:'step',
      path:'/step',
      component:step
    }
    ,{
      name:'steps',
      path:'/steps',
      components: {
        default:  step,
        steps: step
      }
    }
    ,{
      name:'skill',
      path:'/skill',
      meta:{index:3},
      component:skill
    }
    ,{
      name:'/three',
      path:'/three',
      component:three
    }
    ,{
      name:'/demo',
      path:'/',
      component:demo
    },{
      name:'/contact',
      path:'/contact',
      component:contact
    }
    ,{
      name:'/production',
      path:'/production',
      component:production
    }

  ]
})
