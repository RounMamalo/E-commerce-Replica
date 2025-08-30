import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import FriendsView from "@/views/FriendsView.vue";
import MessagesView from "@/views/MessagesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductView
        },
        {
            path: '/profile', //add :id in the future
            name: 'Profile',
            component: ProfileView
        },
        {
            path: '/friends',
            name: 'Friends',
            component: FriendsView
        },
        {
            path: '/messages',
            name: 'Messages',
            component: MessagesView
        },
        {
            path: '/:catchAll(.*)',
            name: 'Not-Found',
            component: NotFoundView
        },
    ]
})

export default router;

