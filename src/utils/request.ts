import axios from 'axios'
import { getToken, setToken, removeToken } from './auth'
import history from 'history/browser'

import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { Response } from '@/types/utils'

type Res<T> = Promise<Response<T>>

interface Service extends AxiosInstance {
    <T>(config: AxiosRequestConfig): Res<T>
    <T>(url: string, config?: AxiosRequestConfig): Res<T>
}

const service: Service = axios.create({
    timeout: 1000 * 30
})

service.interceptors.request.use(config => {
    const token = getToken()

    if (token && config?.headers) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
})

service.interceptors.response.use(
    response => {
        const token = response.headers['authorization']

        if (token) setToken(token)

        return response.data
    },
    err => {
        const { status } = err.response || {}

        if (status === 401) {
            removeToken()

            history.replace('/login')
        }

        return {
            code: 0,
            message: err.message || '服务器错误',
            data: {}
        }
    }
)

export default service
