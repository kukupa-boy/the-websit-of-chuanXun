import Vue from 'vue'
import Router from 'vue-router'

//----------------------------------------------气象管理---------------------------------------------------------------
import authorityManagerment from '@/components/sidebar/authorityManagerment/authorityManagerment.vue'
import shipManagerment from '@/components/sidebar/shipManagerment/shipManagerment.vue'
import videoMonitor from '@/components/sidebar/videoMonitor/videoMonitor.vue'
import wetherReport from '@/components/sidebar/wetherReport/wetherReport.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:"/sidebar/wetherReport"
    },
    {
      path: '/sidebar/wetherReport',
      name: 'wetherReport',
      component: wetherReport,
    },
    {
      path: '/sidebar/authorityManagerment',
      name: 'authorityManagerment',
      component: authorityManagerment
    },
    {
      path: '/sidebar/shipManagerment',
      name: 'shipManagerment',
      component: shipManagerment
    },
    {
      path: '/sidebar/videoMonitor',
      name: 'videoMonitor',
      component: videoMonitor
    }
  ]
})
