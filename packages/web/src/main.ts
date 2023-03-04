import { createApp } from 'vue'
import App from './App'
import { ImageCollector } from './utils/ImageCollector'

ImageCollector.collectAllImages()

const app = createApp(App)
app.mount('#app')
