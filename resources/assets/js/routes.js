import VueRouter from 'vue-router';
import home from './pages/home.vue';
import about from './pages/about.vue';
import dashboard from './pages/dashboard.vue';
import login from './pages/login.vue';
import settings from './pages/settings/index.vue';
import profile from './pages/settings/profile.vue';
import password from './pages/settings/password.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta: { middlewareAuth: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: { middlewareAuth: true }
  },
  { path: '/settings', name: 'settings', component: settings, children: [
      { path: '', redirect: { name: 'settings.profile' }},
      { path: 'profile', name: 'settings.profile', component: profile },
      { path: 'password', name: 'settings.password', component: password }
    ],
    meta: { middlewareAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.middlewareAuth)) {
    if (!auth.check()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
      return;
    }
  }
  next();
})

export default router;
