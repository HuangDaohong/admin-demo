import { asyncRoutes } from './routes'
// import produce from 'immer'

import type { Route } from '@/types/router'
import type { Role } from '@/types/user'

// const filterRoutesByRole2 = (routes: Route[], role: Role) => {
//     return routes.reduce((res, route) => {
//         if (route.meta?.roles.includes(role)) {
//             const newRoute = produce(route, draft => {
//                 const { children } = draft
//                 if (children)
//                     draft.children = filterRoutesByRole(children, role)
//             })
//             res.push(newRoute)
//         }
//         return res
//     }, <Route[]>[])
// }

const filterRoutesByRole = (routes: Route[], role: Role) => {
    return routes
        .filter(route => {
            if (route.meta?.roles.includes(role)) {
                if (route.children) {
                    route.children = filterRoutesByRole(route.children, role)
                }
                return true
            }
            return false
        })
        .map(route => {
            const newRoute = { ...route }
            delete newRoute.meta
            return newRoute
        })
}

const generateRoutes = (role: Role) => {
    return role === 'admin'
        ? asyncRoutes
        : filterRoutesByRole(asyncRoutes, role)
}

export { generateRoutes }
