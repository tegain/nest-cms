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
        {
          path: 'posts/categories',
          name: 'posts-categories',
          meta: {
            name: 'Posts categories',
          },
          component: () => import(/* webpackChunkName: "posts" */ './views/PostsCategories.vue'),
        },
        {
          path: 'posts/:id',
          name: 'edit-post',
          meta: {
            name: 'Edit post',
          },
          component: () => import(/* webpackChunkName: "posts" */ './views/EditPost.vue'),
        },
        {
          path: 'pages',
          name: 'pages',
          meta: {
            name: 'Pages',
          },
          component: () => import(/* webpackChunkName: "pages" */ './views/Pages.vue'),
        },
        {
          path: 'tasks',
          name: 'tasks',
          meta: {
            name: 'CreateTask.vue',
          },
          component: () => import(/* webpackChunkName: "tasks" */ './views/Tasks.vue'),
        },
        {
          path: 'parameters',
          name: 'parameters',
          meta: {
            name: 'Parameters',
          },
          component: () => import(/* webpackChunkName: "parameters" */ './views/Parameters.vue'),
        },
        {
          path: 'mail',
          name: 'mail',
          meta: {
            name: 'Mail',
          },
          component: () => import(/* webpackChunkName: "mail" */ './views/Mail.vue'),
        },
      ],
    },
    {
      path: '/',
      redirect: { name: 'admin' },
    },
  ],
});
