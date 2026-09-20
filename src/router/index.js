import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    redirect: '/',
  },
  {
    path: '/skills',
    redirect: '/',
  },
  {
    path: '/projects',
    redirect: '/',
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: () => import('../views/ProjectDetailView.vue'),
    meta: { title: 'Project' },
  },
  {
    path: '/experience',
    redirect: '/',
  },
  {
    path: '/contact',
    redirect: '/',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Page Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'auto' }
  },
})

router.afterEach((to) => {
  const base = `YONG Lyhor | Data Science · Data Engineering · AI`
  const page = to.meta.title
  document.title = page === 'Home' ? base : `${page} | ${base}`
})

export default router