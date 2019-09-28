import Vue from 'vue'
import Router from 'vue-router'

// //气象报告的文件路由
// import weather_t from './weather/router_t.js';
// import weather_y from './weather/router_y.js';
// import weather_l from './weather/router_l.js';
//
// //人员管理的路由
// import person_t from './person_manager/router_t.js';
// import person_y from './person_manager/router_y.js';
// import person_l from './person_manager/router_l.js';
//
// //视频监控的路由
// import video_t from './video_system/router_t.js';
// import video_y from './video_system/router_y.js';
// import video_l from './video_system/router_l.js';
//
// //船舶管理的路由
// import ship_t from './ship/router_t.js';
// import ship_y from './ship/router_y.js';
// import ship_l from './ship/router_l.js';


//-----------------------------------一级路由(包括气象报告，视频监控，船舶管理，权限管理)-------------------------------
import authorityManagerment from '@/components/sidebar/authorityManagerment/authorityManagerment.vue'
import shipManagerment from '@/components/sidebar/shipManagerment/shipManagerment.vue'
import videoMonitor from '@/components/sidebar/videoMonitor/videoMonitor.vue'
import weatherReport from '@/components/sidebar/weatherReport/weatherReport.vue'


//----------------------------------------------二级路由----------------------------------------------------------------
//----------------------------------------------二级路由中的气象的路由（九个）------------------------------------------
import airPressure from '@/components/sidebar/weatherReport/airPressure/airPressure.vue'
import haze from '@/components/sidebar/weatherReport/haze/haze.vue'
import humidity from '@/components/sidebar/weatherReport/humidity/humidity.vue'
import precipitation from '@/components/sidebar/weatherReport/precipitation/precipitation.vue'
import temperature from '@/components/sidebar/weatherReport/temperature/temperature.vue'
import thunder from '@/components/sidebar/weatherReport/thunder/thunder.vue'
import visibility from '@/components/sidebar/weatherReport/visibility/visibility.vue'
import waveHeight from '@/components/sidebar/weatherReport/waveHeight/waveHeight.vue'
import windDirection from '@/components/sidebar/weatherReport/windDirection/windDirection.vue'
import defaultComponents from '@/components/sidebar/weatherReport/defaultComponents/defaultComponents.vue'


Vue.use(Router)

export default new Router({
  routes: [
    //-----------------------------------------------页面上默认打开显示的路由-------------------------------------------
  {
    path: '/',
    redirect:"/weatherReport/defaultComponents"
  },
    //------------------------------------------------气候报告的路由----------------------------------------------------
    {
    path: '/weatherReport',
    name: 'weatherReport',
    component: weatherReport,
    children:[
      {
        path: '/weatherReport/defaultComponents',
        name: 'defaultComponents',
        component: defaultComponents,
      },
      {
        path: '/weatherReport/airPressure',
        name: 'airPressure',
        component: airPressure,
      },
      {
        path: '/weatherReport/haze',
        name: 'haze',
        component: haze,
      },
      {
        path: '/sidebar/weatherReport/humidity',
        name: 'humidity',
        component: humidity,
      },
      {
        path: '/sidebar/weatherReport/precipitation',
        name: 'precipitation',
        component: precipitation,
      },
      {
        path: '/sidebar/weatherReport/temperature',
        name: 'temperature',
        component: temperature,
      },
      {
        path: '/sidebar/weatherReport/thunder',
        name: 'thunder',
        component: thunder,
      },
      {
        path: '/sidebar/weatherReport/visibility',
        name: 'visibility',
        component: visibility,
      },
      {
        path: '/sidebar/weatherReport/waveHeight',
        name: 'waveHeight',
        component: waveHeight,
      },
      {
        path: '/sidebar/weatherReport/windDirection',
        name: 'windDirection',
        component: windDirection,
      }
    ]
  },

//
// //------------------------------------------------------权限管理的路由----------------------------------------------
// {
//   path: '/sidebar/authorityManagerment',
//     name: 'authorityManagerment',
//   component: authorityManagerment
// },
//
// //------------------------------------------------------船舶管理的路由----------------------------------------------
// {
//   path: '/sidebar/shipManagerment',
//     name: 'shipManagerment',
//   component: shipManagerment
// },
//
// //------------------------------------------------------视频监控的路由----------------------------------------------
// {
//   path: '/sidebar/videoMonitor',
//     name: 'videoMonitor',
//   component: videoMonitor
// },
//     //----------------------------------------天气中的三个路由(根据不同的开发者进行引入)--------------------------------
//
//
//     //--------------------------------------------人员管理的三个路由----------------------------------------------------
//     person_t,
//     person_y,
//     person_l,
//     //--------------------------------------------视频监控的三个路由----------------------------------------------------
//     video_t,
//     video_y,
//     video_l,
//     //--------------------------------------------船舶管理的三个路由----------------------------------------------------
//     ship_t,
//     ship_y,
//     ship_l
  ]
})
