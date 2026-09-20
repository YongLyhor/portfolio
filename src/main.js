import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { revealDirective } from './directives/reveal'

createApp(App).use(router).directive('reveal', revealDirective).mount('#app')