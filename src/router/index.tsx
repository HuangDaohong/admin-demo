import { Routes, Route } from 'react-router-dom'
import useRouterGuard from '@/hooks/useRouterGuard'
import useStoreSelector from '@/hooks/useStoreSelector'
import { useLocation } from 'react-router-dom'
import Layout from '@/layout'

import type { Route as R } from '@/types/router'
import type { ReactNode } from 'react'

interface RouteProps {
    path: string
    element?: ReactNode
}

const renderRoutes = (routes: R[]) => {
    return routes.map(({ name, path, component: Com, children }) => {
        const property: RouteProps = {
            path
        }

        if (Com) {
            property.element = <Com />
        }

        return (
            <Route key={name} {...property}>
                {children ? renderRoutes(children) : null}
            </Route>
        )
    })
}

const RouteTable = () => {
    const { fixedRoutes, asyncRoutes } = useStoreSelector('router')
    const location = useLocation()

    useRouterGuard(location)

    return (
        <Routes>
            {renderRoutes(fixedRoutes)}
            <Route key="Layout" path="/" element={<Layout />}>
                {renderRoutes(asyncRoutes)}
            </Route>
        </Routes>
    )
}

export default RouteTable
