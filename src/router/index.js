import Vue from 'vue'
import Router from 'vue-router'
import wodeyinyue from '../components/Route/mMusic.vue'
import gerenzhongxin from '../components/Route/gerenzhongxin.vue'
import faxian from '../components/Route/faxian.vue'
import dongtai from '../components/Route/dongtai.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/wodeyinyue', component: wodeyinyue},
    {path: '/gerenzhongxin', component: gerenzhongxin},
    {path: '/', component: faxian},
    {path: '/dongtai', component: dongtai}
  ]
})
