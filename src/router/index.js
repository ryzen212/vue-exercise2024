import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import JobsView from "@/views/Jobs.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/Job.vue";
import AddJob from "@/views/AddJob.vue";
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
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },

    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJob,
    },
  ],
});

export default router;
