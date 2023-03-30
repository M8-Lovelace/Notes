// Importar las librerías de Vue, Vue Router y Quasar
import { createApp } from 'vue'
import { router } from "./routes/routes.js"
import { Quasar } from 'quasar'

// Importaciones de quasar
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// Importar el componente principal de la aplicación
import App from './App.vue'

// Crear la instancia de Vue y pasarle el router y quasar
const myApp = createApp(App).use(Quasar, {}).use(router);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')