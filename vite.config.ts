import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('src')
            }
        ]
    },
    server: {
        proxy: {
            '/api/': {
                target: 'http://localhost:9000', //后端服务地址
                changeOrigin: true
            }
        }
    }
})
