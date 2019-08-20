import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import MoreInfo from '@/views/MoreInfo';
import Admin from '@/views/Admin'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/moreinfo',
      name: 'moreinfo',
      component: MoreInfo,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    }
  ]
})
export default router;
