import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: (resolve) => require(['../pages/index.vue'], resolve),
    },
    {
      path: '/action',
      component: (resolve) => require(['../pages/actionsheet.vue'], resolve),
    },
    {
      path: '/button',
      component: (resolve) => require(['../pages/button.vue'], resolve),
    },
  ],
});
export default router;
