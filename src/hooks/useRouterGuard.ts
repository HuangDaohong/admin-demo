import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { whiteList, notFoundRoute } from '@/router/routes'
import { getToken } from '@/utils/auth'
import useStoreSelector from '@/hooks/useStoreSelector'
import { getUserInfo } from '@/api/user'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/store/user'
import { addRoutes, addRoute } from '@/store/router'
import { generateRoutes } from '@/router/utils'

import type { Location } from 'react-router-dom'

/**
 * @description:  路由守卫
 * @param {Location} to 跳转的路由
 */
const useRouterGuard = (to: Location) => {
    const { pathname } = useLocation()
    const { userInfo } = useStoreSelector('user')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        // 防止组件卸载后，异步请求还在执行
        let isCancelled = false

        // 权限验证
        const permission = async () => {
            if (whiteList.includes(pathname)) return

            const token = getToken()

            // if (!token) return <Navigate to="/login" replace />;
            if (token === null)
                return navigate('/login', { replace: true, state: { to } })

            if (userInfo.role) {
                return
            } else {
                const { code, data } = await getUserInfo()

                if (isCancelled) return

                if (code === 1) {
                    const routes = generateRoutes(data.role)

                    dispatch(addRoutes(routes))
                    dispatch(addRoute(notFoundRoute))

                    dispatch(setUserInfo(data))
                    navigate(to.pathname)
                } else {
                    navigate('/login')
                }
            }
        }

        permission()

        return () => {
            isCancelled = true
        }
    }, [pathname])
}

export default useRouterGuard
