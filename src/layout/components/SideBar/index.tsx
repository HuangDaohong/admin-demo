import { Menu } from 'antd'
import useStoreSelector from '@/hooks/useStoreSelector'
import routesToMenu from './utils/routesToMenu'

const SideBar = () => {
    const { asyncRoutes } = useStoreSelector('router')

    const items = routesToMenu(asyncRoutes)

    return (
        <Menu
            mode="inline"
            items={items}
            style={{
                height: '100%',
                borderRight: 0
            }}
        />
    )
}

export default SideBar
