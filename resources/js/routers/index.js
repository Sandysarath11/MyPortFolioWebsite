import { createRouter,createWebHistory } from "vue-router";
import about from '../components/about.vue'
import education from '../components/education.vue'
import experience from '../components/experience.vue'
import project from '../components/project.vue'
import contact from '../components/contact.vue'

const routes =[

    {
    path:'/',
    component: contact
    },

    {
        path:'/education',
        component: education
    },

    {
        path:'/experience',
        component: experience
    },

    {
        path:'/project',
        component: project
    },

    {
        path: '/about',
        component: about
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
