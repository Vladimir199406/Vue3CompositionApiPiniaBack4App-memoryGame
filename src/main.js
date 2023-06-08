import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidationPlugin from './includes/validation';
import App from './App.vue'

import './main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VeeValidationPlugin);

app.mount('#app')
