import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

enum MODE {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

const modeConfigMap: Record<MODE, UserConfig> = {
  [MODE.DEVELOPMENT]: {
    server: {
      host: '127.0.0.1',
      port: 6006,
      proxy: {
        '/dangdang': {
          target: 'http://127.0.0.1:6008',
        },
      },
    },
  },
  [MODE.PRODUCTION]: {},
}

export default defineConfig((configEnv) => {
  const mode = configEnv.mode
  return {
    plugins: [vue(), vueJsx()],
    ...modeConfigMap[mode],
  }
})
