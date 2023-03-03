import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <h1>DangDang Web</h1>
          <HelloWorld />
        </>
      )
    }
  },
})
