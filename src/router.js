import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

var router = new VueRouter({
    routes: [
        {path:'/', redirect: '/home'},//路由重定向
        {path:'/home', component: Home},
        {path:'/member', component: Member},
        {path:'/shopcar', component: Shopcar},
        {path:'/search', component: Search},
        {path:'/home/newslist', component: NewsList},
        {path:'/home/newsinfo/:id', component: Newsinfo},
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮类，默认类router-link-active
})



export default router