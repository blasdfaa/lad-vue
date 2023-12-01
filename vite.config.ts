import { URL, fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { validateEnv } from './scripts/validateEnv'

// eslint-disable-next-line node/prefer-global/process
const env = loadEnv(process.env.NODE_ENV!, __dirname) // eq. import.meta.env in .cjs files
validateEnv(env)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
