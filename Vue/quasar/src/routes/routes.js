import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Login from "@/components/Login.vue";
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/about", component: About },
  ];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});