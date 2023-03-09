import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes/routes.js";

// Crear el router y pasarle las rutas y el historial de navegación
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Crear la instancia de Vue y pasarle el router
const app = createApp(App);

// Montar el router en la instancia de Vue
app.use(router);

app.mount("#app");
