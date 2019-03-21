import Vue from 'vue';
import Router from 'vue-router';
import Admin from '@/views/Admin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        name: 'Home',
      },
      children: [
        {
          path: 'posts',
          name: 'posts',
          meta: {
            name: 'Posts',
          },
          component: () => import(/* webpackChunkName: "posts" */ './views/Posts.vue'),
        },
        {
          path: 'posts/create',
          name: 'create-post',
          meta: {
            name: 'Create new post',
          },
          component: () => import(/* webpackChunkName: "posts" */ './views/CreatePost.vue'),
        },
      ],
    },
    {
      path: '/',
      redirect: { name: 'admin' },
    },
  ],
});
