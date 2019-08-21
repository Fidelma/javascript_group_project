import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import MoreInfo from '@/views/MoreInfo';
import Admin from '@/views/Admin';
import Quiz from '@/views/Quiz';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
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
