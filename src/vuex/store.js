
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//state对象主要是储存数据
  var state={
    screenHeight:""
  }
//mutations主要是为了该bainstate里面的数据值
  var mutations={
    changeHeadName(state,name){//第一个对象必须是state，你也可以写这个参数，但是第一个参数必须是state
      state.headerName=name
    }
  }
//实例化vuex.store
const store=new Vuex.Store({
  state,
  mutations
})
export default  store;
