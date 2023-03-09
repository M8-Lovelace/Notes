import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})

app.mount('#app')
