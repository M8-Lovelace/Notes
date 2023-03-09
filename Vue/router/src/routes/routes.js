import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/about', component: About },
  ]