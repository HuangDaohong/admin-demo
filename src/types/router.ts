import type { ComponentType, MemoExoticComponent, ReactNode } from 'react'
import type { Role } from './user'

type Route = {
    name: string
    path: string
    component?: MemoExoticComponent<ComponentType>
    meta?: {
        title: string
        roles: Role[]
        icon?: ReactNode
        group?: string
        [key: string]: unknown
    }
    hidden?: boolean
    children?: Route[]
}

export type { Route }
