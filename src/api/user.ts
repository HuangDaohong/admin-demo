import service from '@/utils/request'

import type { LoginInfo } from '@/types/login'
import type { RegisterInfo } from '@/types/register'
import type { UserInfo } from '@/types/user'

const loginByUserName = (info: LoginInfo) => {
    return service<Record<string, unknown>>({
        url: '/api/login',
        method: 'post',
        data: info
    })
}

const registerByUserName = (info: RegisterInfo) => {
    return service<Record<string, unknown>>({
        url: '/api/register',
        method: 'post',
        data: info
    })
}

const getUserInfo = () => {
    return service<UserInfo>({
        url: '/api/userinfo',
        method: 'get'
    })
}

export { loginByUserName, getUserInfo, registerByUserName }
