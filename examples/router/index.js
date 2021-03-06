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
    {
      path: '/datepicker',
      component: (resolve) => require(['../pages/datepicker.vue'], resolve),
    },
    {
      path: '/list',
      component: (resolve) => require(['../pages/list.vue'], resolve),
    },
    {
      path: '/slider',
      component: (resolve) => require(['../pages/slider.vue'], resolve),
    },
    {
      path: '/panel',
      component: (resolve) => require(['../pages/panel.vue'], resolve),
    },
  ],
});
export default router;
