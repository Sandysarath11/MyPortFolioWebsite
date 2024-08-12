import { createRouter,createWebHistory } from "vue-router";
// import about from '../components/about.vue'
// import education from '../components/education.vue'
// import experience from '../components/experience.vue'
// import project from '../components/project.vue'
// import contact from '../components/contact.vue'

import about from "../components/views/about.vue";
import education from "../components/views/education.vue";
import experience from "../components/views/experience.vue";
import project from "../components/views/project.vue";
import contact from "../components/views/contact.vue";
import notFound from "../components/views/notFound.vue";

const routes =[

    {
    path:'/',
    name: "views.contact",
    component: contact
    },

    {
        path:'/education',
        name: "views.education",
        component: education
    },

    {
        path:'/experience',
        name: "views.experience",
        component: experience
    },

    {
        path:'/project',
        name: "views.project",
        component: project
    },

    {
        path: '/about',
        name: "views.about",
        component: about
    },

    {
        path: '/:pathMatch(.*)*',
        name: "views.notFound",
        component: notFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
