import { createElement } from 'react'
import { Link } from 'react-router-dom'

import type { Route } from '@/types/router'
import type { ItemType, SubMenuType } from 'antd/es/menu/hooks/useItems'

const routesToMenu = (routes: Route[], basePath = ''): ItemType[] => {
    const group = new Map<string, ItemType[]>()

    const menus = routes.reduce((res, route) => {
        if (!route.hidden) {
            const { children, meta, path, component } = route

            const completePath = `${basePath}/${path}`

            const MenuItemChildren = children
                ? routesToMenu(children, completePath)
                : null

            const menuItem: ItemType = {
                label: component
                    ? createElement(Link, { to: completePath }, meta?.title)
                    : meta?.title,
                key: completePath,
                icon: meta?.icon
            }

            if (MenuItemChildren) {
                ;(menuItem as SubMenuType).children = MenuItemChildren
            }

            if (meta?.group) {
                const { group: gp } = meta
                group.set(
                    gp,
                    group.has(gp)
                        ? [...(group.get(gp) || []), menuItem]
                        : [menuItem]
                )
            } else {
                res.push(menuItem)
            }
        }
        return res
    }, [] as ItemType[])

    group.forEach((val, key) => {
        menus.push({
            type: 'group',
            label: key,
            children: val
        })
    })

    return menus
}

export default routesToMenu
