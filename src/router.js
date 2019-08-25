import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'


var router = new VueRouter({
    routes: [
        {path:'/', redirect: '/home'},//路由重定向
        {path:'/home', component: Home},
        {path:'/member', component: Member},
        {path:'/shopcar', component: Shopcar},
        {path:'/search', component: Search},
        {path:'/home/newslist', component: NewsList},
        {path:'/home/newsinfo/:id', component: Newsinfo},
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮类，默认类router-link-active
})



export default router