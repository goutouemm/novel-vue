import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index.js'

const routes = [
    { 
      path: '/', 
      name: 'layout', 
       // import('路径') // 懒加载
      component:()=> require('../components/layout/layout.vue'),
      redirect: '/index',
        children:[
                {
                  path:"/index",
                  name: 'index',
                  component:()=> require('../views/pages/index.vue')
                },
                {
                  path:"/novel",
                  name: 'novel',
                  component:()=> require('../views/pages/novel/noveslList.vue'),
                },
                {
                  path:"/novels-content/:id",
                  name: '小说内容',
                  component:()=> require('../views/pages/novel/novelContent.vue')
                },
              ]
    },
    {
      path: '/login',
      name: 'login', 
      component:()=> require('../components/login/Login.vue'),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import('../components/login/Register.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component:()=> require('../views/404.vue'),
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由守卫
router.beforeEach((to,from,next)=>{
  /* 
      to: 从哪个页面
      from: 到哪个页面
      next: 只有执行next 页面才会进行跳转
  */
  // 判断用户是否登录
  console.log("store",store.state.uInfo)
  const uInfo = store.state.uInfo.userInfo
  if(!uInfo.username){
    if(to.path=='/login'){
      next()
      return
    }
    next("/login")
  }else{
    next()
  }

})

/**
 * 导出 基础路由  
 **/

export default router