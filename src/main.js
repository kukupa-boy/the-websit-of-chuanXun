// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  "jquery"


// ----------------------------------------------element.js配置---------------------------------------------------------
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// -------------------------------------------字体库font-awesome的配置--------------------------------------------------
import 'font-awesome/css/font-awesome.css'
Vue.use(animate)

//-------------------------------------------组件切换动画的配置---------------------------------------------------------
import animate from 'animate.css'


//-------------------------------------------Vuex数据共享的配置---------------------------------------------------------
import vuex from 'vuex'
Vue.use(vuex)
import store from './vuex/store.js'


//-------------------------------------------axios获取数据的配置--------------------------------------------------------
import  Axios from "axios";

//------------------------------------------vue实现跨域（反向代理）-----------------------------------------------------
Vue.prototype.HOST='/api'
Vue.prototype.axios=Axios;


//----------------------------------------------使用echarts的配置--------------------------------------------------------
import echarts from 'echarts'
Vue.prototype.$echarts = echarts




Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
