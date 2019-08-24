import Vue from 'vue'

//引入mui的样式
import './lib/mui/css/mui.min.css'

//引入header
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


//导入跟组件App.vue
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c =>c (app)
})
