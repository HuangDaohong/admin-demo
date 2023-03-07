import { registerByUserName } from '@/api/user'

import type { RegisterInfo } from '@/types/register'

const register = async (val: RegisterInfo) => {
    const { code, message } = await registerByUserName({ ...val })

    return {
        code,
        message
    }
}

export default register
