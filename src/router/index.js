import Vue from 'vue'
import Router from 'vue-router'
// 主页组件
import Index from '@/components/Index'
// 登录组件
import Login from '@/components/Login'
// 注册组件
import Register from '@/components/Register'
// 后台组件
import Home from '@/components/Home'
// 后台首页组件
import HomeIndex from '@/components/homeChild/HomeIndex'
// 人员管理组件
import Persion from '@/components/homeChild/persion/Persion'
// 后台问卷总览组件
import HomeQuestionShow from '@/components/homeChild/question/HomeQuestionShow'
// 后台问卷增加组件
import HomeQuestionAdd from '@/components/homeChild/question/HomeQuestionAdd'
// 后台问卷增加选择类型组件
import QuestionAddSelectType from '@/components/homeChild/question/questionAddChild/SelectType'
// 后台问卷增加选择类型组件
import QuestionAddAddTitle from '@/components/homeChild/question/questionAddChild/AddTitle'
// 后台问卷题目增加组件
import QuestionAddIssue from '@/components/homeChild/question/questionAddChild/AddIssue'
// 后台问卷结语增加组件
import QuestionAddEpilog from '@/components/homeChild/question/questionAddChild/AddEpilog'
// 后台问卷结语增加组件
import QuestionAddPublish from '@/components/homeChild/question/questionAddChild/AddPublish'
// 后台回答展示组件
import HomeAnswerShow from '@/components/homeChild/answer/HomeAnswerShow'
// 后台信息配置组件
import HomeConfigInfo from '@/components/homeChild/config/HomeConfigInfo'
// 用户权限 -----------------------------------------
// 问卷组件
import Inquiry from '@/components/Inquiry'
// 回复组件
import AnswerAnalyze from '@/components/AnswerAnalyze'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/home/index',
        name: 'homeindex',
        component: HomeIndex
      }, {
        path: '/home/persion',
        name: 'persion',
        component: Persion
      }, {
        path: '/home/questionShow',
        name: 'homequestionshow',
        component: HomeQuestionShow
      }, {
        path: '/home/questionAdd',
        name: 'homequestionadd',
        component: HomeQuestionAdd,
        children: [{
          path: '/home/questionAdd/',
          name: 'selecttype',
          component: QuestionAddSelectType
        }, {
          path: '/home/questionAdd/AddTitle',
          name: 'addtitle',
          component: QuestionAddAddTitle
        }, {
          path: '/home/questionAdd/AddIssue/:inquiryId',
          name: 'addissue',
          component: QuestionAddIssue
        }, {
          path: '/home/questionAdd/AddEpilog/:inquiryId',
          name: 'addepilog',
          component: QuestionAddEpilog
        }, {
          path: '/home/questionAdd/AddPublish/:inquiryId',
          name: 'questionaddpublish',
          component: QuestionAddPublish
        }]
      }, {
        path: '/home/answerShow',
        name: 'homeanswershow',
        component: HomeAnswerShow
      }, {
        path: '/home/configInfo',
        name: 'homeconfiginfo',
        component: HomeConfigInfo
      }]
    }, {
      path: '/inquiry/:inquiryId',
      name: 'inquiry',
      component: Inquiry
    }, {
      path: '/answerAnalyze/:answerId',
      name: 'analyze',
      component: AnswerAnalyze
    }
  ]
})
