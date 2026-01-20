import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import SupportView from '../views/SupportView.vue'
import StartedView from '../views/StartedView.vue'
import AccountView from '../views/AccountView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/waitlist',
            name: 'waitlist',
            component: ListView,
        },
        {
            path: '/support',
            name: 'support',
            component: SupportView,
        },
        {
            path: '/support/getting-started',
            name: 'getting started',
            component: StartedView,
        },
        {
            path: '/support/account-management',
            name: 'account management',
            component: AccountView,
        },
    ],
})

export default router