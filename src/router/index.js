import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import baoming from '@/pages/works/baoming'
import courseList from '@/pages/course/courseList'
import courseDetail from '@/pages/course/courseDetail'
import organ from '@/pages/organ/organ'
import organDetail from '@/pages/organ/child/details'
import bdmap from '@/pages/organ/child/bdmap'
import step1 from '@/pages/works/step1'
import step2 from '@/pages/works/step2'
import step3 from '@/pages/works/step3'
import search from '@/pages/works/search'
import newsList from '@/pages/news/newsList'
import newsDetail from '@/pages/news/children/newsDetails'
import notFound from '@/components/404'
import learning from '@/pages/learning/learning'
import test from '@/pages/exam/test'
import register from '@/pages/login/register'

import info1 from '@/pages/jgsettled/info1'
import info2 from '@/pages/jgsettled/info2'
import conment from '@/pages/organ/conment'
import posting from '@/pages/find/posting'
import login from '@/pages/login/login'
import teacherDetails from '@/pages/teacher/teacherDetails'
import order from '@/pages/user/order'
import findPwd from '@/pages/login/findPwd'
import findList from '@/pages/find/findList'
import personFile from '@/pages/user/personFile'
import findDetails from '@/pages/find/findDetails'
import empty from '@/components/empty'
import info3 from '@/pages/jgsettled/info3'

import mapTest from '@/components/cityTest'

import vip from '@/pages/vip/vip'
import qlearning from '@/pages/exam/qlearning'

import teacherAll from '@/pages/teacher/teacherAll'
import sc from '@/pages/stxx/sc'
import ct from '@/pages/stxx/ct'
import myresult from '@/pages/stxx/myresult'
import stxue from '@/pages/stxx/stxue'

import certificate from '@/pages/vip/certificate'

import mycourse from '@/pages/stxx/mycourse'

import basics from '@/pages/stxx/basics'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/teacherAll',
      name:'teacherAll',
      component:teacherAll
    },
    {
      path:'/sc',
      name:'sc',
      component:sc
    },
    {
      path:'/ct',
      name:'ct',
      component:ct
    },
    {
      path:'/myresult',
      name:'myresult',
      component:myresult
    },
    {
      path:'/stxue',
      name:'stxue',
      component:stxue
    },
    {
      path:'/vip',
      name:'vip',
      component:vip
    },
    {
      path:'/qlearning',
      name:'qlearning',
      component:qlearning
    },
    {
      path:'/mycourse',
      name:'mycourse',
      component:mycourse
    },
    {
      path:'/certificate',
      name:'certificate',
      component:certificate
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning
    },
    {
      path: '/mapTest',
      name: 'mapTest',
      component: mapTest
    },
    {
      path: '/bdmap',
      name: 'bdmap',
      component: bdmap
    },
    {
      path: '/findPwd',//找回密码
      name: 'findPwd',
      component: findPwd
    },
    {
      path: '/teacherDetails',
      name: 'teacherDetails',
      component: teacherDetails
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/empty',//暂无记录
      name: 'empty',
      component: empty
    },
    {
        path: '/info3',
        component: info3
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/order',//我的订单
      name: 'order',
      component: order
    },
    {
      path: '/organ',
      name: 'organ',
      component: organ
    },
    {
      path: '/courseList',
      name: 'courseList',
      component: courseList
    },
    {
      path: '/courseDetail',
      name: 'courseDetail',
      component: courseDetail
    },
    {
      path: '/organDetail',
      name: 'organDetail',
      component: organDetail
    },
    {
      path: '/',
      name: 'step1',
      component: step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: step2
    },
    {
      path: '/step3',
      name: 'step3',
      component: step3
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsDetails',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/info1',
      component: info1
    },
    {
      path: '/info2',
      component: info2
    },

    {
      path: '/conment',
      component: conment
    },
    {
      path: '/findList', //发现列表
      name:'findList',
      component: findList,
    },
    {
      path: '/personFile', //个人中心
      name:'personFile',
      component: personFile,
    },
    {
      path: '/posting',
      component: posting
    },
    {
      path: '/findDetails', //发现详情
      name:'findDetails',
      component: findDetails,
    },
    {
      path:'/baoming',
      name:'baoming',
      component:baoming
    },
    {
      path:'/basics',
      name:'basics',
      component:basics
    }
  ]
})
