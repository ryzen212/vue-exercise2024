import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/Home.vue";
import JobView from "@/views/Jobs.vue";
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobView,
    },{
      path:'/:catchAll(.*)',
      name: "not-found",
      component: NotFound,
    }
   
  ],
});

export default router;