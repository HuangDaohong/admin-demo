import { loginByUserName } from '@/api/user'

import type { LoginInfo } from '@/types/login'

const login = async (val: LoginInfo) => {
    const { code, message } = await loginByUserName({ ...val })

    return {
        code,
        message
    }
}

export default login
