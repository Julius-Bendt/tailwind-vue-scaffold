import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: '/page-1',
      name: 'Page-1',
      meta: {
        title: "Page-1",
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/site/:siteId',
      name: 'site',
      meta: {
        title: "Site",
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      meta: {
        title: "404",
      },
      component: () => import('../views/PageNotFound.vue')
    },
  ]
})




const defaultTitle = import.meta.env.VITE_SITE_NAME;
router.afterEach((to, from) => {
  const title = to.meta.title != undefined ? `${defaultTitle} | ${to.meta.title}` : defaultTitle;

  document.title = title;
});

export default router
