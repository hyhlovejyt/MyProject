import Vue from 'vue'

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由模块
Vue.use(VueRouter)


import Vuex from 'vuex'
Vue.use(Vuex)


var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state:{
    //将购物车中的商品数据用一个数组存储起来 {id: 商品id, count: 购买数量, price: 单价, selected: true}
    car: car
  },
  mutations:{
    addToCar(state, goodsinfo){
      var flag = false

      state.car.some(item => {
        //在购物中已经有了对应的商品则只需更新数量
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      //当没有对应商品则添加商品
      if(!flag){
        state.car.push(goodsinfo)
      }

      //数据暂存在本地
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车中商品的数量值
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar(state, id) {
      // 根据Id，从store 中的购物车中删除对应的那条商品数据
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true;
        }
      })
      // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 把最新的 所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


//2.1导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true;


//引入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//引入header和轮播图
/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload); */
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



//1.3导入自己的router.js模块
import router from './router.js'


//导入跟组件App.vue
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c =>c (app),
    router,  //1.4挂载路由
    store
})
