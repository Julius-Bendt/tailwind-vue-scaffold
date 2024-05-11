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
  ]
})

const DEFAULT_TITLE = 'DEFAULT TITLE';
router.afterEach((to, from) => {
  let title = DEFAULT_TITLE;

  if (to.meta.title != undefined) {
    title = "PAGE | " + to.meta.title;
  }
  document.title = title;
});

export default router
