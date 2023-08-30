import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		cssMinify: true,
	},
  plugins: [
		vue(),
		svgLoader(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
	server: {
		proxy: {
			'/v1': {
				target: 'https://backend.kapi.bar',
				changeOrigin: true,
				secure: false,
			}
		}
	}
})
