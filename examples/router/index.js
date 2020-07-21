import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: (resolve) => require(['../pages/index.vue'], resolve),
    },
  ],
});
export default router;
