import { createApp } from 'vue'
import App from './App'

const app = createApp(App)

const obj = {
  name: '1',
  age: 2,
}

const myKey = Object.keys(obj)

app.mount('#app')
