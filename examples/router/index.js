/* eslint-disable import/no-dynamic-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      // eslint-disable-next-line global-require
      component: (resolve) => require(['../components/index/index.vue'], resolve),
    },
  ],
});
export default router;
