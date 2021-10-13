import { createApp } from 'vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/styles.css'

import VueGtag from 'vue-gtag'

import App from './App.vue'

createApp(App)
    .use(VueGtag, { config: { id:'G-Q1C1RTM5F4' } })
	.mount('#app')
