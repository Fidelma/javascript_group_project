import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import MoreInfo from '@/views/MoreInfo';

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
    }
  ]
})
export default router;
