import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // 配置别名
    resolve: {
        alias: {
            '@': '/src'
        }
    },

    server: {
        open: true,
        port: 3000,
        proxy: {
            '/api/': {
                target: 'http://localhost:9000',
                changeOrigin: true
            }
        }
    }
})
