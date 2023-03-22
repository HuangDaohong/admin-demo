type Role = 'admin' | 'user' | 'guest'

type UserInfo = {
    username: string
    role: Role
}

export type { UserInfo, Role }
