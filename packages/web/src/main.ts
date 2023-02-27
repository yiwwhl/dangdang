import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

console.log('env', import.meta.env)

const testObj = {
  name: 'hello',
  age: 'world',
}

const res = Object.keys(testObj)

createApp(App).mount('#app')
