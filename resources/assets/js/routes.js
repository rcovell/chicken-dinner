import VueRouter from 'vue-router';
import store from './store/auth.js';
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
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: { middlewareAuth: true }
  },
  { path: '/settings', component: settings, children: [
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

const router = createRouter()

export default router

/**
 * Create a new router instance.
 *
 * @return {VueRouter}
 */
function createRouter () {
  const router = new VueRouter({
    // scrollBehavior,
    mode: 'history',
    routes
  })

  router.beforeEach(beforeEach)
  router.afterEach(afterEach)

  return router
}

async function beforeEach (to, from, next) {
  // Get the matched components and resolve them.
  const components = await resolveComponents(
    router.getMatchedComponents({ ...to })
  )

  if (components.length === 0) {
    return next()
  }

  // Start the loading bar.
  if (components[components.length - 1].loading !== false) {
    router.app.$nextTick(() => router.app.$loading.start())
  }

  let token = '';
  if (window.localStorage.getItem('token')) {
    token = window.localStorage.getItem('token');
  }
  if (to.matched.some(record => record.meta.middlewareAuth)) {
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
      return;
    }
  }
  next();
};

/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function afterEach (to, from, next) {
  await router.app.$nextTick()

  router.app.$loading.finish()
}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
async function resolveComponents (components) {
  return await Promise.all(components.map(async component => {
    return typeof component === 'function' ? await component() : component
  }))
}
