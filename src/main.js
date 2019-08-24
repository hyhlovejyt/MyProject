import Vue from 'vue'

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由模块
Vue.use(VueRouter)

//2.1导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


//引入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//引入header和轮播图
import { Header, Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



//1.3导入自己的router.js模块
import router from './router.js'


//导入跟组件App.vue
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c =>c (app),
    router  //1.4挂载路由
})
