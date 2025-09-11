import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import EditView from "@/views/EditView.vue";
import DashboardView from "@/views/DashboardView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
//Products
import ProductView from "@/views/Product/ProductView.vue";
import AddProductView from "@/views/Product/AddProductView.vue";

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
            path: '/product/add',
            name: 'add-product',
            component: AddProductView
        },
        {
            path: '/product/edit/:id',
            name: 'edit-product',
            component: EditView
        },
        {
            path: '/register',
            name: 'register-user',
            component: RegisterView
        },
        {
            path: '/login',
            name: 'login-user',
            component: LoginView
        },
        {
            path: '/profile', //add :id in the future
            name: 'Profile',
            component: ProfileView,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: DashboardView
        },
        {
            path: '/:catchAll(.*)',
            name: 'Not-Found',
            component: NotFoundView
        },
    ]
})

export default router;

