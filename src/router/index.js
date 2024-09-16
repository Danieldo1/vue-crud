import { createRouter,createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

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
            name: "job-detail",
            component: JobView,
        },
        {
            path: "/jobs/edit/:id",
            name: "edit-job",
            component: EditJobView,
        },
        {
            path: "/add-job",
            name: "add-job",
            component: AddJobView,
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFound,
        },
    ],
})



export default router