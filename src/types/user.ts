type Role = 'admin' | 'user'

type UserInfo = {
    username: string
    role: Role
}

export type { UserInfo, Role }
