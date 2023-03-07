import { createSlice } from '@reduxjs/toolkit'
import { fixedRoutes } from '@/router/routes'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { Route } from '@/types/router'
import type { Location } from 'react-router-dom'

export const routerSlice = createSlice({
    name: 'router',
    initialState: {
        fixedRoutes,
        asyncRoutes: <Route[]>[],
        location: {
            last: <Partial<Location>>{},
            current: <Partial<Location>>{}
        }
    },
    reducers: {
        addRoute: (state, action: PayloadAction<Route>) => {
            state.asyncRoutes.push(action.payload)
        },
        addRoutes: (state, action: PayloadAction<Route[]>) => {
            state.asyncRoutes = [...state.asyncRoutes, ...action.payload]
        },
        pushLocation: (state, action: PayloadAction<Location>) => {
            state.location.last = state.location.current
            state.location.current = action.payload
        },
        replaceLocation: (state, action: PayloadAction<Location>) => {
            state.location.last = {}
            state.location.current = action.payload
        }
    }
})

export const { addRoute, addRoutes, pushLocation, replaceLocation } =
    routerSlice.actions

export default routerSlice.reducer
